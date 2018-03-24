import React, { Component } from 'react';
import './Dead.css';

class Dead extends Component {

    share = () => {

    };

    render() {
        return (
            <div>
                <h1>YOU'RE DEAD! YOU JUST LOST  <br /> {this.props.money} $<br /> CLICKING {this.props.timesClicked} TIMES<br/>
                </h1>

                <button className="btn1" onClick={this.props.Clicked}>Try Again</button> <br /> <br />
                <button className="btn2" onClick={this.share}>Share On Facebook</button>

            </div>
        );
    }
}

export default Dead;
