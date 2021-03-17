import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Network } from '../nn/NeuralNet';
import { Hyperparameters } from './Hyperparameters';
import { Evaluations } from './Evaluations';


let paperColor = "#F2F2F2"

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    hyperparamsPaperOptions: {
        height: 800,
        width: 400,
        alignItems: "center",
        justify: "center",
        position: "absolute",
        backgroundColor: paperColor
    },
    paperArch: {
        height: 800,
        width: 600,
        alignItems: "center",
        justify: "center",
        position: "absolute",
        backgroundColor: paperColor
    },
    evaluationsPaperOptions: {
      height: 800,
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
  }
}));

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