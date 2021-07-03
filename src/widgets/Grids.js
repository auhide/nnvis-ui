import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useSelector } from "react-redux";
import { Divider } from '@material-ui/core';

import { Network } from '../nn/NeuralNet';
import { Hyperparameters } from './Hyperparameters';
import { Evaluations } from './Evaluations';
import {
  getPresentableDatasetByName
} from '../forms/datasetsForm'

import {
  SendArchitectureButton
} from '../forms/architectureForm';


export let paperColor = "#F2F2F2"

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: window.screen.availWidth
    },
    hyperparamsPaperOptions: {
        height: 750,
        width: 400,
        alignItems: "center",
        justify: "center",
        position: "absolute",
        backgroundColor: paperColor
    },
    paperArch: {
        height: 750,
        width: 600,
        alignItems: "center",
        justify: "center",
        position: "absolute",
        backgroundColor: paperColor
    },
    evaluationsPaperOptions: {
      height: 750,
      width: 400,
      alignItems: "center",
      justify: "center",
      position: "absolute",
      backgroundColor: paperColor
    },
    datasetsPaperOptions: {
      height: 350,
      width: 500,
      alignItems: "center",
      justify: "center",
      position: "absolute",
      backgroundColor: paperColor
    },
    dataParamsPaperOptions: {
      height: 350,
      width: 300,
      alignItems: "center",
      justify: "center",
      position: "absolute",
      backgroundColor: paperColor
    }
}));

let datasetNameScaleFactor = 13;

export function DrawGrids() {
  const classes = useStyles();

  return (
      <Grid container className={classes.root} spacing={1}>
          <Grid item xs={3} >
            <Grid container justify="center">
                <Paper className={classes.hyperparamsPaperOptions}>
                  <Hyperparameters />
                </Paper>
            </Grid>
          </Grid>
          
          <Grid item xs={6} >
            <Grid container justify="center">
                <Paper className={classes.paperArch}>
                  <TrainingButtonGrids />
                  <br />
                  <Network />
                </Paper>
            </Grid>
          </Grid>

          <Grid item xs={3} >
            <Grid container justify="center">
                <Paper className={classes.evaluationsPaperOptions}>
                  <Evaluations />
                </Paper>
            </Grid>
          </Grid>
      </Grid>
  );
}

function TrainingButtonGrids() {
  let datasetName = useSelector(state => state.dataset);
  datasetName = getPresentableDatasetByName(datasetName);
  let datasetLength = datasetName.length * datasetNameScaleFactor;
  
  return (
    <Grid container spacing={1}>
      <Grid item xs={4} alignItems={"flex-end"}>
        <div style={{ float: "right", marginRight: "-30%" }}>
          <SendArchitectureButton text="Train Network" />
        </div>
      </Grid>
      <Grid item xs={4} >
        <p class="mainText" style={{ marginTop: "20%"}}>ON</p>
      </Grid>
      <Grid item xs={4} >
        <div style={{ width: datasetLength, marginTop: "15%", marginLeft: "-30%"}}>
          <p class="dataset-border mainText">{datasetName}</p>
        </div>
      </Grid>

    </Grid>
  );
}