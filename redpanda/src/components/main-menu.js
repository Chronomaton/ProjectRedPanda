import Game from './Game';

import Button from '@material-ui/core/Button';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

function MainMenu() {
    return (
        <div className="MainMenu">
            <h1>Project Red Panda</h1>

            <div>
                <Button variant="contained" disabled>continue</Button>
            </div>
            <div>
                <Button variant="contained">new game</Button>
            </div>
            <div>
                <Button variant="contained" disabled>options</Button>
            </div>
        </div>
    );
}

export default MainMenu;