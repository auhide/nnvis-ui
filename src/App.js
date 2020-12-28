import './App.css';
import { useState, useEffect } from 'react';

// Local Imports
import {
  SendArchitectureButton
} from './forms/architectureForm'
import {
  DrawGrids
} from './widgets/Grids';
import {
  CustomNavbar
} from './widgets/Navbars';


function App() {
  const [architecture, setArchitecture] = useState({
    1: 2,
    2: 3,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  });

  const [params, setparams] = useState({
    "optimization": "sgd",
    "hyperparameters": {
      "epochs": 5,
      "learning_rate": 0.1,
      "activation": "sigm"
    }
  })

  return (
    <div className="App">
      <CustomNavbar />
      <br />
      <SendArchitectureButton architecture={architecture} text="Train Network" />
      <br />
      <h1>Current Optimizer: {params.optimization}</h1>
      <h1>Current Epochs: {params.hyperparameters.epochs}</h1>
      <h1>Current LRate: {params.hyperparameters.learning_rate}</h1>
      <h1>Current Activation: {params.hyperparameters.activation}</h1>
      <DrawGrids architecture={architecture} setter={setArchitecture} 
                 params={params} hsetter={setparams}/>
    </div>
  );
}


export default App;
