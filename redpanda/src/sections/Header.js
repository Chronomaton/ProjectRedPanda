import HeaderButton from "../components/HeaderButton";
import { AppBar, Toolbar, ButtonGroup } from '@material-ui/core';

function Header() {
    return (
        <AppBar color="primary" elevation={0} position="static">
            <Toolbar style={{minHeight: "5vh"}}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <HeaderButton name="Shipyard" />
                    <HeaderButton name="Factory" />
                    <HeaderButton name="Fleet" />
                    <HeaderButton name="Map" />
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    );
}

export default Header;