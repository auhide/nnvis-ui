import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import {
    Slider
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';



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
        value: 200,
        label: '200',
    },
    {
        value: 400,
        label: '400',
    },
    {
        value: 600,
        label: '600',
    },
    {
        value: 800,
        label: '800',
    },
    {
        value: 1000,
        label: '1K',
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
    return (
        <Grid container className={gridStyles.root} spacing={1}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <h1 className="mainText">Hyperparameters</h1>
                </Grid>
            </Grid>

            {/* First Row */}
            <Optimizer params={props.params} hsetter={props.hsetter} />
            <Epochs params={props.params} hsetter={props.hsetter} />

            <br />
            {/* Second Row */}
            <LearningRate params={props.params} hsetter={props.hsetter} />
            <Activation params={props.params} hsetter={props.hsetter} />

            <br />
            {/* Third Row */}
            <Batches params={props.params} hsetter={props.hsetter} />
            <RandomState params={props.params} hsetter={props.hsetter} />

            {/* Fourth Row */}
            <Momentum params={props.params} hsetter={props.hsetter} />
            <Epsilon params={props.params} hsetter={props.hsetter} />

            {/* Fifth Row */}
            <Beta1 params={props.params} hsetter={props.hsetter} />
            <Beta2 params={props.params} hsetter={props.hsetter} />

        </Grid>
    )
}

function Beta2(props) {
    const handleBeta2Change = (event) => {
        let newHP = props.params;
        newHP.hyperparameters.beta2 = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br />
                <TextField
                    id="select-beta2"
                    select
                    value={props.params.hyperparameters.beta2}
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
}

function Beta1(props) {
    const handleBeta1Change = (event) => {
        let newHP = props.params;
        newHP.hyperparameters.beta1 = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br />
                <TextField
                    id="select-beta1"
                    select
                    value={props.params.hyperparameters.beta1}
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
}

function Epsilon(props) {
    const handleEpsilonChange = (event) => {
        let newHP = props.params;
        newHP.hyperparameters.epsilon = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br />
                <TextField
                    id="select-epsilon"
                    select
                    value={props.params.hyperparameters.epsilon}
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
}

function Momentum(props) {
    const handleMomentumChange = (event) => {
        let newHP = props.params;
        newHP.hyperparameters.momentum = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br />
                <TextField
                    id="select-momentum"
                    select
                    value={props.params.hyperparameters.momentum}
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
}

function Batches(props) {
    const handleBatchesChange = (event) => {
        let newHP = props.params;
        newHP.hyperparameters.batch = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br />
                <TextField
                    id="select-batches"
                    select
                    value={props.params.hyperparameters.batch}
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

function RandomState(props) {
    const handleRandomStatesChange = (event, value) => {
        let newHP = props.params;
        newHP.hyperparameters.random = value;
        props.hsetter({...newHP});
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

function Activation(props) {
    const handleActivationsChange = (event) => {
        let newHP = props.params;
        newHP.hyperparameters.activation = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br/>
                <TextField
                    id="select-activation"
                    select
                    value={props.params.hyperparameters.activation}
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

function LearningRate(props) {
    const handleLearningRateChange = (event) => {
        let newHP = props.params;
        newHP.hyperparameters.learning_rate = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        
        <Grid item xs={6}>
            <Grid container justify="center">
                <br/>
                <TextField
                    id="select-learningrate"
                    select
                    value={props.params.hyperparameters.learning_rate}
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

function Epochs(props) {
    const handleEpochsChange = (event, value) => {
        let newHP = props.params;
        newHP.hyperparameters.epochs = value;
        props.hsetter({...newHP});
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
                    max={1000}
                    marks={epochMarks}
                    valueLabelDisplay="auto"
                />
            </Grid>
        </Grid>
    )
}

function Optimizer(props) {
    const handleOptimizerChange = (event) => {
        let newHP = props.params;
        newHP.optimization = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        
        <Grid item xs={6}>
            <br />
            <Grid container justify="center">
                <TextField
                    id="select-optimization"
                    select
                    value={props.params.optimization}
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
