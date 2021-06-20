import React from 'react'
import Button from '@material-ui/core/Button';

class MainMenu extends React.Component {

    render() {
        return (
            <div className="MainMenu">
                <h1>Project Red Panda</h1>
    
                <div>
                    <Button variant="contained" disabled>continue</Button>
                </div>
                <div>
                    <Button variant="contained" onClick={this.props.start}>new game</Button>
                </div>
                <div>
                    <Button variant="contained" disabled>options</Button>
                </div>
            </div>
        );
    }
}

export default MainMenu;