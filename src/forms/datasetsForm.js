import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import {
    useStyles
} from '../widgets/Grids';

// TODO: Use these for the Contour Series
import { 
    XYPlot,
    XAxis,
    YAxis,
    ContourSeries,
    MarkSeriesCanvas,
    Borders
} from 'react-vis';
import { datasetsNamesEndpoint } from '../apiEndpoints';


export function Datasets(props) {
    const classes = useStyles();

    return (
        <>
        <br />
        <br />
            <Grid container justify="center">
                <Paper className={classes.datasetsPaperOptions}>
                    <SingleDataset />
                </Paper>
            </Grid>
        </>
    );
}


// TODO: Fix this, it is currently sending an infinite number of requests
function SingleDataset(props) {
    let datasetName = "iris";
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get(datasetsNamesEndpoint)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [null])

    return (
        <>
            <p>Iris Dataset: {data}</p>
        </>
    );
}