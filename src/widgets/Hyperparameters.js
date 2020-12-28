import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import {
    Slider
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';


// Hyperparameters to import
// Optimizer - Done
// Epochs - Done
// Learning rate - Done
// Activation - 
// Random
// Batch
// Momentum
// Epsilon
// Beta 1
// Beta 2

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
