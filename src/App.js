import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import pictures from './pics.js';
import {Chance} from 'chance';

const chance = new Chance();
let score;
const win = 8;
// const id = pictures.id;

// class App extends Component {

//   state = {
//     pictures: pictures,
//     score: 0,
//     win: 8,
//   }

class App extends Component {
     constructor(props) {
       super(props);
       this.state = {
         pictures: pictures,
         score: 0,
         win: win,
         message: "",
         clickedPicId: "",
         gameOver: false,
       };
       this.handleClick = this.handleClick.bind(this);
     }

  handleClick = (id) => {
    this.handleScore(id);
    this.setState({
      clickedPicId: id,
      pictures: chance.shuffle(this.state.pictures)
    });
    
   console.log("clicked")
  }

  handleScore = (id) => {
    this.setState({score: this.state.score + 1});
    
    if (this.state.clickedPicId === id) {
      console.log("game over")
      this.setState({score:0, gameOver: true, message: "You lose!"})
    } else if (this.state.score + 1 === this.state.win) {
      this.setState({message: "You Win!"})  
      console.log("you win")
      }
    
  }


  render() {
    const myStyles = {
      firstClassName: {
        width: "200px",
        height: "200px",
        paddingLeft: "40px",
        paddingTop: "40px",
        display: this.state.gameOver ? "none" : ""
      }
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click-it</h1>
          <p>Click on the photos below to add to increase your score.  don't click on the same photo twice!</p>
        </header>
        < div className = "pictures" >
        <h3 className="score">Score: {this.state.score}</h3>
        <h3 className="message"> {this.state.message}</h3>
          {this.state.pictures.map(singleDude => {
              return (
                <img src={singleDude.image}
                     style={myStyles.firstClassName}
                     id={pictures.id}
                     onClick={() => {
                       this.handleClick(singleDude.id)
                     }} 
                />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
