import React from "react";

class MainContent extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.view}</h2>
            </div>
        );

    }
}

export default MainContent;