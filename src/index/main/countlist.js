import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '@material-ui/core/Table'
var agent = require("superagent");


class CountList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: [],
        };

        this.saveCount = this.saveCount.bind(this);
        this.loadCount = this.loadCount.bind(this);
        console.log('constructor');
    }

    componentWillMount() {
        //this.loadCount()
    }

    render() {
        const headers = this.state.counts[0] != null ? Object.keys(this.state.counts[0]) : []
        return (
            <React.Fragment>
                <Button variant="contained" color="primary" onClick={this.saveCount}>
                    Save
                </Button>
                <Button variant="contained" color="primary" onClick={this.loadCount}>
                    Load
                </Button>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {headers.map((header, index) => {
                                return (
                                    <TableHeaderColumn key={index}>{header}</TableHeaderColumn>
                                )
                            })}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.state.counts.map((count, index) => {
                            return (
                                <TableRow key={index}>
                                    {Object.values(count).map((row, index) => {
                                        return (
                                            <TableRowColumn key={index}>{row}</TableRowColumn>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </React.Fragment>
        )
    }


    saveCount() {
        agent.post("http://localhost:8085/save")
            .send({ id: this.state.id, count: this.state.count })
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
            .send({ id: this.state.id })
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.body);
                    this.setState({
                        counts: res.body,
                    })
                }
            }.bind(this));
    }
}
export default CountList;