import './App.css';
import MainMenu from './components/main-menu.js' 

function newGame() {
  window.location.href = "game.html";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainMenu></MainMenu>
      </header>
      
    </div>
  );
}

export default App;
