import React from "react";
import HeaderButton from "../components/HeaderButton";
import { AppBar, Toolbar, ButtonGroup } from '@material-ui/core';

const headerNames = ['Shipyard', 'Factory', 'Fleet', 'Map'];

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonList: []
        }
        this.getHeaderButtons();
    }

    getHeaderButtons() {
        headerNames.forEach((header, i) => {
            this.state.buttonList.push( <HeaderButton name={header} onChange={this.props.onChange}/>)
        });
    }

    render() {
        return (
            <AppBar color="primary" elevation={0} position="static">
                <Toolbar style={{minHeight: "5vh"}}>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        {this.state.buttonList}
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;