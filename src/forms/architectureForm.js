import axios from 'axios';
import {
    Button,
    CircularProgress
} from '@material-ui/core';
import { borders } from '@material-ui/system';
import { useSelector, useDispatch } from "react-redux";
import { architectureEndpoint } from "../apiEndpoints";
import { paperColor } from "../widgets/Grids";


export function SendArchitectureButton({ text }) {
    // Architecture Management
    const architecture = useSelector(state => state.architecture);
    const hyperparams = useSelector(state => state.params);
    const dataset = useSelector(state => state.dataset);
    
    // Result Management
    const dispatchResult = useDispatch();
    const isEvaluating = useSelector(state => state.isEvaluating);
    
    if (!isEvaluating) {

        // Returning a normal button
        return (
            <div>
                <br />
                <Button
                    variant="outlined"
                    size="small"
                    style={{ borderRadius: 50 }}
                    onClick={() => sendArchitecture(
                                        architecture, 
                                        hyperparams,
                                        dispatchResult,
                                        dataset
                    )}>
                    <p className="mainText"><b>{text}</b></p>
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
                    color="default"
                    variant="outlined"
                    size="small"
                    style={{ borderRadius: 50 }}
                    disabled={true}
                    onClick={() => sendArchitecture(
                                        architecture, 
                                        hyperparams,
                                        dispatchResult,
                                        dataset
                    )}>
                    <CircularProgress size={20} color="inherit" />
                    <p className="mainText" style={{ marginLeft: 5 }}><b>Training...</b></p>
                </Button>
                <br />
            </div>
        );
    }
}

function prepareArchitectureRequest(architecture, hyperparams, dataset) {
    
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
    request.dataset = dataset;

    return request
}

function sendArchitecture(architecture, hyperparams, dispatcher, dataset) {
    let preparedRequest = prepareArchitectureRequest(architecture, hyperparams, dataset);
    
    // Setting the Evaluation flag to `true`
    dispatcher({ type: "IS_EVALUATING", isEvaluating: true });
    axios
        .post(architectureEndpoint, preparedRequest)
        .then(res => updateEvaluationResult(res.data, dispatcher))
        .catch(err => console.log(err));
}

function updateEvaluationResult(newResult, dispatcher) {
    // Setting the flag for Evaluation to `false` and updating the result.
    dispatcher({ type: "IS_EVALUATING", isEvaluating: false });
    dispatcher({ type: "UPDATE_RESULT", result: { ...newResult } });
}