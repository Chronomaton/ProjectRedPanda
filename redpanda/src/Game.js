import Header from './sections/Header';
import Fleet from './components/Fleet';

function Game() {
    return (
        <div className="Game">
            <Header />
            <h2>If you see this, you are on GAME page</h2>
            <Fleet/>
        </div>
    );
}

export default Game;
