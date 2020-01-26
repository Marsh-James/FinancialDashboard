import React, { Component } from 'react';
import { Grow } from '@material-ui/core';
import ValuationBox from './ValuationBox';

export default class ValuationMarquee extends Component {
    state = {
        trackers: [
            {title: 'Dow Jones', symbol: '.DJI'},
            {title: 'S&P 500', symbol: '.INX'},
            {title: 'Apple Inc.', symbol: 'AAPL'},
            {title: 'Alphabet Inc.', symbol: 'GOOGL'},
            {title: 'Microsoft Corp', symbol: 'MSFT'},
            {title: 'Amazon inc', symbol: 'AMZN'},
        ]
    };

    render() {
        const flexContainer = {
            display: 'flex',
            height: '5vw',
            flexDirection: 'row',
            backgroundColor: '',
            padding: 0
        };

        return (
            <div>
                <Grow in={true}>
                    <ul style={flexContainer}>
                        {this.state.trackers.map(tracker =>
                            <ValuationBox
                            key={this.state.trackers.indexOf(tracker)}
                            trackerData={tracker}
                            />
                        )}
                    </ul>
                </Grow>
            </div>
        );
    }
}