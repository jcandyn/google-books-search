import React from 'react';
import Card from './Card'
import "./css/Game.css";


let links = ["https://cdn.pixabay.com/photo/2017/01/24/23/59/simpsons-2006756__480.jpg", "https://cdn.pixabay.com/photo/2017/01/25/00/00/simpsons-2006761__480.jpg", "https://cdn.pixabay.com/photo/2017/01/24/23/59/homer-2006749__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/30/toy-1921523__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/29/toy-1921522__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/30/toy-1921524__480.jpg"]

let newArray = []

class Game extends React.Component {

      state = {
        highScore: 0,
        score: 0,
        loss: 0
      };

      shuffle = (id) => {
        let randomIndex = Math.floor(Math.random() * links.length);
        let indexToSwap = links.indexOf(id)
        links[indexToSwap] = links[randomIndex]
        links[randomIndex] = id
      }

      handleIncrement = (id) => {
      
        if (!newArray.includes(id)) {
          newArray.push(links.find(link => link === id))
          console.log(newArray.length)
          this.setState({ score: this.state.score + 1 });
        }

        else if (newArray.includes(id)) {
        console.log(newArray)
        this.state.score > this.state.highScore ? this.setState({
          highScore: this.state.score
        }) : this.setState({
          highScore: this.state.highScore
        })
        newArray = []
        this.setState({ score: 0});
        }
      };

    render() {

      return (
        <div className="container">
          <div className="row">
            <div className="col">
             <h1 className="score">Score: {this.state.score} </h1>
             </div>
             <div className="col">
        {/* {(this.state.highScore < this.state.score) ? this.setState({highScore: this.state.score}) : this.setState({highScore: this.state.highScore})}  */}
        <h1 className="score">Highest Score: {this.state.highScore}</h1>
        </div>
        </div>
        <div className="row">
        {links.map(link => <Card handleIncrement = {this.handleIncrement} shuffle={this.shuffle} thisLink={link} id={link}/>)}
        </div>
        </div>  
      )
    }
  }

  export default Game