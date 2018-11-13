import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
var agent = require("superagent");

class Count extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = { count: 0 };
        this.addCount = this.addCount.bind(this);
        this.saveCount = this.saveCount.bind(this);
        this.loadCount = this.loadCount.bind(this);

    }

    render() {
        return (
            <React.Fragment>
                <Button variant="contained" color="primary" onClick={this.addCount}>
                    {this.state.count}
                </Button>
                <Button variant="contained" color="primary" onClick={this.saveCount}>
                    Save
                </Button>
                <Button variant="contained" color="primary" onClick={this.loadCount}>
                    Load
                </Button>
            </React.Fragment>
        )

    }

    addCount() {
        this.setState((previousState, currentProps) => {
            return { count: previousState.count + 1 };
        });
    }

    saveCount() {
        agent.post("http://localhost:8085/save")
            .send({ id: "test", count: this.state.count })
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.body);
                }
            });
    }


    loadCount() {
        agent.post("http://localhost:8085/load")
            .send({ id: "test" })
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.body);
                    console.log(res.body[0].count);
                    this.setState({ count: res.body[0].count });
                }
            }.bind(this));
    }
}
export default Count;