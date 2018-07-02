import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import pictures from './pics.js';
import {Chance} from 'chance';

const chance = new Chance();
let score;
const win = 8;

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
         message: ""
       };
       this.handleClick = this.handleClick.bind(this);
     }

  handleClick = () => {
    this.setState({pictures: chance.shuffle(this.state.pictures)});
    this.handleScore();
    
   console.log("clicked")
  }

  handleScore = () => {
    this.setState({score: this.state.score + 1});

    if (this.setState.score + 1 === this.state.win) {
      console.log("you win")
    } else {
      console.log("loser")
    }
  }

  // loser = () => {
  //   if (this.setState.score + 1 > this.state.win){
  //     console.log("lost")
  //   }
  // }

  render() {
    const myStyles = {
      firstClassName: {
        width: "200px",
        height: "200px",
        paddingLeft: "40px",
        paddingTop: "40px"
      },
      secondClassName: {
        
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
          {this.state.pictures.map(singleDude => {
              return (
                <img src={singleDude.image}
                     style={myStyles.firstClassName}
                     onClick={this.handleClick} 
                    //  onClick={this.handleScore} //breaks shuffle, but counts
                />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;


//  let clickedPictures: [];

//  class App extends Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        pictures,
//        clickedPictures
//      };
//      this.handleClick = this.handleClick.bind(this);
//    }

//    // randomize() {
//    //   console.log("random");
//    //     var items = this.state.items.slice()

//    //     // Find the index of the selected item within the current items array.
//    //     var selectedItemName = this.state.selected;

//    //     function isSelectedItem(element, index, array) {
//    //       return element.id === selectedItemName;
//    //     };
//    //     var selectedIdx = items.findIndex(isSelectedItem);

//    //     // Extract that item
//    //     var selectedItem = items[selectedIdx];

//    //     // Delete the item from the items array
//    //     items.splice(selectedIdx, 1);

//    //     // Sort the items that are left over
//    //     items.sort(function (a, b) {
//    //       return a.id < b.id ? -1 : 1;
//    //     });

//    //     // Insert the selected item back into the array
//    //     items.splice(1, 0, selectedItem);

//    //     // Set the state to the new array
//    //     this.setState({
//    //       items: items
//    //     });

//    // }

//    handleClick() {
//        console.log("clicked");
//        for (let i = pictures.length - 1; i > 0; i--) {
//          let j = Math.floor(Math.random() * (i + 1));
//          [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
//        }

//        randomize = pictures => {
//          let clickedPictures = this.state.clickedPictures;
//          this.setState({
//            name: "Bob"
//          })
//        }