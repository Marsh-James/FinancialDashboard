import React, { Component } from 'react';
import { Container, Slider } from '@material-ui/core/';

export default class AssetPerformance extends Component {

    render() {
        const {sliderVal, sliderMax} = this.props.asset;
        const neonSlider = {
            color: '#3bc460'
        };

        const sliderValue = {
            zIndex: 2,
            fontSize: 20,
            color: '#fff',
            margin: 0,
            position: 'relative',
            marginTop: 5
        };

        return (
            <Container>
                <h1 style={sliderValue} align={'left'}>{sliderVal}%</h1>
                <Slider style={neonSlider} max={sliderMax} value={sliderVal} onChange={ (e, val) =>
                    this.props.onUpdate(sliderVal, val, this.props.asset, this.props.id) }/>
            </Container>
        );
    }

}