import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { VictoryLine, VictoryChart } from 'victory';
import Alpha from "alphavantage";

export default class ValuationBox extends Component {
    state = {
        upTrend: true,
        data: [],
        opacity: 1
    };

    async updateHistoricalData() {
        const symbol = this.props.trackerData.symbol;
        const alpha = Alpha({ key: '69N77G0V6327X0T4'});
        let prices = [];
        let upTrend = true;

        await alpha.data.daily(symbol).then(data => {
            for (let i = 10; i > -1; i--) {
                prices.push({
                    x: i,
                    y: parseFloat(data['Time Series (Daily)'][Object.keys(data['Time Series (Daily)'])[i]]['1. open'])
                });
            }
            if ((2 / (prices[0]['y'] - prices[3]['y'])) < 0) {
                upTrend = false;
            }
        });

        this.setState({data: prices.reverse(), upTrend});
    };

    mouseEnter = () => {
        this.setState({opacity: 0.7})
    };

    mouseLeave = () =>  {
        this.setState({opacity: 1})
    };

    selectGraph = () => {
        if (this.state.upTrend) {
            return (<VictoryChart>
                <VictoryLine
                    style={{data: {stroke: '#3bc460'}}}
                    interpolation="natural"
                    data={this.state.data}
                />
            </VictoryChart>)
        } else {
            return (<VictoryChart>
                <VictoryLine
                    style={{data: {stroke: '#f54a47'}}}
                    interpolation="natural"
                    data={this.state.data}
                />
            </VictoryChart>)
        }
    };

    componentDidMount() {
        this.interval = setInterval(() =>
        {if (this.state.data.length === 0) {this.updateHistoricalData().then(r => null)}}, 5000);
    }

    render() {
        const {title, symbol} = this.props.trackerData;

        const darkCard = {
            backgroundColor: '#242424',
            opacity: this.state.opacity,
            marginRight: 3,
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
            minWidth: 50,
            minHeight: 30
        };

        const cardTitle = {
            zIndex: 2,
            fontSize: 10,
            backgroundColor: '#222222',
            color: '#fff',
            paddingRight: 5,
            PaddingLeft:5,
            margin: 0
        };

        return (
            <Card style={darkCard} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <h1 align='right' style={cardTitle}>{title}</h1>
                <h2 align='right' style={cardTitle}>{symbol}</h2>
                {/*Dynamic height adjusting required*/}
                <div style={{marginTop: -65}}>
                    {this.selectGraph()}
                </div>
            </Card>
        );
    }
}

