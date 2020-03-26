import React from 'react';
import './BrickIntro.css';


class BrickIntro extends React.Component {
  render() {
    const selected           = (this.props.symbolHighlight ==='') ? 'selected_intro' : 'notSelected_intro'
    const outcome_selected   = (this.props.symbolHighlight ==='') ? 'outcome_selected_intro' : 'outcome_notSelected_intro'
    const praise_selected    = (this.props.symbolHighlight ==='') ? 'praise_selected' : 'praise_notSelected'
    
    return (
      <div className="BrickIntro"> 
      <div className="textIntro"> 
        {this.props.text1}
      </div>
      <div className={praise_selected}>
      <center>
        {this.props.text2} 
      </center> 
      </div>
      <div className="container_intro">
       <img className={"symbol " + selected} src={this.props.symbol} alt='symbol' onClick={() => this.props.symbolClicked()}/>
       <img className={outcome_selected} src={this.props.outcome}  alt='outcome'/> 
       <div className={"square"  + this.props.noFeedback} alt='feedback'>{this.props.feedback}</div>
      </div>
      </div>
      
    );
  }
}

export default BrickIntro;

