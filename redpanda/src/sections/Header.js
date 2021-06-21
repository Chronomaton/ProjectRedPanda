import HeaderButton from "../components/HeaderButton";

function Header() {
    return (
        <div className="gameHeader">
            <HeaderButton name="Shipyard" />
            <HeaderButton name="Factory" />
            <HeaderButton name="Fleet" />
            <HeaderButton name="Map" />
        </div>
    );
}

export default Header;