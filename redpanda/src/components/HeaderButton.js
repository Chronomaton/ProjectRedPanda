import React from 'react';
import { Button } from '@material-ui/core';

class HeaderButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button variant="text">
                {this.props.name}
            </Button>
        );
    }
}

export default HeaderButton;