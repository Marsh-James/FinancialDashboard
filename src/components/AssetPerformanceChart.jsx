import React, { Component } from 'react';
import { VictoryStack, VictoryArea } from 'victory';

export default class AssetPerformance extends Component {
    state = {
    };

    render() {
        return (
            <VictoryStack>
                <VictoryArea
                    data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
                />
                <VictoryArea
                    data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
                />
                <VictoryArea
                    data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
                />
            </VictoryStack>
        );
    }

}