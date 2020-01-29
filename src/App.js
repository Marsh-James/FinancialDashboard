import React from 'react';
import { Grid } from '@material-ui/core';
import ValuationMarquee from './components/ValuationMarquee';
import PortfolioQuickView from './components/PortfilioQuickView'
import AssetProjectionView from './components/AssetProjectionView';
import './App.css';

function App() {
    return (
        <div>
            <ValuationMarquee />
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    <PortfolioQuickView />
                </Grid>
                {/*<Grid item style={{marginLeft: 10}}>*/}
                {/*    <AssetProjectionView />*/}
                {/*</Grid>*/}
            </Grid>
        </div>
    );
}

export default App;
