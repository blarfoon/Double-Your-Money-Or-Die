import React, { Component } from 'react';
import logo from './index.png';
import './App.css';
import Dead from './Dead';
import BetComponent from './BetComponent';
import bigInt from 'big-integer';

class App extends Component {

  state = {
    money: bigInt(1).toString(),
    timesClicked: 0,
    isDead: false
  };

  prices = [
    "buy a slice of pizza",
    "buy a starbucks's brewed coffee",
    "buy a Big Mac",
    "buy a movie ticket",
    "buy an average restaurant meal",
    "buy almost 1 gram of gold",
    "buy a typical PC or console game",
    "buy a cheap smartphone",
    "buy a cheap suite",
    "buy an average sofa",
    "buy a suspension bike",
    "buy a gaming PC",
    "buy 1 gram of plutonium",
    "buy an average grand piano",
    "buy the yubari king melon",
    "buy an average car",
    "buy half gram of diamond",
    "buy 40 000 hotdogs",
    "buy an average house (in the US)",
    "buy the screaming eagle cabernet sauvignon",
    "buy a small castle",
    "buy the tom ford diamond shoes",
    "buy the heintzman crystal piano",
    "buy an average school (in the US)",
    "buy a black diamond gold iphone or 23 000 Iphone 7",
    "buy a Marie Antoinette's watch",
    "buy a 1963 Ferrari 250 GTO or 130 Lamborghini Aventador",
    "buy the L'Homme qui marche I sculpture",
    "buy de Kooning's Interchange (the most expensive painting)",
    "buy the Lanai Island, Hawaii",
    "buy a round trip to the Moon",
    "buy a B-2 Spirit",
    "buy 3 cruise ships",
    "buy almost 5 Space Shuttles",
    "buy the Abraj Al Bait building",
    "reach Jeff Bezos's net worth (CEO of Amazon) (2016)",
    "reach Mark Zuckerberg's net worth (CEO of Facebook) (2016)",
    "reach Jeff Bezos's net worth (CEO of Facebook) (2018) and still have plenty of money to spend",
    "reach the Rothschild's family net worth (2016)",
    "build the US Interstate Highway System",
    "buy Apple (or 2 billions apples)",
    "put 8.33 million people through all four years of college",
    "buy all the Sports Leagues and put 8.33 million people through all four years of college",
    "reach the GDP of Germany and Japan together",
    "pay the US's national debt",
    "pay the US's and China's national debt",
    "buy 1 gram of anti matter",
    "reach the total value of all financial assets of the world",
    "IDK",
    "IDK",
    "IDK",
    "IDK",
    "IDK",
    "reach the value of all earth's resources",
    "IDK",
    "IDK",
    "IDK",
    "IDK",
    "IDK",
    "IDK",
    "IDK",
    "reach the value of all sun's resources",
    "At this point you could stop pressing the button and live the richest life you've ever experienced. Or you could just keep pressing the button to see how far you can go :)",
  ];

  addDots(nStr) {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      // eslint-disable-next-line
      x1 = x1.replace(rgx, '$1' + '.' + '$2'); // changed comma to dot here
    }
    return x1 + x2;
  }

  btnClick = (e) => {
    let rnd = Math.random();
    if (rnd * 100 > 99) {
      this.setState({
        isDead: true,
      });
    }
    else {
      this.setState((prevState) => ({
        money: bigInt(prevState.money).times(2).toString(),
        timesClicked: prevState.timesClicked + 1
      }));
    }
  }

  tryAgain = (e) => {
    this.setState({
      isDead: false,
      money: 1,
      timesClicked: 0
    });
  };

  render() {
    return (
      <div>
        <div className="App content">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Double Your Money Or Die</h1>
          </header>
          <div className="headerTitle">
            <h3>Welcome to "Double Your Money Or Die". This game is inspired by <a href="https://www.quora.com/Press-a-button-and-there-is-a-99-chance-of-doubling-your-money-and-a-1-chance-of-losing-it-all-You-are-given-1-to-start-How-many-times-will-you-press-the-button">this</a> Quora discussion.<br />
              Every time you will click the button "Double Or Die", you will have a 99% probability to double your money and just 1% to die.</h3>
            <div className="money">
              {this.state.isDead ?
                <Dead Clicked={this.tryAgain} what={this.prices[this.state.timesClicked]} timesClicked={this.state.timesClicked} money={this.addDots(this.state.money)} /> :
                <BetComponent Clicked={this.btnClick} what={this.prices[this.state.timesClicked]} timesClicked={this.state.timesClicked} money={this.addDots(this.state.money)} />}
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Developed By <a href="https://gorilladevs.com">GorillaDevs ™</a> @ Copyright 2018</p>
        </div>
      </div>
    );
  }
}

export default App;
