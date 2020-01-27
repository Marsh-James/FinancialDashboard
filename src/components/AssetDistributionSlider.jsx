import React, { Component } from 'react';
import { Container, Slider } from '@material-ui/core/';

export default class AssetPerformance extends Component {
    updateSlider(val) {
        this.setState({sliderVal: val})
    };

    render() {
        const {sliderVal, assetName, sliderMax} = this.props.asset;
        const neonSlider = {
            color: '#3bc460'
        };

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
                <h1 style={sliderTitle} align={'right'}>{assetName}</h1>
                <h1 style={sliderValue} align={'left'}>{sliderVal}%</h1>
                <Slider style={neonSlider} max={sliderMax} value={sliderVal} onChange={ (e, val) =>
                    this.props.onUpdate(sliderVal, val, this.props.asset, this.props.id) }/>
            </Container>
        );
    }

}