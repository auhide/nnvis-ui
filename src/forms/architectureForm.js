import axios from 'axios';
import {
    Button,
    CircularProgress,
    LinearProgress
} from '@material-ui/core';
import { useSelector } from "react-redux";


export function SendArchitectureButton(props) {
    const architecture = useSelector(state => state.architecture);
    const hyperparams = useSelector(state => state.params);
    
    if (!props.isTraining) {

        // Returning a normal button
        return (
                <div>
                <br />
                <Button
                    variant="outlined"
                    size="small"
                    onClick={() => sendArchitecture(
                                        architecture, 
                                        hyperparams,
                                        props.rsetter,
                                        props.evalLoadSetter,
                                        props.trainButtonSetter)}>
                    <p className="mainText"><b>{props.text}</b></p>
                </Button>
                <br />
            </div>
        );

    } else {

        // Returning a disabled button with a spinner
        return (
            <div>
            <br />
                <Button
                    variant="outlined"
                    size="small"
                    disabled={true}
                    onClick={() => sendArchitecture(
                                        architecture, 
                                        hyperparams,
                                        props.rsetter,
                                        props.evalLoadSetter,
                                        props.trainButtonSetter)}>
                    <CircularProgress size={20} color="#212226" />
                    <p className="mainText" style={{marginLeft: 5}}><b>Training...</b></p>
                </Button>
                <br />
            </div>
        );
    }
}

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
    request.hyperparameters = hyperparams.hyperparameters;
    request.dataset = "iris";

    return request
}

function sendArchitecture(architecture, hyperparams, resultSetter, evalIsLoading, trainButtonIsLoading) {
    let preparedRequest = prepareArchitectureRequest(architecture, hyperparams);

    evalIsLoading(true);
    trainButtonIsLoading(true);
    axios
        .post("http://localhost:5000/architecture", preparedRequest)
        .then(res => updateEvaluationResult(res.data, resultSetter, evalIsLoading, trainButtonIsLoading))
        .catch(err => console.log(err));
}

function updateEvaluationResult(newResult, resultSetter, evalIsLoading, trainButtonIsLoading) {
    evalIsLoading(false);
    trainButtonIsLoading(false);
    resultSetter({...newResult});
}