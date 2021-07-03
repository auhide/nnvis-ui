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

import { 
    datasetsNamesEndpoint, 
    datasetsEndpoint, 
    datasetsInformationEndpoint 
} from '../apiEndpoints';


const radioButtonBorderColor = '#212226';


export function Datasets(props) {
    const classes = useStyles();
    let selectedDataset = useSelector(state => state.dataset);
    const [datasetOptions, setDatasetOptions] = useState();

    return (
        <>
            <br />
            <br />

            <Grid container className={classes.root} spacing={1}>

                <Grid item xs={3} >
                    <Grid container justify="center">
                        <Paper className={classes.dataParamsPaperOptions}><p>Something</p></Paper>
                    </Grid>
                </Grid>

                <Grid item xs={6} >
                    <Grid container justify="center">
                        <Paper className={classes.datasetsPaperOptions}>
                            <DatasetsOptions datasetOptions={datasetOptions} setDatasetOptions={setDatasetOptions} /> 
                            <DatasetVisualization datasetName={selectedDataset} options={datasetOptions} />
                            <DatasetDescription datasetName={selectedDataset} />
                        </Paper>
                    </Grid>
                </Grid>
                
                <Grid item xs={3} >
                    <Grid container justify="center">
                        <Paper className={classes.dataParamsPaperOptions}><p>Something</p></Paper>
                    </Grid>
                </Grid>
            
            </Grid>
        </>
    );
}


function DatasetsOptions({ datasetOptions, setDatasetOptions }) {

    useEffect(() => {
        axios
            .get(datasetsNamesEndpoint)
            .then(res => setDatasetOptions(res.data))
            .catch(err => console.log(err));
    }, [null])

    return (
        <DatasetsRadioButtons datasetsNames={datasetOptions} />
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


function DatasetVisualization({ datasetName, options }) {
    const [visualizationData, setVisualizationData] = useState();
    const [visualizationIsLoading, setVisIsLoading] = useState(false);

    useEffect(() => {
        setVisIsLoading(true);
        axios
            .get(datasetsEndpoint + datasetName)
            .then(res => setVisualizationData(res.data))
            .then(set => setVisIsLoading(false))
            .catch(err => console.log(err));
    }, [datasetName])

    // If the UI is currently sending a GET request to the NN API.
    if (visualizationIsLoading === true) {
        return (
            <div align="center">
                <p class="mainText">Dataset: <b>{getPresentableDatasetByName(datasetName)}</b></p>
                <CircularProgress size={20} color="#212226" />
            </div>
        )
    }

    return (
        <div align="center">
            <p class="mainText">Dataset: <b>{getPresentableDatasetByName(datasetName)}</b></p>
            <XYPlot
                xDomain={[-1, 1]}
                yDomain={[-1, 1]}
                width={400}
                height={200}>
                    <ContourSeries
                        style={{
                        stroke: '#125C77',
                        strokeLinejoin: 'round'
                        }}
                        colorRange={[
                        '#79C7E3',
                        '#FF9833'
                        ]}
                        data={visualizationData}/>
                    <MarkSeriesCanvas animation data={visualizationData} size={2.5} color={'#125C77'} />
            </XYPlot>
        </div>
    )
}

function DatasetDescription({ datasetName }) {
    const datasetInformationDispatcher = useDispatch();
    let numberOfFeatures = useSelector(state => state.features);
    let numberOfLabels = useSelector(state => state.labels);
    const [descriptionIsLoading, setDescriptionIsLoading] = useState(false);

    useEffect(() => {
        setDescriptionIsLoading(true);
        axios
            .get(datasetsInformationEndpoint + datasetName)
            .then(res => parseDatasetInformation(res.data, datasetInformationDispatcher))
            .then(set => setDescriptionIsLoading(false))
            .catch(err => console.log(err));
    }, [datasetName])

    if (descriptionIsLoading) {
        return <CircularProgress size={20} color="#212226" />
    }

    return (
        <div>
            <span class="mainText">Features: <b>{numberOfFeatures}</b></span>
            <span>   |   </span>
            <span class="mainText">Labels: <b>{numberOfLabels}</b></span>
        </div>
    )
}

function parseDatasetInformation(informationJSON, dispatcher) {
    dispatcher({ type: "UPDATE_N_FEATURES", features: informationJSON.Features });
    dispatcher({ type: "UPDATE_N_LABELS", labels: informationJSON.Labels });
}

export function getPresentableDatasetByName(rawName) {
    let nameArray = rawName.split("_")
    let capitalizedNameArray = [];

    for (let i = 0; i < nameArray.length; i++) {
        capitalizedNameArray[i] = nameArray[i].replace(/^\w/, (c) => c.toUpperCase());
    }

    let presentableName = capitalizedNameArray.join(" ");

    return presentableName;
}