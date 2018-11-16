import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class CountCard extends Component {
    constructor(props) {
        super(props);
        this.setState(props);
        this.state = { bullet: "" };
        this.setState({ bullet: <span className={this.state.bullet}>•</span> });
    }

    render() {
        return (
            <React.Fragment>
                <Card className={this.state.card}>
                    <CardContent>
                        <Typography className={this.state.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be
                            {this.state.bull}
                            nev
                            {this.state.bull}o{this.state.bull}
                            lent
                        </Typography>
                        <Typography className={this.state.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </React.Fragment>
        )
    }
}
export default CountCard;