import React, { Component } from "react";
import {Select, Container, MenuItem, InputLabel, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

export default class AssetSelector extends Component {
    state = {value: ''};

    handleChange = (e) => {
        this.setState({value: e.target.value});
        this.props.onSelect(e);
    };

    render() {
        const theme = createMuiTheme({
            palette: {
                primary: {main: '#3bc460'},
            },
        });

        const neonText = {
            fontSize: 20,
            color: '#fff',
            marginTop: 5
        };

        const neonBox = {
            width: '100%',
            marginTop: 5,
            color: '#3bc460'
        };

        return (
            <div>
                <Container align={'right'}>
                    <MuiThemeProvider theme={theme}>
                        <InputLabel id="asset-label" style={neonText}>Asset</InputLabel>
                        <Select
                            value={this.state.value}
                            style={neonBox}
                            id='asset-label'
                            onChange={this.handleChange}
                        >
                            {this.props.assets.map(asset =>
                                <MenuItem
                                    key={this.props.assets.indexOf(asset)}
                                    value={asset.assetName}>
                                    {asset.assetName}</MenuItem>
                            )}
                        </Select>
                    </MuiThemeProvider>
                </Container>
            </div>
        );
    }
}
