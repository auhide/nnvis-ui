import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { Divider } from '@material-ui/core';

import axios from 'axios';

import {
    useStyles
} from '../widgets/Grids';


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
const featuresPaperMaxSize = 290


export function Datasets(props) {
    const classes = useStyles();
    let selectedDataset = useSelector(state => state.dataset);
    const [datasetOptions, setDatasetOptions] = useState();

    return (
        <>
            <br />
            <br />

            <Grid container className={classes.root} spacing={-2}>

                <Grid item xs={3} >
                    <Grid container justify="center">
                        <Paper className={classes.dataParamsPaperOptions}>
                            <p class="mainText"><b>Features Selection</b></p>
                            <Divider />
                            <FeaturesSelectionOptions datasetName={selectedDataset} />
                        </Paper>
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
                        <Paper className={classes.dataParamsPaperOptions}>
                            <p class="mainText"><b>Principle Component Analysis</b></p>
                            <Divider />
                        </Paper>
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


function FeaturesSelectionOptions({ datasetName }) {
    const featureNamesDispatcher = useDispatch();
    let featureNames = useSelector(state => state.featureNames);
    let featuresMap = useSelector(state => state.featuresMap);
    const [featureNamesAreLoading, setFeatureNamesAreLoading] = useState(false);

    useEffect(() => {
        setFeatureNamesAreLoading(true);
        axios
            .get(datasetsInformationEndpoint + datasetName)
            .then(res => parseFeatureNames(res.data, featureNamesDispatcher, featuresMap))
            .then(set => setFeatureNamesAreLoading(false))
            .catch(err => console.log(err));
    }, [datasetName])

    if (featureNamesAreLoading) {
        return <CircularProgress size={20} color="#212226" />
    }

    return (
        <FeaturesSelection />
    )
}


function FeaturesSelection({ }) {
    let featuresMap = useSelector(state => state.featuresMap);
    let featuresMapDispatcher = useDispatch();

    let [allCheckboxesAreChecked, allChangeState] = useState(false);
    let [noneCheckboxesAreSelected, noneChangeState] = useState(false);

    return (

        <div style={{ height: featuresPaperMaxSize, marginLeft: "30%", overflowY: "auto" }}>
            <FormGroup style={{ textAlign: "left" }} col>
                {/* {JSON.stringify(featuresMap)} */}
                <FormControlLabel 
                    control={
                        <Checkbox 
                            onChange={
                                (event) => selectAllFeatures(
                                    featuresMap, 
                                    featuresMapDispatcher, 
                                    allCheckboxesAreChecked,
                                    allChangeState
                            )}
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            color="default"
                            checked={allCheckboxesAreChecked}
                            
                        />
                    }
                    label="All"
                />
                <FormControlLabel 
                    control={
                        <Checkbox 
                            onChange={
                                (event) => deselectAllFeatures(
                                    featuresMap, 
                                    featuresMapDispatcher, 
                                    noneCheckboxesAreSelected,
                                    noneChangeState
                            )}
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            color="default"
                            checked={noneCheckboxesAreSelected}
                        />
                    }
                    label="None"
                />
                <hr />
                {
                    Object.keys(featuresMap).map((feature, index) => {
                        return (
                            <div>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={
                                                (event) => updateSingleValue(featuresMap, featuresMapDispatcher, event.target.name)
                                            } 
                                            icon={<CircleUnchecked />}
                                            checkedIcon={<CircleCheckedFilled />}
                                            color="default" 
                                            checked={featuresMap[feature]}
                                            name={feature}
                                        />}
                                    label={feature}
                                />
                            </div>
                        )
                    })
                }
            </FormGroup>
        </div>
    )
}


function parseDatasetInformation(informationJSON, dispatcher) {
    dispatcher({ type: "UPDATE_N_FEATURES", features: informationJSON.Features });
    dispatcher({ type: "UPDATE_N_LABELS", labels: informationJSON.Labels });
}


function parseFeatureNames(datasetJSON, dispatcher, prevFeatureNames) {
    dispatcher({ type: "UPDATE_FEATURE_NAMES", featureNames: datasetJSON.FeatureNames });

    let currentFeatureNames = datasetJSON.FeatureNames;
    let currentFeatureMap = {}

    currentFeatureNames.forEach(element => {
        currentFeatureMap[element] = true;
    });

    dispatcher({ type: "UPDATE_FEATURES_MAP", featuresMap: currentFeatureMap })

    return datasetJSON.featureNames;
}


function selectAllFeatures(featuresMap, dispatcher, isChecked, setAllCheckedState) {
    if (isChecked) {
        setAllCheckedState(false);
    } else {
        setAllCheckedState(true);
    }

    if (!isChecked) {
        for (const featureName in featuresMap) {
            featuresMap[featureName] = true
        }

        dispatcher({ type: "UPDATE_FEATURES_MAP", featuresMap: featuresMap })
    }

}


function deselectAllFeatures(featuresMap, dispatcher, isChecked, setNoneCheckedState) {
    if (isChecked) {
        setNoneCheckedState(false);
    } else {
        setNoneCheckedState(true);
    }

    if (!isChecked) {
        for (const featureName in featuresMap) {
            featuresMap[featureName] = false
        }

        dispatcher({ type: "UPDATE_FEATURES_MAP", featuresMap: featuresMap })
    }

}


function updateSingleValue(featuresMap, dispatcher, updatedFeature) {
    if (featuresMap[updatedFeature]) {
        featuresMap[updatedFeature] = false;
    } else {
        featuresMap[updatedFeature] = true;
    }

    dispatcher({ type: "UPDATE_FEATURES_MAP", featuresMap: featuresMap });
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