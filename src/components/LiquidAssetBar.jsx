import {LinearProgress, Container, lighten, withStyles} from '@material-ui/core';
import React, {Component} from 'react';

export default class LiquidAssetBar extends Component {

    render() {
        const BorderLinearProgress = withStyles({
            root: {
                height: 20,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: lighten('#3bc460', 0.5),
            },
            bar: {
                borderRadius: 2,
                backgroundColor: '#3bc460',
            },
        })(LinearProgress);

        const sliderTitle = {
            zIndex: 2,
            fontSize: 20,
            position: 'relative',
            color: '#fff',
            margin: 0,
        };
        const sliderValue = {
            zIndex: 2,
            fontSize: 20,
            color: '#fff',
            margin: 0,
            position: 'relative',
            marginTop: -25
        };

        return (
            <Container>
                <h1 style={sliderTitle} align={'right'}>Cash</h1>
                <h1 style={sliderValue} align={'left'}>{this.props.cash}%</h1>
                <BorderLinearProgress
                    variant="determinate"
                    color="secondary"
                    value={this.props.cash}
                />
            </Container>
        );
    }
}