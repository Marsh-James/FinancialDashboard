import React, { Component } from 'react'
import { VictoryPie } from 'victory';

export default class AssetDistribution extends Component {

    render() {
        return (
            <VictoryPie
                data={this.props.chartData}
                x='assetName'
                y='sliderVal'
                labelRadius={({ innerRadius }) => innerRadius + 15 }
                colorScale={['#3bc460','#30a650','#24803d']}
                radius={({ datum }) => 100 + datum.sliderVal}
                innerRadius={80}
                style={{ labels: {fill: "white",
                        fontSize: 10,
                        fontWeight: "bold",
                        opacity: 0.8},
                        data: {opacity: 0.8}}}
            />
        );

    }

}