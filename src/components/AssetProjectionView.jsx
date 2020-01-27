import React, { Component } from 'react';
import { Card, Box, Grow } from '@material-ui/core';
import AssetPerformanceChart from './AssetPerformanceChart';

export default class AssetProjectionView extends Component {
    state = {
    };

    render() {
        const darkContainer = {
            padding: 10,
            backgroundColor: '#242424',
            width: '20vw',
            minWidth: 300
        };

        return (
            <div>
                <Grow in={true}>
                    <Card style={darkContainer}>
                        <Box display='flex' flexDirection='row'>
                            <AssetPerformanceChart

                            />
                        </Box>
                    </Card>
                </Grow>
            </div>
        );
    }

}