import React from 'react';
import PropTypes from 'prop-types';
import './Score.css';
import { Button } from 'react-bootstrap';


function Score(props) {

let text 
    
      if (props.score==='3.0') {

        text = <div className='SurveyIntroText'>
                <p><span className="bold">Wow Amazing! You helped us collecting a lot of <span className="bold red">rubies</span> !!!</span></p>
                <p><span className="bold"> You scored <span className="bold red">500 rubies</span> more than our super robot Brainzy !</span></p>
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
            <img className="robot" src={require('../../images/brainzy3.png')} alt='robot'/>
        </div>
        <div>
          <Button className="buttonFinish" onClick={()=>props.onClicked()} alt='robot'>Finish</Button>
        </div>
      
        </center>
        </div>
        );
      }
      else if (props.score==='1.5') {

        text = <div className='scoretext'>
                <p><span className="bold">Awesome! You helped us collect a lot of <span className="bold red">rubies</span> !!! <span class="bold red">rubies</span>!</span></p>
                <p><span className="bold"> You scored <span className="bold red">300 rubies</span> more than our super robot Brainzy!</span></p>
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
            <img className="robot" src={require('../../images/brainzy3.png')} alt='robot'/>
        </div>
        </center>
        <div>
            <Button className="buttonFinish" onClick={()=>props.onClicked()} alt='robot'>Finish</Button>
        </div>
      </div>
        );
    }
      else {

        text = <div className='scoretext'>
                <p><span className="bold">Well done! You helped us collect a lot of <span className="bold red">rubies !!!</span> !</span></p>
                <p><span className="bold">You scored almost as good as what our robot Brainzy could do !</span></p>
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
            <img className="robot" src={require('../../images/brainzy3.png')} alt='robot'/>
        </div>
        <div>
            <Button className="buttonFinish" onClick={()=>props.onClicked()} alt='robot'>Finish</Button>
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

