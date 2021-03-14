import { evaluationResultIsValid } from '../validators/ResultValidators'
import { JellyfishSpinner } from "react-spinners-kit";
import { Divider } from '@material-ui/core';
import { 
    XYPlot, 
    XAxis, 
    YAxis, 
    VerticalGridLines, 
    HorizontalGridLines, 
    LineSeries,
    HeatmapSeries, 
    ContinuousColorLegend
} from 'react-vis';
import Popup, { evaluationText } from './Popups';
import { useSelector } from 'react-redux';


let greyColor = "#212226";

export function Evaluations() {
    const result = useSelector(state => state.evaluationResult);
    const isEvaluating = useSelector(state => state.isEvaluating);

    if (isEvaluating == null) {
        return( 
            <>
                <h1 className="mainText">Evaluation<Popup text={evaluationText} /></h1>
                <p>Click <b><i>TRAIN NETWORK</i></b> to Evaluate</p>
            </>
        )
    }
    
    if (isEvaluating) {
        return (
            <>
                <h1 className="mainText">Evaluation<Popup text={evaluationText} /></h1>
                <br />
                <br />
                <br />
                <center><JellyfishSpinner size={200} color="#212226"/></center>
            </>
        );
    } else {
        return (
            <>
                <h1 className="mainText">Evaluation<Popup text={evaluationText} /></h1>
                <Divider />
                <Accuracy result={result} />
                <Divider />
                <br />
                <Charts result={result} />
            </>
        )
    }
}

function Heatmap({data}) {
    let axesValues = getAxesValues(data);

    return (
        <>
            <XYPlot width={200} height={200}>
                <XAxis tickValues={axesValues} tickFormat={ v => Math.floor(v) } />
                <XAxis orientation="left" tickValues={axesValues} tickFormat={ v => Math.floor(v) } />
                <HeatmapSeries 
                    colorRange={["black", "gray"]}
                    data={
                        data
                    } />
            </XYPlot>
            <ContinuousColorLegend
                width={100}
                startColor="black"
                endColor="gray"
            />
            <span style={{ fontSize: 12 }}>
                <small style={{ position: "absolute", marginTop: -20, marginLeft: -50 }} >LOW</small>
                <small style={{ position: "absolute", marginTop: -20, marginLeft: 25 }}>HIGH</small>
            </span>
        </>
    );
}


function getAxesValues(data) {
    let axisValues = [];

    for (let i in data) {
        axisValues.push(data[i].y);
    }

    return axisValues;
}


function TrainChart({ data }) {
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


function Charts({ result }) {

    if (evaluationResultIsValid(result)) {
        return (
            <>
                <small class="mainText" style={{ margin: 0 }}><i>Training Accuracy</i></small>
                <center><TrainChart data={result["Data"]["EpochsAccuracy"]} /></center>
                <br />
                <br />
                <Divider />
                <br />
                <small class="mainText" style={{ margin: 0 }}><i>Confusion Matrix</i></small>
                <center><Heatmap data={result["Data"]["ConfusionMatrix"]} /></center>
                <br />
                <br />
                <Divider />
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


function Accuracy({ result }) {
    
    if (evaluationResultIsValid(result)) {
        return (
            <>
                <p class="mainText">Test Accuracy: <b>{result["Data"]["Accuracy"]}</b></p>
            </>
        )
    }
    
    return ( 
        <p>{JSON.stringify(result)}</p>
    )
}