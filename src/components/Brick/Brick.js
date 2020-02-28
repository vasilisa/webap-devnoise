import React from 'react';
import './Brick.css';


class Brick extends React.Component {
  render() {
    const animation_property = this.props.animation ? 'activate' : 'reset';
    const selected           = (this.props.symbolHighlight ==='') ? 'selected' : 'notSelected'
    const outcome_selected   = (this.props.symbolHighlight ==='') ? 'outcome_selected' : 'outcome_notSelected'
    
    return (      
      <div className="container">
       <img className={"symbol " + animation_property + " " + selected} src={this.props.symbol} alt='symbol' onClick={() => this.props.symbolClicked()}/>
       
       <img className={outcome_selected} src={this.props.outcome}  alt='outcome'/> 
    
       <div className={"square"  + this.props.noFeedback} alt='feedback'>{this.props.feedback}</div>
      </div>
    );
  }
}

export default Brick;
