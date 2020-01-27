import {LinearProgress, Container, lighten, withStyles} from '@material-ui/core';
import React, {Component} from 'react';

export default class LiquidAssetBar extends Component {

    render() {
        const BorderLinearProgress = withStyles({
            root: {
                height: 20,
                backgroundColor: lighten('#3bc460', 0.5),
            },
            bar: {
                borderRadius: 2,
                backgroundColor: '#3bc460',
            },
        })(LinearProgress);

        return (
            <Container>
                <BorderLinearProgress
                    variant="determinate"
                    color="secondary"
                    value={this.props.cash}
                />
            </Container>
        );
    }
}