import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CountList from './countlist';


class Count extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = { count: 0 };
        this.addCount = this.addCount.bind(this);
        this.subCount = this.subCount.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                Input id=
                <input name="inputid" type="text" value={this.state.value} onChange={this.handleChange} />
                <h1>{this.state.count}</h1>
                <Button variant="contained" color="primary" onClick={this.addCount}>
                    Click!
                </Button>
                <Button variant="contained" color="primary" onClick={this.subCount}>
                    Sub!
                </Button>
                {/*<Count />*/}
            </React.Fragment>
        )
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({ id: event.target.value });
    };

    addCount() {
        this.setState((previousState, currentProps) => {
            return { count: previousState.count + 1 };
        });
    }
    subCount() {
        this.setState((previousState, currentProps) => {
            return { count: previousState.count - 1 };
        });
    }
}
export default Count;