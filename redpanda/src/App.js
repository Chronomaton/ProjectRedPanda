import './App.css';

function newGame() {
  window.location.href = "game.html";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Red Panda</h1>

        <button disabled>continue</button>
        <button onclick="newGame()">new game</button>
        <button disabled>options</button>
      </header>
    </div>
  );
}

export default App;
