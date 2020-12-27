import axios from 'axios';
import {
    Button
} from '@material-ui/core';


function sendArchitecture(request) {
    axios
        .post("http://localhost:5000/architecture", request)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

export function SendArchitectureButton(props) {
    return (
        <Button
            onClick={() => sendArchitecture(props.request)}>
            {props.text}
        </Button>
    )
}