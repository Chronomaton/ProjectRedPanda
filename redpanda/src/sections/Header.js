import HeaderButton from "../components/HeaderButton";
import { AppBar, Toolbar } from '@material-ui/core';

function Header() {
    return (
        <AppBar>
            <Toolbar>
                <HeaderButton name="Shipyard" />
                <HeaderButton name="Factory" />
                <HeaderButton name="Fleet" />
                <HeaderButton name="Map" />
            </Toolbar>
        </AppBar>
    );
}

export default Header;