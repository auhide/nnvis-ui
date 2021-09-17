import { useState } from 'react';

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
import { useSelector } from 'react-redux';

// The dropdown needs these imports:
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import DownloadModelButton from '../forms/modelForm';


let greyColor = "#212226";


const options = [
    'Training Accuracy Graph',
    'Confusion Matrix'
];

function DropDown({ evalChoice, setEvalChoice }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuItemClick = (event, index) => {
        setEvalChoice(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="Device settings">
            <ListItem
                button
                aria-haspopup="true"
                aria-controls="lock-menu"
                aria-label="evaluation type"
                onClick={handleClickListItem}
            >
                <ListItemText primary="Evaluation type" secondary={options[evalChoice]} />
            </ListItem>
            </List>
            <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            {options.map((option, index) => (
                <MenuItem
                key={option}
                selected={index === evalChoice}
                onClick={(event) => handleMenuItemClick(event, index)}
                >
                {option}
                </MenuItem>
            ))}
            </Menu>
        </div>
    );
}

export function Evaluations() {
    const result = useSelector(state => state.evaluationResult);
    const isEvaluating = useSelector(state => state.isEvaluating);
    let [evaluationType, setEvalType] = useState(0);

    if (isEvaluating == null) {
        return( 
            <>
                <h1 className="mainText">Evaluation</h1>
                <p>Click <b><i>TRAIN NETWORK</i></b> to Evaluate</p>
            </>
        )
    }
    
    if (isEvaluating) {
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
                <DownloadModelButton result={result} text={"Download Model"} />
                <br />
                <br />
                <Divider />
                <Accuracy result={result} />
                <DropDown evalChoice={evaluationType} setEvalChoice={setEvalType} />
                <Divider />
                <br />
                <Charts result={result} evalType={evaluationType} />
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


function Charts({ result, evalType }) {

    if (evaluationResultIsValid(result)) {
        if (evalType === 0) {
            return (
                <>
                    <small class="mainText" style={{ margin: 0 }}><i>Training Accuracy</i></small>
                    <center><TrainChart data={result["Data"]["EpochsAccuracy"]} /></center>
                    <br />
                    <br />
                </>
            );
        } else if (evalType === 1) {
            return (
                <>
                    <br />
                    <small class="mainText" style={{ margin: 0 }}><i>Confusion Matrix</i></small>
                    <center><Heatmap data={result["Data"]["ConfusionMatrix"]} /></center>
                </>
            )
        }
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
        let greenColor = result["Data"]["Accuracy"] * 255;
        let redColor = (255 - greenColor) * 2;

        return (
            <>
                <p class="mainText">Test Accuracy: <b style={{
                    color: `rgb(${redColor}, ${greenColor}, 0)`
                }}>{result["Data"]["Accuracy"]}</b></p>
            </>
        )
    }
    
    return ( 
        <p>{JSON.stringify(result)}</p>
    )
}