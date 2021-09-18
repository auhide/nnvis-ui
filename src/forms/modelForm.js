
import {
    Button,
    CircularProgress
} from '@material-ui/core';
import axios from 'axios';

import { modelEndpoint } from "../apiEndpoints";
import { evaluationResultIsValid } from '../validators/ResultValidators'


function DownloadModelButton({ result, text }) { 
    
    if (evaluationResultIsValid(result)) {
        let greenColor = result["Data"]["Accuracy"] * 255;
        let redColor = (255 - greenColor) * 2;

        return (
            <Button
                variant="outlined"
                size="small"
                style={{ borderRadius: 50, borderColor: `rgb(${redColor}, ${greenColor}, 0)` }}
                onClick={() => getModel()}
            >
                <p className="mainText"><b>{text}</b></p>
            </Button>
        );
    } else {
        return <></>
    }
}


function getModel() {

    axios({
        url: modelEndpoint,
        method: 'GET',
        responseType: 'blob',
        headers: {
            "Accept": "application/octet-stream"
        }
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'model.pickle'); //or any other extension
        document.body.appendChild(link);
        link.click();
    })
}


export default DownloadModelButton;