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
// Learning rate
// Activation
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

            <Grid item xs={6}>
                <Grid container justify="center">
                    <Optimizer hyperparameters={props.hyperparameters} hsetter={props.hsetter} />
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container justify="center">
                    <Epochs  hyperparameters={props.hyperparameters} hsetter={props.hsetter} />
                </Grid>
            </Grid>
        </Grid>
    )
}

function Epochs(props) {
    const handleEpochsChange = (event, value) => {
        let newHP = props.hyperparameters;
        newHP.epochs = value;
        props.hsetter({...newHP});
    };

    return (
        <div>
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
        </div>
    )
}

function Optimizer(props) {
    const handleOptimizerChange = (event) => {
        let newHP = props.hyperparameters;
        newHP.optimization = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        <div>
            <br/>
            <TextField
                id="select-optimization"
                select
                value={props.hyperparameters.optimization}
                onChange={handleOptimizerChange}
                helperText="Optimization Algorithm"
            >
                {optimizers.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}
