import React from 'react'
import './App.css';
import MainMenu from './components/MainMenu' 
import Game from './Game' 

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      start: false,
    }


    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.setState({start: true});
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {this.state.start ? <Game /> : <MainMenu start={this.startGame} />}
        </header>
        
      </div>
    );
  }
}

export default App;
