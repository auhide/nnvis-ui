import { useState } from 'react';
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


export function Datasets(props) {
    const classes = useStyles();

    return (
        <>
        <br />
        <br />
            <Grid container justify="center">
                <Paper className={classes.datasetsPaperOptions}>
                    <DatasetContour />
                </Paper>
            </Grid>
        </>
    );
}

function DatasetContour(props) {
    return (
        <SingleDataset />
    );
}

function getDatasets(requestResult, data) {
    data = requestResult;
}

// TODO: Fix this, it is currently sending an infinite number of requests
function SingleDataset(props) {
    let datasetName = "iris";
    const [data, setData] = useState();

    axios
        .get("http://localhost:5000/datasets")
        .then(res => setData(res.data))
        .catch(err => console.log(err));

    return (
        <>
            <p>Iris Dataset:</p>
        </>
    );
}