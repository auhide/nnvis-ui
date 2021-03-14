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
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { useSelector, useDispatch } from "react-redux";
import {
    CircularProgress
} from '@material-ui/core';

import { datasetsNamesEndpoint } from '../apiEndpoints';


const radioButtonBorderColor = '#212226';

export function Datasets(props) {
    const classes = useStyles();
    let currDataset = useSelector(state => state.dataset);

    return (
        <>
            <br />
            <br />
            <Grid container justify="center">
                <Paper className={classes.datasetsPaperOptions}>
                    <SingleDataset /> 
                </Paper>
            </Grid>
            <br /><br /><br />
            <Grid container justify="center">
                <Paper className={classes.datasetsPaperOptions}>
                    <h1>Selected Dataset Name: {currDataset}</h1>
                </Paper>
            </Grid>
        </>
    );
}


function SingleDataset(props) {
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get(datasetsNamesEndpoint)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [null])

    return (
        <DatasetsRadioButtons datasetsNames={data} />
    );
}

function DatasetsRadioButtons({ datasetsNames }) {
    const datasetDispatcher = useDispatch();

    if (datasetsNames === undefined) {
        return (
            <div>
                <br />
                <CircularProgress size={20} color={radioButtonBorderColor} />
            </div>
        );
    }
    return (
        <RadioGroup horizontal={true} group='datasetsNames' onChange={(value) => datasetDispatcher({ type: "UPDATE_DATASET", dataset: value })}>
            {datasetsNames.map(({ presentable_name, name }) => (
                <RadioButton 
                    disabledColor={radioButtonBorderColor}
                    pointColor={radioButtonBorderColor}
                    rootColor={radioButtonBorderColor} 
                    value={name}>
                        <div className="mainText">{presentable_name}</div>
                    </RadioButton>
            ))}
        </RadioGroup>
    )
}