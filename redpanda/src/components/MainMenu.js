import Button from '@material-ui/core/Button';

function MainMenu({props}) {
    
    const startGame = () => props(true)

    return (
        <div className="MainMenu">
            <h1>Project Red Panda</h1>

            <div>
                <Button variant="contained" disabled>continue</Button>
            </div>
            <div>
                <Button variant="contained" onClick={startGame}>new game</Button>
            </div>
            <div>
                <Button variant="contained" disabled>options</Button>
            </div>
        </div>
    );
}

export default MainMenu;