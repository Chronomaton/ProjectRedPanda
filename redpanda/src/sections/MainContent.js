import React from "react";
import Map from "../components/Map";

class MainContent extends React.Component {


    render() {
        return (
            <div className="main-content">
                <h2>{this.props.view}</h2>
                <Map />
            </div>
        );

    }
}

export default MainContent;