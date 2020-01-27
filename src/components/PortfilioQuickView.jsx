import React, { Component } from 'react'
import { Card, Box, Grow } from '@material-ui/core';
import AssetDistributionChart from "./AssetDistributionChart";
import AssetDistributionSlider from './AssetDistributionSlider';
import LiquidAssetBar from './LiquidAssetBar';

export default class PortfolioQuickView extends Component {
    state = {
        cash: 10,
        assets: [{assetName: 'Dow Jones', sliderVal: 10, sliderMax: 100},
                {assetName: 'Microsoft Corp', sliderVal: 60, sliderMax: 100},
                {assetName: 'Amazon Inc', sliderVal: 20, sliderMax: 100}]
    };

    updateDistributions = (oldVal, newVal, asset, id) => {
        const difference = newVal - oldVal;
        if (difference > 0) {
            if (this.state.cash >= difference) {
                const cash = this.state.cash - difference;
                const updatedAsset = {assetName: asset.assetName, sliderVal: newVal, sliderMax: (newVal + cash)};
                const updatedAssets = [...this.state.assets];
                updatedAssets[id] = updatedAsset;
                this.setState({cash: cash, assets: updatedAssets});
            }
        } else {
            const cash = this.state.cash - difference;
            const updatedAsset = {assetName: asset.assetName, sliderVal: newVal, sliderMax: (newVal + cash)};
            const updatedAssets = [...this.state.assets];
            updatedAssets[id] = updatedAsset;
            this.setState({cash: cash, assets: updatedAssets});
        }

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
                                chartData={this.state.assets}
                             />
                             {/*<AssetPerformanceChart />*/}
                        </Box>
                        <LiquidAssetBar
                            cash ={this.state.cash}
                        />
                        {this.state.assets.map(asset =>
                            <AssetDistributionSlider
                                key={this.state.assets.indexOf(asset)}
                                id={this.state.assets.indexOf(asset)}
                                asset={asset}
                                onUpdate={this.updateDistributions}
                            />
                        )}
                    </Card>
                </Grow>
            </div>
        );
    }
}