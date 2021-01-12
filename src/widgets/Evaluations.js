import { evaluationResultIsValid } from '../validators/ResultValidators'
import { JellyfishSpinner } from "react-spinners-kit";
import { Divider } from '@material-ui/core';
import { 
    XYPlot, 
    XAxis, 
    YAxis, 
    VerticalGridLines, 
    HorizontalGridLines, 
    LineSeries
} from 'react-vis';


let greyColor = "#212226";

export function Evaluations(props) {
    if (props.isLoading == null) {
        return( 
            <>
                <h1 className="mainText">Evaluation</h1>
                <p>Click <b><i>TRAIN NETWORK</i></b> to Evaluate</p>
            </>
        )
    }
    
    if (props.isLoading) {
        return (
            <>
                <h1 className="mainText">Evaluation</h1>
                <br />
                <br />
                <br />
                <center><JellyfishSpinner size={200} color="#212226"/></center>
            </>
        );
    } else {
        return (
            <>
                <h1 className="mainText">Evaluation</h1>
                <Divider />
                <Accuracy result={props.result} />
                <Divider />
                <br />
                <Charts result={props.result} />
                <br />
                <br />
                <Divider />
            </>
        )
    }
}

function TrainChart({data}) {
    data = prepareForChart(data);

    return (
        <>
            <XYPlot height={200} width= {200}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis position="middle" title="Epochs"/>
                <YAxis position="middle" title="Accuracy"/>
                <LineSeries data={data} strokeWidth={2}
                            opacity="0.8"
                            color={greyColor} />
            </XYPlot>
        </>
    );
      
}

function Charts(props) {
    if (evaluationResultIsValid(props.result)) {
        return (
            <>
                <center><TrainChart data={props.result["Data"]["EpochsAccuracy"]} /></center>
                <small class="mainText" style={{ margin: 0 }}><i>Training Accuracy</i></small>
            </>
        );
    } else {
        return <></>
    }
}

function prepareForChart(rawData) {
    let data = [];

    for (let epoch_i in rawData) {
        data.push({ x: parseInt(epoch_i), y: rawData[epoch_i] });
    }

    console.log(data)
    return data
}

function Accuracy(props) {
    
    if (evaluationResultIsValid(props.result)) {
        return (
            <>
                <p class="mainText">Test Accuracy: <b>{props.result["Data"]["Accuracy"]}</b></p>
            </>
        )
    }
    
    return ( 
        <p>{JSON.stringify(props.result)}</p>
    )
}