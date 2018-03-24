import React, { Component } from 'react';
import BetButton from './BetButton';
import './BetComponent.css';

class BetComponent extends Component {

    render() {
        return (
            <div>
                <BetButton Clicked={this.props.Clicked} />
                <h1 className="moneyNumber">{this.props.money} $</h1>
                You clicked {this.props.timesClicked} times so far <br/>
                With these money, you could <b>{this.props.what ? 
                this.props.what : "... Nothing, the world would collapse"}</b>
            </div>
        );
    }
}

export default BetComponent;
