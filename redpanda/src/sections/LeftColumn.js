import React from "react";
import "../styling/LeftColumn.css";

const Sidebar = ({ children }) => {

    return (
        <div className="side-bar">
            <React.Fragment>{children}</React.Fragment>
        </div>
    );
};

export default Sidebar;