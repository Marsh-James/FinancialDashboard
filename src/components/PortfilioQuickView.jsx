import React, { Component } from 'react'
import {Card, Box, Grow, LinearProgress} from '@material-ui/core';
import AssetDistributionChart from "./AssetDistributionChart";
import AssetDistributionSlider from './AssetDistributionSlider';
import LiquidAssetBar from './LiquidAssetBar';
import AssetPerformanceChart from './AssetPerformanceChart';
import ValuationBox from "./ValuationBox";

export default class PortfolioQuickView extends Component {
    state = {
        cash: 10,
        data: [{x:1, y:2}, {x:2, y:1}, {x:3, y:2}, {x:4, y:3}, {x:5, y:2}],
        assets: [{title: 'Dow Jones', value: 10},
                {title: 'Microsoft Corp', value: 80}]
    };

    render() {
        const darkContainer = {
            padding: 10,
            backgroundColor: '#242424',
            maxWidth: '45vw'
        };

        return (
            <div>
                <Grow in={true}>
                    <Card style={darkContainer}>
                        <Box display='flex' flexDirection='row'>
                            <AssetDistributionChart
                                chartData={this.state.data}
                             />
                             {/*<AssetPerformanceChart />*/}
                        </Box>
                        <LiquidAssetBar
                            cash ={this.state.cash}
                        />
                        {this.state.assets.map(asset =>
                            <AssetDistributionSlider
                                key={this.state.assets.indexOf(asset)}
                                initialVal={asset.value}
                                assetName={asset.title}
                            />
                        )}
                    </Card>
                </Grow>
            </div>
        );
    }
}