
function MainMenu() {
    return (
        <div className="MainMenu">
            <h1>Project Red Panda</h1>

            <button disabled>continue</button>
            <button onclick="newGame()">new game</button>
            <button disabled>options</button>
        </div>
    );
}

export default MainMenu;