import React from "react";
import "../styling/Sidebar.css";

export const Sides = {
    LEFT: "left",
    RIGHT: "right"
};

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.attachSide = this.attachSide.bind(this);
    }

    attachSide(side) {
        if (side === Sides.LEFT) {
            return { "borderRight": "2px" };
        } else if (side === Sides.RIGHT) {
            return { "borderLeft": "2px" };
        }
    }

    render() {
        return (
            <div className="side-bar" style={this.attachSide(this.props.side)}>
                <React.Fragment>{this.props.children}</React.Fragment>
            </div>
        );
    }
}

export default Sidebar;