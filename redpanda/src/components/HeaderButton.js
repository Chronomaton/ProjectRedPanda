import React from 'react';
import { Button } from '@material-ui/core';

class HeaderButton extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }

    render() {
        var onChange = this.props.onChange;
        return (
            <Button variant="text" onClick={() => onChange(this.name)}>
                {this.name}
            </Button>
        );
    }
}

export default HeaderButton;