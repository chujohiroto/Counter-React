import React, { Component } from 'react';

class Count extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Count:{this.props.value}</h1>;
            </React.Fragment>
        )
    }
}
export default Count;