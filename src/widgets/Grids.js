import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
    Network
} from '../nn/NeuralNet';


let paperColor = "#F2F2F2"

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paperOptions: {
        height: 600,
        width: 300,
        alignItems: "center",
        justify: "center",
        position: "absolute",
        backgroundColor: paperColor
    },
    paperArch: {
        height: 600,
        width: 600,
        alignItems: "center",
        justify: "center",
        position: "absolute",
        backgroundColor: paperColor
    },
}));


export function DrawGrids(props) {
    const classes = useStyles();
  
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3} >
              <Grid container justify="center">
                  <Paper className={classes.paperOptions}>
                    <h1 className="mainText">Hyperparameters</h1>
                  </Paper>
              </Grid>
            </Grid>
            
            <Grid item xs={6} >
              <Grid container justify="center">
                  <Paper className={classes.paperArch}>
                    <Network architecture={props.architecture} setter={props.setter}/>
                  </Paper>
              </Grid>
            </Grid>
  
            <Grid item xs={3} >
              <Grid container justify="center">
                  <Paper className={classes.paperOptions}>
                    <h1 className="mainText">Evaluation</h1>
                  </Paper>
              </Grid>
            </Grid>
        </Grid>
    );
  }