import axios from 'axios';
import {
    Button
} from '@material-ui/core';


function prepareArchitectureRequest(architecture, hyperparams) {
    let request = {};
    request.architecture = {};

    // Getting the number of neurons for each layer from the UI
    for (const layer in architecture) {
        if (architecture[layer] !== 0) {
            request.architecture[layer] = architecture[layer];
        }
    }

    // Adding Hyperparameters
    request.optimization = hyperparams.optimization;
    request.hyperparameters = hyperparams.hyperparameters

    return request
}

function sendArchitecture(architecture, hyperparams) {
    let preparedRequest = prepareArchitectureRequest(architecture, hyperparams);

    axios
        .post("http://localhost:5000/architecture", preparedRequest)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

export function SendArchitectureButton(props) {


    return (
        <div>
            <br />
            <Button
                variant="outlined"
                size="small"
                onClick={() => sendArchitecture(props.architecture, props.params)}>
                <p className="mainText"><b>{props.text}</b></p>
            </Button>
            <br />
        </div>
    )
}