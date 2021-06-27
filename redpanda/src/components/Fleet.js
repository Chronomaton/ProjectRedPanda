import React from "react";
import Ship from "./Ship";

class Fleet extends React.Component {
    render() {
        return ( 
            <div>
                <h2>This be the FLEET!</h2>
                <h3>Ships:</h3>
                <Ship />
            </div>
        );
    }
}

export default Fleet;
