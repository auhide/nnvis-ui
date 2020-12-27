import './App.css';
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Local Imports
import {
  Network
} from './nn/NeuralNet';
import {
  SendArchitectureButton
} from './forms/architectureForm'
import {
  useStyles
} from './widgets/Grids'


export function DrawGrids(props) {
  const classes = useStyles();

  return (
      <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Network architecture={props.architecture} setter={props.setter}/>
              </Paper>
          </Grid>
      </Grid>
  );
}

function App() {
  const [architecture, setArchitecture] = useState({
    1: 2,
    2: 3,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  });

  return (
    <div className="App">
      <h1>{Object.keys(architecture)}</h1>
      <h1>{Object.values(architecture)}</h1>
      <SendArchitectureButton architecture={architecture} text="Train Network" />
      <DrawGrids architecture={architecture} setter={setArchitecture} />
    </div>
  );
}


export default App;
