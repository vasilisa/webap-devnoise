import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { API_URL } from '../../config';
import { handleResponse } from '../helpers';
import './Instructions.css';

/*
Instruction component is created when the particpant accepts terms and conditions and proceeds to the experiment. 
It loads the participant id, and the block configurations that will be played during the game. 
*/

class Instructions extends React.Component {
    constructor(props) {
        super(props);

        const prolific_id = 'kids'

        var currentDate = new Date();
        var date        = currentDate.getDate();
        var month       = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year        = currentDate.getFullYear();
        var dateString  = date + "-" +(month + 1) + "-" + year;
    
        this.state = {
            date: dateString,
            participant_id : 1, // default
            game_id : '',       // to be determined 
            block_number : 0, 
            currentInstructionText: 1,
            TotalBlock: 2, // 1 training short and 1 full block   
            newblock_frame : true, 
            readyToProceed: false,
            redirect: false,
            prolific_id : prolific_id 
        }

    this.handleInstructionsLocal = this.handleInstructionsLocal.bind(this) // bind the method to avoid error on frames collapsed
    this.fetchParticipantInfo.bind(this); 
    this.fetchParticipantGameId.bind(this); 
       
    }; 

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
            readyToProceed: false});
        }
        else if(whichButton==="right" && curText <= 3){
      
        this.setState({currentInstructionText: curText+1,
        readyToProceed: false});
        }
        else if(whichButton==="right" && this.state.currentInstructionText===4){
            this.setState({readyToProceed: true})
            console.log(this.state.readyToProceed)
        }
        else if(whichButton==="left" && this.state.currentInstructionText===3){
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
            <p><span class="bold">Your goal is to help us find the planet with more treasures!</span></p>
            <p> At the end of the game, you will receive a score telling you how well you did.</p>
            </div>;
        }
        else if (this.state.currentInstructionText===2) {
        mytext = <div className='textbox'> <p></p> <p>You will make choice between two planets.</p> 
                <div className="translate"/>
                <div className="symbolframe">    
                    <img className="introsymbol"  src={require('../../images/planet_5.png')} alt='introsymbol'/> 
                    <img className="introsymbol"  src={require('../../images/planet_6.png')} alt='introsymbol'/> 
                </div>
                <p>After each choice you will see how many treasures (between 1 and 99) you managed to dig from the planet!</p>
                </div>
            }

        else if (this.state.currentInstructionText===3) {
            mytext = <div className='textbox'> <p></p>
            <p></p>
            <p>There is always one planet that gives more treasures than the other!</p>
            <p>But this will change through the game!</p>
            <p>You should pay attention and try to remember which planet gave more treasures in the past in order to select the right planet!</p>
            <p>Sometimes even a good planet could give fewer treasures, and a bad planet could give a lot but you should consider several digs in a row when making your choice!</p>
            </div>; }

        else if(this.state.currentInstructionText===4) {
            mytext = <div className='textbox'> <p></p>
            <p></p>
            <p>Let's do some practice!</p>
            </div>; } 
        

        return (
            <div>
            <div className="imageContainer">
                <img className="astro pos2" src={require('../../images/astraunot.png')} alt='astro'/>
            </div>
                    
            <div className="translate center">
            <div className='InstructText'>
            <center>
                <div className='title'>
                    <p><span class="bold">INSTRUCTIONS</span></p>
                </div>
                <div className="instructionsButtonContainer">

                    {this.state.currentInstructionText > 1 ? // id helps get which button was clicked to handle the 

                        <Button id="left" className="buttonInstructions" onClick={this.handleInstructionsLocal}> 
                            <span class="bold">&#8592;</span>
                        </Button>
                        :
                        <Button id="left" className="buttonInstructionsHidden">
                            <span class="bold">&#8592;</span>
                        </Button>
                    }

                    {this.state.currentInstructionText <= 4 ?
                        <Button id="right" className="buttonInstructions" onClick={this.handleInstructionsLocal}>
                            <span class="bold">&#8594;</span>
                        </Button>
                        :
                        <Button id="right" className="buttonInstructionsHidden">
                            <span class="bold">&#8594;</span>
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
