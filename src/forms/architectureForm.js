import axios from 'axios';
import {
    Button
} from '@material-ui/core';


function prepareArchitectureRequest(architecture) {
    let request = {};
    request.architecture = {};

    // Getting the number of neurons for each layer from the UI
    for (const layer in architecture) {
        if (architecture[layer] != 0) {
            request.architecture[layer] = architecture[layer];
        }
    }

    // Adding Hyperparameters
    request.optimization = "adam";
    request.hyperparameters = {
        "learning_rate": 0.1,
        "type_": "classification",
        "epochs": 5,
        "random": 0,
        "activation": "sigm",
        "momentum": 0.5,
        "epsilon": 0.01
    };

    return request
}

function sendArchitecture(architecture) {
    let preparedRequest = prepareArchitectureRequest(architecture);

    axios
        .post("http://localhost:5000/architecture", preparedRequest)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

export function SendArchitectureButton(props) {
    return (
        <Button
            onClick={() => sendArchitecture(props.architecture)}>
            {props.text}
        </Button>
    )
}