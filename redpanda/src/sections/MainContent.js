import React from "react";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: props.view,
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.view}</h2>
            </div>
        );

    }
}

export default MainContent;