import React from "react";
import HeaderButton from "../components/HeaderButton";
import { AppBar, Toolbar, ButtonGroup } from '@material-ui/core';
import ContentView from '../models/ContentView';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.getHeaderButtons = this.getHeaderButtons.bind(this);
    }

    getHeaderButtons() {
        let buttons = []

        Object.values(ContentView).forEach((value) => {
            buttons.push( <HeaderButton name={value} onChange={this.props.onChange} /> )
        });

        return buttons;
    }

    render() {
        return (
            <AppBar color="primary" elevation={0} position="static">
                <Toolbar style={{minHeight: "5vh"}}>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        {this.getHeaderButtons()}
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;