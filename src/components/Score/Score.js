import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './Score.css';

function Score(props) {

 // console.log(props.score) 
 let text 
    
      if (props.score==='3.0') {

        text = <div className='SurveyIntroText'>
                <p><span class = "bold">Wow! You helpt us collecting more than 500 treasures !!!</span></p>
                <p><span class = "bold"> Your scored better than that our super robot Brainzy !</span></p>
                </div>
      
      return (
        <div>
        <center> 
        <div className="scoretext">
          <div>
            {text}           
          </div>
        </div>  
        <div>
            <img className="rocket" src={require('../../images/rocket2.png')} onClick={()=>props.onClicked()} alt='rocket'/>
            <img className="robot" src={require('../../images/robot.png')} alt='robot'/>
        </div>
        </center>
        </div>
        );
      }
      else if (props.score==='1.5') {

        text = <div className='scoretext'>
                <p><span class = "bold">Awesome! You helpt us collect more than 300 treausres!</span></p>
                <p><span class = "bold"> You did as well as our best robot Brainzy !</span></p>
                </div>
      
      
        return (
      <div>
        <center> 
        <div className="scoretext">
          <div>
            {text}           
          </div>
        </div>  
        <div>
            <img className="rocket" src={require('../../images/rocket2.png')} onClick={()=>props.onClicked()} alt='rocket'/>
            <img className="robot" src={require('../../images/robot.png')} alt='robot'/>
        </div>
        </center>
      </div>
        );
    }
      else {

        text = <div className='scoretext'>
                <p><span class = "bold">Well done! You helpt us collecting more than 100 treasures !</span></p>
                <p><span class = "bold">It is almost as good as what our robot Brainzy could do !</span></p>
                </div>

        return (
        <div>
        <center> 
        <div className="scoretext">
          <div>
            {text}           
          </div>
        </div>  
        <div>
            <img className="rocket" src={require('../../images/rocket2.png')} onClick={()=>props.onClicked()} alt='rocket'/>
            <img className="robot" src={require('../../images/robot.png')} alt='robot'/>
        </div>
        </center>
        </div>);
      }
  }

Score.propTypes = {
  score: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired
};

export default Score;

