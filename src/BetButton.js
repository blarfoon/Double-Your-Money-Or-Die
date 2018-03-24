import React, { Component } from 'react';
import './BetButton.css';

class BetButton extends Component {
constructor(props){
  super(props);
  console.log(props);
}

  render() {
    return (
        <div>
            <button className="btn" onClick={ this.props.Clicked }>Double or Die</button>
        </div>
    );
  }
}

export default BetButton;
