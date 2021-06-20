import React, { useState } from 'react'
import './App.css';
import MainMenu from './components/MainMenu' 
import Game from './components/Game' 

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {start ? <Game/> : <MainMenu props={setStart}/>}
      </header>
      
    </div>
  );
}

export default App;
