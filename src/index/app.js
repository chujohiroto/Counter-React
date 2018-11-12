import React, { Component } from 'react';
//import Count from './count';
var agent = require("superagent");

class App extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = { count: 0 };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log('onClick');
        this.setState((prevState, props) => {
            console.log('setState | prevState.count = ' + prevState.count);
            return { count: ++prevState.count }
        });
    }

    render() {
        var buttonStyle = {
            width: 100,
            height: 100,
            backgroundColor: "#3F51B5",
            color: "rgba(255,255,255,.87)",
            border: "none",
            borderRadius: 20,
            fontSize: 48,
            fontWeight: "bold"
        };
        return (
            <React.Fragment>
                <h1>Hello, React! Counter Sample</h1>
                <div>
                    <h3>Chujo Hiroto</h3>
                </div>
                {/*<Count value="1" />*/}
                <button style={buttonStyle} onClick={this.onClick}>
                    {this.state.count}
                </button>
                <button onClick={this.saveCount(this.state.count)}>
                    Save
                </button>
                <button onClick={this.loadCount}>
                    Load
                </button>
            </React.Fragment>
        )
    }

    saveCount(c) {/*
        agent.post("http://localhost:8085/save")
            .send({ id: "test", count: c })
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.body);
                }
            });*/
    }

    loadCount() {/*
        agent.post("http://localhost:8085/load")
            .send({ id: "test" })
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.body);
                    this.setState({ count: res.body });
                }
            });*/
    }
}
export default App;