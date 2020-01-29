import React, { Component } from 'react'
import { Card, Box, Grow } from '@material-ui/core';
import AssetDistributionChart from "./AssetDistributionChart";
import AssetDistributionSlider from './AssetDistributionSlider';
import LiquidAssetBar from './LiquidAssetBar';
import AssetSelector from './AssetSelector';

export default class PortfolioQuickView extends Component {
    state = {
        cash: 10,
        assets: [{assetName: 'Dow Jones', sliderVal: 10, sliderMax: 100},
                {assetName: 'Microsoft Corp', sliderVal: 60, sliderMax: 100},
                {assetName: 'Amazon Inc', sliderVal: 20, sliderMax: 100}],
        selectedIdx: 0,
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

    updateSelectedAsset = (e) => {
        this.setState({selectedIdx: this.state.assets.findIndex(element => element.assetName === e.target.value)});
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
                            <AssetDistributionChart
                                chartData={this.state.assets}
                             />
                        </Box>
                        <LiquidAssetBar
                            cash ={this.state.cash}
                        />
                        <AssetSelector
                            assets={this.state.assets}
                            id={this.state.selectedIdx}
                            onSelect={this.updateSelectedAsset}
                         />

                        <AssetDistributionSlider
                            key={this.state.selectedIdx}
                            id={this.state.selectedIdx}
                            asset={this.state.assets[this.state.selectedIdx]}
                            onUpdate={this.updateDistributions}
                        />
                    </Card>
                </Grow>
            </div>
        );
    }
}