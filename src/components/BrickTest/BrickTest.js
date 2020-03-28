import React from 'react';
import './BrickTest.css';


class BrickTest extends React.Component {

  render() {

    const selected = (this.props.symbolHighlight ==='') ? 'selected' : 'notSelected'
    
    return (
      <div className="BrickTest"> 
      <div className="container_test">
       <img className={"symbol " + selected} src={this.props.symbol} alt='symbol' onClick={() => this.props.symbolClicked()}/>
       </div>
      </div>
      
    );
  }
}

export default BrickTest;

