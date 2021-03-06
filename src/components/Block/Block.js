import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { API_URL } from '../../config';
import { handleResponse } from '../helpers';

import { CSSTransitionGroup } from 'react-transition-group';

import Score from '../Score/Score';
import './Block.css'
import BrickTest from '../BrickTest/BrickTest'; 


class Block extends React.Component {
  constructor(props){
    super(props);
    const participant_info = this.props.location.state.participant_info

    const current_symbols = {0: require('../../images/planet_5.png'),  
                                1: require('../../images/planet_6.png')}

    
    const block_info = {

      position      : [],
      reward_1      : [],
      reward_2      : [],
      block_feedback: '',  
      trial_numb    : 0,
      block_number  : '',
      block_type    : '',
      TotalTrial    : '',
      outcome       : '',
    }

    this.state = {
      participant_info : participant_info,
      block_info       : block_info,
      newblock_frame   : this.props.location.state.newblock_frame,
      pool_symbols     : {},
      pool_outcomes    : {}, 
      score : -1,
      load_bonus: false,
      restart: false, 
      textfeedback: '',
      current_symbols: current_symbols,
      symbolHighlight  : ['null', 'null'],
      clickable        : true,
            
    }

    this.fetchBlock.bind(this);
    this.fetchSymbols.bind(this);
    this.redirectToScore.bind(this); 
    this._isMounted = false;
    this._handleGoBack.bind(this);
    this.renderBrickTest.bind(this);    
  }

    
  redirectToTarget () {
      // console.log(this.state.pool_symbols)
      if((this.state.participant_info.block_number <= (this.state.participant_info.TotalBlock)))
          {           
          if (this.state.newblock_frame){ // if TRUE proceed to the board
          this.setState({newblock_frame : false})
          this.props.history.push({
           pathname: `/Board`,
           state: {participant_info: this.state.participant_info,
                   block_info      : this.state.block_info,
                   pool_symbols    : this.state.pool_symbols,
                   pool_outcomes   : this.state.pool_outcomes,
                 }
          })}
          else 
          {
            if (this._isMounted)
            {
              
              // console.log(this.state.participant_info.block_number)
              const newblocknumber = this.state.participant_info.block_number + 1
              
              console.log('Block number updated',newblocknumber)

              if (newblocknumber === this.state.participant_info.TotalBlock+1){
                // console.log('Fetching the score')
                this.fetchScore()
                }

              else {
                this.fetchBlock(this.state.participant_info.game_id,newblocknumber+1) //this.state.participant_info.block_number
                this.fetchSymbols(this.state.participant_info.game_id,newblocknumber+1); 
                this.setState({newblock_frame : true, participant_info : {...this.state.participant_info, block_number:newblocknumber},}) // what gets updated 
              }
            }
          }
        }
      }
    
  // When the task is over 
  fetchScore() {
  if (this._isMounted) {

    fetch(`${API_URL}/participants_data/score/`+ this.state.participant_info.participant_id +'/'+ this.state.participant_info.game_id +'/'+this.state.participant_info.prolific_id)
            .then(handleResponse)
            .then((data) => {
              const bonus = data['bonus']
              // console.log(bonus)

              
    let body = { 
              'participant_id'  : this.state.participant_info.participant_id,
              'prolific_id'     : this.state.participant_info.prolific_id,
              'date'            : this.state.participant_info.date,
              'bonus'           : bonus}
              
    // console.log(body) 
    fetch(`${API_URL}/participants_data_bonus/create/`+this.state.participant_info.participant_id +'/'+this.state.participant_info.prolific_id, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(body)
     });

     this.setState({
                  score : bonus,
                  loading : false,
                  load_bonus: true,
                  newblock_frame : true,
                  participant_info : {...this.state.participant_info, block_number:this.state.participant_info.TotalBlock+1}
                });
            }) 

    .catch((error) => {
      this.setState({ error : error.errorMessage, loading: false, load_bonus: false });
      });

    
  }
}

redirectToScore() {
if (this.state.load_bonus === false) {
  this.fetchScore() 
}
  
else if  (this.state.load_bonus === true){
  return (
        <Score
          score      = {this.state.score}  
          onClicked  = {this.redirectToExternal} 
        />
      );
  }
}

  redirectToExternal() {
    window.location.href = 'https://devcompsy.org/team/';
  } 
  
  componentDidMount() {  
  this._isMounted = true;
  this._isMounted && this.fetchBlock(this.state.participant_info.game_id,this.state.participant_info.block_number+1);
  this._isMounted && this.fetchSymbols(this.state.participant_info.game_id,this.state.participant_info.block_number+1);
  window.history.pushState(window.state, null, window.location.href);
  window.addEventListener('popstate', e => this._handleGoBack(e));
  window.onbeforeunload = this._handleRefresh
  }

  _handleRefresh(evt){
    return false // error message when refresh occurs
  }

  _handleGoBack(event){
    window.history.go(1);
  }

  componentWillUnmount()
   {
    this._isMounted = false;
   }  

  fetchSymbols(game_id_,block_number_) {
    fetch(`${API_URL}/games/`+game_id_+'/'+block_number_) 
      .then(handleResponse)
      .then((data) => {

        const required_pool_of_symbols = Object.keys(data['symbols']).map((key, index) => (require('../../images/' + data['symbols'][key])))
        
        console.log(required_pool_of_symbols)
        // const required_pool_of_symbols = Object.keys(data['symbols']).map((key, index) => (require('../../images/' + 'planet_'+[key]+'.png')))
        const required_pool_outcome    = {0: require('../../images/rubin.png'),  
                                          1: require('../../images/rubin.png')}

        console.log(required_pool_outcome)

        console.log(required_pool_of_symbols)    

          this.setState({
            pool_symbols  : required_pool_of_symbols,
            loading       : false, 
            pool_outcomes : required_pool_outcome  
          });
        })

      .catch((error) => {
        this.setState({ error : error.errorMessage, loading: false });
         });
       }

// This is to get the data for a specific block from the Back 
  fetchBlock(game_id_,block_number_) {

    const outcome      = 'rubin' // (this.state.block_info.outcome==='diamond') ? 'rubin': 'diamond'
        
    this.setState({ loading: true });
    const fetchResult = fetch(`${API_URL}/game_blocks/`+game_id_+'/'+block_number_)
      .then(handleResponse)
      .then((data) => {

        const block_info = {
          block_number   : data.block_number,
          block_feedback : data.block_feedback, 
          block_type     : data.block_type,
          reward_1       : Object.keys(data['reward_1']).map((key, index) => (data['reward_1'][key])),
          reward_2       : Object.keys(data['reward_2']).map((key, index) => (data['reward_2'][key])),
          th_reward_1    : Object.keys(data['th_reward_1']).map((key, index) => (data['th_reward_1'][key])),
          th_reward_2    : Object.keys(data['th_reward_2']).map((key, index) => (data['th_reward_2'][key])),
          position       : Object.keys(data['position']).map((key, index) => (data['position'][key])),
          trial_numb     : 0,
          TotalTrial     : Object.keys(data['reward_1']).length, 
          outcome        : outcome, 
        }
          
        this.setState({
          block_info: block_info,
        });
        
        console.log(this.state.block_info)
      })
        .catch((error) => {
          this.setState({ error : error.errorMessage, loading: false });
      });
    const response = fetchResult;
    return response
  }

renderBrickTest(i) {
    return (   
      <BrickTest
        symbol          = {this.state.current_symbols[i]}
        symbolHighlight = {this.state.symbolHighlight[i]}
        symbolClicked   = {() => this.handleClick(i)}
      />
    );
  }
 

 handleClick(i) {
    // create feedback array here randomly drawn between 1 and 99 
    
    if (this.state.clickable) {

      const symbolHighlight = this.state.symbolHighlight.slice();

    if (i==0) {
      var textfeedback = 'Correct! You are right!'
    }

    else if (i==1) {
      var textfeedback = 'Ooops, you are wrong!'
    }

      symbolHighlight[i]   = ''
      symbolHighlight[1-i] = 'null'

    this.setState({        
        clickable: false,
        symbolHighlight: symbolHighlight,
        textfeedback: textfeedback,
        restart: true, 
      })
    }
}
 
render()
  { 
    let text
    if ((this.state.participant_info.block_number === 0) && (this.state.newblock_frame)) // first before the reversal 
    { 
    return (
      <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>

      <div>
      <img className="astro2" src={require('../../images/astraunot2.png')} alt='astro'/>
        
      <center> 
      <div className="instructionsButtonContainer">
        <center>
              <img className="rocket" src={require('../../images/rocket4.png')} onClick={()=>this.redirectToTarget()} alt='rocket'/>
        </center>
      </div>
      </center> 
      </div>
      </CSSTransitionGroup>);
    } 
    else if ((this.state.participant_info.block_number===0) && (this.state.newblock_frame===false) && (this.state.restart===false)) // at the end of first training
    {
      text = <div className='textbox3'> 
                <p>Did you find which planet </p>
                <p>had more <span className='bold red'>rubies</span> on it so far?</p>
                <div className="allBricks">
                  <span className='brick1Test'>{this.renderBrickTest(0)}</span>
                  <span className='brick2Test'>{this.renderBrickTest(1)}</span>
                </div>
              </div>

      return (
        <CSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}>
          <div>
          <center> 
          <div className="instructionsButtonContainer">
            <div>
              {text}           
            </div>
          </div>
          </center>
          </div>
          </CSSTransitionGroup>);
    
    }
    else if ((this.state.participant_info.block_number===0) && (this.state.newblock_frame===false) && (this.state.restart===true)) // at the end of first training
    {
      text = <div className='textbox'>
              {this.state.textfeedback}
              <p>It was the <span className="bold blue">blue planet</span> !</p>
             </div>

        return (
          <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
            <div>
            <center> 
                <div className="instructionsButtonContainer">
            <div>
              {text}           
            </div>
            <center>
              <img className="rocket" src={require('../../images/rocket3.png')} onClick={()=>this.redirectToTarget()} alt='rocket'/>
            </center>
          </div>
          </center>
          </div>
          </CSSTransitionGroup>);
    }
      
    else if ((this.state.participant_info.block_number===1) && (this.state.newblock_frame===true) && (this.state.restart===true))
      {
      text = <div className='textbox'>
              <p>Now on this will change</p> 
              <p> and the <span className="bold purple">purple planet</span> will have more <span className='bold red'>rubies</span>!</p>
              <p>Try to dig from both planets and see when it happens!</p> 
             </div>

        return (
          <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
            <div>
            <center> 
                <div className="instructionsButtonContainer">
            <div>
              {text}           
            </div>
            <center>
              <img className="rocket" src={require('../../images/rocket3.png')} onClick={()=>this.redirectToTarget()} alt='rocket'/>
            </center>
          </div>
          </center>
          </div>
          </CSSTransitionGroup>);
    }
    else if ((this.state.participant_info.block_number===1) && (this.state.newblock_frame===false))
    
    {
      text = <div className='textbox'>
                <p>Did you notice that the <span className="bold purple">purple planet</span> had more <span className="bold red">rubies</span> this time?</p>
                <p>In the real game we won't tell you when the planet that has more <span className="bold red">rubies</span> on it will change!</p> 
                <p> It is important that you pay attention to these changes in order to win!</p>
                </div>
      
        return (
          <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
            <div>
            <center> 
                <div className="instructionsButtonContainer">
            <div>
              {text}           
            </div>
            <center>
              <img className="rocket" src={require('../../images/rocket3.png')} onClick={()=>this.redirectToTarget()} alt='rocket'/>
            </center>
          </div>
          </center>
          </div>
          </CSSTransitionGroup>);
    }
    else if ((this.state.participant_info.block_number===2) && (this.state.newblock_frame)) // TRUE 
    {
      text = <div className='textbox'><p>Great! You finished the training!</p>
                  <p></p>
                  <p>Let's start the real game now!</p>
                  <p>Finding which planet gives more <span className="bold red">rubies</span> will be harder now, so pay attention!</p></div>
      return (
      <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>
        <div>
        <div>
        <img className="astro2" src={require('../../images/astraunot2.png')} alt='astro'/>
        <img className="rubin"  src={require('../../images/rubin.png')} alt='rubin'/>
        </div>
        <center> 
        <div>
          <div className="textbox">
            {text}  
          <div className="translate"/>
          </div>
          <center>
            <Button className="buttonInstructions" onClick={()=>this.redirectToTarget()}>
            &#8594;
            </Button>
          </center>
        </div>
        </center>
        </div>
        </CSSTransitionGroup>);
    }

    else if ((this.state.participant_info.block_number===2) && (this.state.newblock_frame===false)){  // adjust here for the final score 
      
      text = <div className='symbolframe'><p>Let's play again!</p>
              <p>Remember that the planet which gives more <span className="bold red">rubies</span> can change!</p>
            </div>
      
        return(
          <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
          <div>
            <img className="robot2" src={require('../../images/brainzy2.png')} alt='astro'/>
            <center> 
            <div>
            <div className="textbox2">
              {text}  
            </div>
            <center>
              <img className="rocket" src={require('../../images/rocket3.png')} onClick={()=>this.redirectToTarget()} alt='rocket'/>
            </center>
        </div>
        </center>
        </div>
        </CSSTransitionGroup>);
      }

    else if ((this.state.participant_info.block_number===3) && (this.state.newblock_frame===true)){
       return(
          <div>{setTimeout(()=>this.redirectToTarget(),800)}</div>
        ) 
      }

    else if ((this.state.participant_info.block_number===this.state.participant_info.TotalBlock+1) && (this.state.load_bonus===true))
    {
      return(
        <div>{this.redirectToScore()}</div>
        )
    }
    else if ((this.state.participant_info.block_number===3) && (this.state.newblock_frame===false))
    {
      return(
        <div>{setTimeout(()=>this.redirectToScore(),800)}</div>
        )
    }
}
}

export default withRouter(Block);