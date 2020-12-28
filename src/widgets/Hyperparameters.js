import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


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

function Optimizer(props) {
    const handleOptimizerChange = (event) => {
        let newHP = props.hyperparameters;
        newHP.optimization = event.target.value;
        props.hsetter({...newHP});
    };

    return (
        <div>
            <h1 className="mainText">Hyperparameters</h1>
            <TextField
                id="standard-select-currency"
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

export function Hyperparameters(props) {
    return (
        <Optimizer hyperparameters={props.hyperparameters} hsetter={props.hsetter} />
    )
}