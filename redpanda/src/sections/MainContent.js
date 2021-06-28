import React from "react";
import ContentView from "../models/ContentView";

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.View = this.View.bind(this);
    }

    View() {
        console.log(this.props.view)
        const SpecificView = ContentView.getViewFromString(this.props.view);
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