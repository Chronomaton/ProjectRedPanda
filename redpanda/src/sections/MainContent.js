import React from "react";

import Map from "../components/Map";
import Fleet from "../components/Fleet";
import Shipyard from "../components/Shipyard";
import Factory from "../components/Factory";

const components = {
    "Map": Map,
    "Fleet": Fleet,
    "Shipyard": Shipyard,
    "Factory": Factory
}

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.View = this.View.bind(this);
    }

    View() {
        console.log(this.props.view)
        const SpecificView = components[this.props.view]
        return <SpecificView />;
    }

    render() {
        return (
            <div className="main-content">
                <h2>{this.props.view}</h2>
                {this.View()}
            </div>
        );

    }
}

export default MainContent;