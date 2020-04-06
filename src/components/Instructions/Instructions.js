import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { API_URL } from '../../config';
import { handleResponse } from '../helpers';

import BrickIntro from '../BrickIntro/BrickIntro.js';
import queryString from 'query-string';


import './Instructions.css';


/*
Instruction component is created when the particpant accepts terms and conditions and proceeds to the experiment. 
It loads the participant id, and the block configurations that will be played during the game. 
*/

class Instructions extends React.Component {
    constructor(props) {
        super(props);

        // Get the URL from PROLIFIC and PROLIFIC_ID for the USER 
        let url    = this.props.location.search;
        let params = queryString.parse(url);

        const prolific_id = (params['USER_ID']=== undefined ? 'undefined' : params['USER_ID']) 

        console.log(prolific_id) 

        var currentDate = new Date();
        var date        = currentDate.getDate();
        var month       = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year        = currentDate.getFullYear();
        var dateString  = date + "-" +(month + 1) + "-" + year;
        
        // Define intitial left and right symbols: 

        const current_symbols = {0: require('../../images/planet_5.png'),  
                                1: require('../../images/planet_6.png')}

        const required_pool_outcome    = {0: require('../../images/rubin.png'),  
                                          1: require('../../images/rubin.png')}

        this.state = {
            date: dateString,
            participant_id : 1, // default
            game_id : '',       // to be determined 
            block_number : 0, 
            currentInstructionText: 1,
            TotalBlock: 4,      // 2 training short blocks and 2 full block   
            newblock_frame : true, 
            readyToProceed: false,
            redirect: false,
            prolific_id      : prolific_id, // this will be a individual USER_ID not prolific one  
            current_symbols  : current_symbols, 
            feedback         : Array(2).fill(null),
            noFeedback       : ['null', 'null'],
            symbolHighlight  : ['null', 'null'],
            current_rewards  : Array(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 10) + 1)),
            clickable        : true,
            current_outcomes :required_pool_outcome, 
            text1: 'Try clicking a planet!',
            text2: '',
            reward: '',
        }

    this.handleInstructionsLocal = this.handleInstructionsLocal.bind(this) // bind the method to avoid error on frames collapsed
    this.fetchParticipantInfo.bind(this); 
    this.fetchParticipantGameId.bind(this); 
    this.renderBrick.bind(this); 
    this.handleClick.bind(this); 
       
    }; 

    renderBrick(i) {
    return (   
      <BrickIntro
        symbol          = {this.state.current_symbols[i]}
        feedback        = {this.state.feedback[i]}
        outcome         = {this.state.current_outcomes[i]}
        noFeedback      = {this.state.noFeedback[i]}
        symbolHighlight = {this.state.symbolHighlight[i]}
        symbolClicked   = {() => this.handleClick(i)}
        text1           = {this.state.text1}
        text2           = {this.state.text2}
      />
    );
  }


  handleClick(i) {
    // create feedback array here randomly drawn between 1 and 99 
    
    if (this.state.clickable) {

      const feedback        = this.state.feedback.slice();
      const noFeedback      = this.state.noFeedback.slice(); // change here 
      const symbolHighlight = this.state.symbolHighlight.slice();

      
    // Partial feedback
      feedback[i]          = this.state.current_rewards[i]  
      feedback[1 - i]      = null // unchosen option this will work for the partial feedback
      noFeedback[1 - i]    = 'null'
      noFeedback[i]        = ''
      symbolHighlight[i]   = ''
      symbolHighlight[1-i] = 'null'

      const chosen_r    = feedback[i]

      console.log('Chosen reward',chosen_r)

    
    this.setState({        
        feedback   : feedback,
        clickable  : false,
        noFeedback : noFeedback,
        symbolHighlight: symbolHighlight,
        text1: '',
        text2: 'Well done!',
        reward: chosen_r
      })
    }
    }
  
    // Mount the component to call the BACKEND and GET the information
    componentWillMount() {
    // document.body.style.background = "fff";  
    this.fetchParticipantInfo();
    } 
    
    fetchParticipantInfo () {
         fetch(`${API_URL}/participants_data/last_participant_id`) 
           .then(handleResponse)
           .then((data) => {
             const participant_id_ = parseInt(data['new_participant_id'])
             
            console.log(participant_id_)
            
            this.setState({
                     participant_id : participant_id_,
                 });
             this.fetchParticipantGameId(participant_id_)
         })
           .catch((error) => {
            console.log(error)
         });
        }

    // Based on the participant ID, determine the game_id and then fetch the game specifications 
    fetchParticipantGameId() {
        fetch(`${API_URL}/participants_game/`+this.state.participant_id +'/'+this.state.prolific_id +'/'+this.state.date) 
           .then(handleResponse)
           .then((data) => {
             const game_id_ = parseInt(data['game_id'])
            console.log(game_id_)
            this.setState({
                     game_id : game_id_,
                 });
         })
           .catch((error) => {
            console.log(error)
         });
        }

    // Transition between the instruction screens   
    handleInstructionsLocal(event){
        var curText     = this.state.currentInstructionText;
        var whichButton = event.currentTarget.id;
    
        if(whichButton==="left" && curText > 1){
        this.setState({currentInstructionText: curText-1,
            clickable: true,
            text1: 'Try clicking a planet!',
            feedback         : Array(2).fill(null),
            noFeedback       : ['null', 'null'],
            symbolHighlight  : ['null', 'null'],
            current_rewards  : Array(Math.floor((Math.random() * 90) + 3), Math.floor((Math.random() * 90) + 3)),
            readyToProceed: false});
        }
        else if(whichButton==="right" && curText <= 5){
      
        this.setState({currentInstructionText: curText+1,
        readyToProceed: false});
        }
        else if(whichButton==="right" && this.state.currentInstructionText===6){
            this.setState({readyToProceed: true})
            console.log(this.state.readyToProceed)
        }
        else if(whichButton==="left" && this.state.currentInstructionText===5){
            this.setState({readyToProceed: false,
                          currentInstructionText: curText+1})
        }; 
    }

    // change the router type to pass the props to the child component 
    redirectToTarget = () => {
    this.props.history.push({
       pathname: `/Block`,
       state: {participant_info: this.state, newblock_frame:this.state.newblock_frame} 
     })
    }

    render() {
        let mytext
        if (this.state.currentInstructionText===1) {
            mytext = <div className='textbox'> <p></p>
            <p> Wellcome on board of the space explorer!</p>
            <p>You are on a mission to find magical <span className="bold red">rubies</span> !</p>
            <p>Your goal is to help us find out which planet has <span className="bold">more</span> <span className="bold red">rubies</span> on it!</p>
            <p> We will tell you how well you did at the end of the game!</p>
            </div>;
        }
        else if (this.state.currentInstructionText===2) {
        mytext = <div className='textbox'> <p></p> <p>There will be two planets to pick from.</p> 
                <div className="translate"/>
                <p>Each time you pick a planet,</p> 
                <p>the space digger will show how many <span className="bold red">rubies</span> you got.</p>
                <p>You can get between 1 and 99 <span class="bold red">rubies</span> at once.</p>
                </div>
            }

        else if (this.state.currentInstructionText===3) {
        mytext = <div> 
                    <div  className="allBricks">
                    <span className='brick1'>  {this.renderBrick(0)} </span>
                    <span className='brick2'>  {this.renderBrick(1)} </span>
                    </div>
                </div>
             }

        else if (this.state.currentInstructionText===4) {

            mytext = <div className='textbox'> <p></p>
            <p></p>
            <p>You just won <span class="bold red">{this.state.reward} rubies!</span></p>
            <p>There will <span className="bold">always</span> be <span class="bold">one planet</span></p> 
            <p>that gives you <span className="bold">more</span> <span className="bold red">rubies</span> than the other planet.</p>
            <p>However, it won't be the same planet during the whole game!</p>
            <p>For example, sometimes the <span className="bold blue">blue planet</span> will be better</p>
            <p>but sometimes the <span className="bold purple">purple planet</span> will be better.</p>
            <p>It's up to you to find out!</p>
            </div>; }

        else if (this.state.currentInstructionText===5) {
            mytext = <div className='textbox'>
            <p></p>
            <p><span className="bold">Attention!</span></p>
            <p>Occasionally the space digger will break down and even though the planet has lots of <span className="bold red">rubies</span> on it, 
               you might not get that many out!</p>
            <p>This means you will need <span class="bold">to remember</span></p>
            <p>which planet gives you the most <span className="bold red">rubies</span> overall.</p> 
            </div>
        }

        else if(this.state.currentInstructionText===6) {
            mytext = <div className='textbox'> <p></p>
            <p></p>
            <p>Let's do some practice!</p>
            </div>;} 
        
        return (
            <div>
            <div className="imageContainer">
                <img className="astro pos2" src={require('../../images/astraunot.png')} alt='astro'/>
            </div>
                    
            <div className="translate center">
            <div className='InstructText'>
            <center>
                <div className='title'>
                    <p><span className="bold">INSTRUCTIONS</span></p>
                </div>
                <div className="instructionsButtonContainer">

                    {this.state.currentInstructionText > 1 ? // id helps get which button was clicked to handle the 

                        <Button id="left" className="buttonInstructions" onClick={this.handleInstructionsLocal}> 
                            <span className="bold">&#8592;</span>
                        </Button>
                        :
                        <Button id="left" className="buttonInstructionsHidden">
                            <span className="bold">&#8592;</span>
                        </Button>
                    }

                    {this.state.currentInstructionText <= 6 ?
                        <Button id="right" className="buttonInstructions" onClick={this.handleInstructionsLocal}>
                            <span className="bold">&#8594;</span>
                        </Button>
                        :
                        <Button id="right" className="buttonInstructionsHidden">
                            <span className="bold">&#8594;</span>
                        </Button>
                    }
                    </div>

                    {this.state.readyToProceed ? 
                        this.redirectToTarget()
                        : 
                    null
                }
                <div>
                    {mytext}
                </div>
            
        </center>
        </div>   
        </div>
        </div>
        ) 
    }
}

export default withRouter(Instructions);
