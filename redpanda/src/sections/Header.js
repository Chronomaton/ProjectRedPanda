import React from "react";
import HeaderButton from "../components/HeaderButton";
import { AppBar, Toolbar, ButtonGroup } from '@material-ui/core';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar color="primary" elevation={0} position="static">
                <Toolbar style={{minHeight: "5vh"}}>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        <HeaderButton name="Shipyard" onChange={this.props.onChange}/>
                        <HeaderButton name="Factory" onChange={this.props.onChange}/>
                        <HeaderButton name="Fleet" onChange={this.props.onChange}/>
                        <HeaderButton name="Map" onChange={this.props.onChange}/>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;