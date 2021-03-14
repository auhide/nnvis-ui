import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import {
    Slider
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Popup, { hyperparametersText } from './Popups';

import { useDispatch, useSelector } from 'react-redux';


const gridStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}))

const ParametersSlider = withStyles({
    root: {
        width: 150,
        color: '#3F4D59'
    }
})(Slider);

const beta2s = [
    {
        value: 0.666,
        label: '0.666',
    },
    {
        value: 0.777,
        label: '0.777',
    },
    {
        value: 0.888,
        label: '0.888',
    },
    {
        value: 0.999,
        label: '0.999',
    },
];

const beta1s = [
    {
        value: 0.6,
        label: '0.6',
    },
    {
        value: 0.7,
        label: '0.7',
    },
    {
        value: 0.8,
        label: '0.8',
    },
    {
        value: 0.9,
        label: '0.9',
    },
];

const epsilons = [
    {
        value: 0.0001,
        label: '0.0001',
    },
    {
        value: 0.001,
        label: '0.001',
    },
    {
        value: 0.01,
        label: '0.01',
    },
    {
        value: 0.1,
        label: '0.1',
    },
];

const momentums = [
    {
        value: 0.1,
        label: '0.1',
    },
    {
        value: 0.2,
        label: '0.2',
    },
    {
        value: 0.3,
        label: '0.3',
    },
    {
        value: 0.4,
        label: '0.4',
    },
    {
        value: 0.5,
        label: '0.5',
    },
    {
        value: 0.6,
        label: '0.6',
    },
    {
        value: 0.7,
        label: '0.7',
    },
    {
        value: 0.8,
        label: '0.8',
    },
    {
        value: 0.9,
        label: '0.9',
    }
];

const batches = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 100,
        label: '100',
    }
];

const randomStatesMarks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 10,
        label: '10',
    },
];

const activations = [
    {
        value: 'sigm',
        label: 'Sigmoid',
    },
    {
        value: 'relu',
        label: 'ReLU',
    },
    {
        value: 'tanh',
        label: 'Tanh',
    }
];

const learningRates = [
    {
        value: 0.0001,
        label: '0.0001',
    },
    {
        value: 0.001,
        label: '0.001',
    },
    {
        value: 0.003,
        label: '0.003',
    },
    {
        value: 0.1,
        label: '0.1',
    },
    {
        value: 0.3,
        label: '0.3',
    },
    {
        value: 1,
        label: '1',
    },
    {
        value: 3,
        label: '3',
    },
];

const epochMarks = [
    {
        value: 100,
        label: '100',
    },
    {
        value: 200,
        label: '200',
    },
    {
        value: 300,
        label: '300',
    },
    {
        value: 400,
        label: '400',
    },
    {
        value: 500,
        label: '500',
    },
];

let optimizers = [
    {
        value: "sgd",
        label: "SGD"
    },
    {
        value: "sgdm",
        label: "SGDM"
    },
    {
        value: "adagrad",
        label: "AdaGrad"
    },
    {
        value: "adam",
        label: "Adam"
    }
];

export function Hyperparameters(props) {
    // Accessing the Hyperparameters in the Redux State Storage
    const params = useSelector(state => state.params);
    const dispatch = useDispatch();

    return (
        <Grid container className={gridStyles.root} spacing={1}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <h1 className="mainText">Hyperparameters<Popup text={hyperparametersText} /></h1>
                </Grid>
            </Grid>

            {/* First Row */}
            <Optimizer params={params} dispatch={dispatch} />
            <Epochs params={params} dispatch={dispatch} />

            <br />
            {/* Second Row */}
            <LearningRate params={params} dispatch={dispatch} />
            <Activation params={params} dispatch={dispatch} />

            <br />
            {/* Third Row */}
            <Batches params={params} dispatch={dispatch} />
            <RandomState params={params} dispatch={dispatch} />
            
            {/* Fourth Row */}
            <Momentum params={params} dispatch={dispatch} />
            <Epsilon params={params} dispatch={dispatch} />

            {/* Fifth Row */}
            <Beta1 params={params} dispatch={dispatch} />
            <Beta2 params={params} dispatch={dispatch} />

        </Grid>
    )
}

function Beta2({ params, dispatch }) {
    const handleBeta2Change = (event) => {
        let newHP = params;
        newHP.hyperparameters.beta2 = event.target.value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }});
    };
    if (params.optimization === "adam") {
        return (
            <Grid item xs={6}>
                <Grid container justify="center">
                    <br />
                    <TextField
                        id="select-beta2"
                        select
                        value={params.hyperparameters.beta2}
                        onChange={handleBeta2Change}
                        helperText="Beta 2"
                    >
                        {beta2s.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        )
    } else {
        return (<div> </div>)
    }
}

function Beta1({ params, dispatch }) {
    const handleBeta1Change = (event) => {
        let newHP = params;
        newHP.hyperparameters.beta1 = event.target.value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }})
    };

    if (params.optimization === "adam") {
        return (
            <Grid item xs={6}>
                <Grid container justify="center">
                    <br />
                    <TextField
                        id="select-beta1"
                        select
                        value={params.hyperparameters.beta1}
                        onChange={handleBeta1Change}
                        helperText="Beta 1"
                    >
                        {beta1s.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        )
    } else {
        return (<div></div>)
    }
}

function Epsilon({ params, dispatch }) {
    const handleEpsilonChange = (event) => {
        let newHP = params;
        newHP.hyperparameters.epsilon = event.target.value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }})
    };
    if (params.optimization === "adam" || params.optimization === "adagrad") {
        return (
            
            <Grid item xs={6}>
                <Grid container justify="center">
                    <br />
                    <TextField
                        id="select-epsilon"
                        select
                        value={params.hyperparameters.epsilon}
                        onChange={handleEpsilonChange}
                        helperText="Epsilon"
                    >
                        {epsilons.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        )
    } else {
        return (<div></div>)
    }
}

function Momentum({ params, dispatch }) {
    const handleMomentumChange = (event) => {
        let newHP = params;
        newHP.hyperparameters.momentum = event.target.value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }})
    };

    if (params.optimization === "sgdm") {
        return (
            
            <Grid item xs={6}>
                <Grid container justify="center">
                    <br />
                    <TextField
                        id="select-momentum"
                        select
                        value={params.hyperparameters.momentum}
                        onChange={handleMomentumChange}
                        helperText="Momentum"
                    >
                        {momentums.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        )
    } else {
        return (<div></div>)
    }
}

function Batches({ params, dispatch }) {
    const handleBatchesChange = (event) => {
        let newHP = params;
        newHP.hyperparameters.batch = event.target.value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }})
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br />
                <TextField
                    id="select-batches"
                    select
                    value={params.hyperparameters.batch}
                    onChange={handleBatchesChange}
                    helperText="Batch Size"
                >
                    {batches.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    )
}

function RandomState({ params, dispatch }) {
    const handleRandomStatesChange = (event, value) => {
        let newHP = params;
        newHP.hyperparameters.random = value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }})
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    Random State
                </Typography>
                <ParametersSlider
                    defaultValue={0}
                    onChange={handleRandomStatesChange}
                    aria-labelledby="discrete-slider-small-steps"
                    step={1}
                    min={0}
                    max={10}
                    marks={randomStatesMarks}
                    valueLabelDisplay="auto"
                />
            </Grid>
        </Grid>
    )
}

function Activation({ params, dispatch }) {
    const handleActivationsChange = (event) => {
        let newHP = params;
        newHP.hyperparameters.activation = event.target.value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }})
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br/>
                <TextField
                    id="select-activation"
                    select
                    value={params.hyperparameters.activation}
                    onChange={handleActivationsChange}
                    helperText="Activation"
                >
                    {activations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    )
}

function LearningRate({ params, dispatch }) {
    const handleLearningRateChange = (event) => {
        let newHP = params;
        newHP.hyperparameters.learning_rate = event.target.value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }})
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br/>
                <TextField
                    id="select-learningrate"
                    select
                    value={params.hyperparameters.learning_rate}
                    onChange={handleLearningRateChange}
                    helperText="Learning Rate"
                >
                    {learningRates.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    )
}

function Epochs({ params, dispatch }) {
    const handleEpochsChange = (event, value) => {
        let newHP = params;
        newHP.hyperparameters.epochs = value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }})
    };

    return (
        <Grid item xs={6}>
            <Grid container justify="center">
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    Epochs
                </Typography>
                <ParametersSlider
                    defaultValue={1}
                    onChange={handleEpochsChange}
                    aria-labelledby="discrete-slider-small-steps"
                    step={1}
                    min={1}
                    max={500}
                    marks={epochMarks}
                    valueLabelDisplay="auto"
                />
            </Grid>
        </Grid>
    )
}

function Optimizer({ params, dispatch }) {
    const handleOptimizerChange = (event) => {
        let newHP = params;
        newHP.optimization = event.target.value;
        dispatch({type: "UPDATE_HPARAMS", params: { ...newHP }})
    };

    return (
        
        <Grid item xs={6}>
            <br />
            <Grid container justify="center">
                <TextField
                    id="select-optimization"
                    select
                    value={params.optimization}
                    onChange={handleOptimizerChange}
                    helperText="Optimization"
                >
                    {optimizers.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    )
}
