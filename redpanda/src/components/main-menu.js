import Button from '@material-ui/core/Button';

function MainMenu() {
    return (
        <div className="MainMenu">
            <h1>Project Red Panda</h1>

            <div>
                <Button variant="contained" disabled>continue</Button>
            </div>
            <div>
                <Button variant="contained" onclick="newGame()">new game</Button>
            </div>
            <div>
                <Button variant="contained" disabled>options</Button>
            </div>
        </div>
    );
}

export default MainMenu;