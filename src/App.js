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

  const [hyperparameters, setHyperparameters] = useState({
    "optimization": "sgd",
    "epochs": 5,
    "learning_rate": 0.1
  })

  return (
    <div className="App">
      <CustomNavbar />
      <br />
      <SendArchitectureButton architecture={architecture} text="Train Network" />
      <br />
      <h1>Current Optimizer: {hyperparameters.optimization}</h1>
      <h1>Current Epochs: {hyperparameters.epochs}</h1>
      <h1>Current LRate: {hyperparameters.learning_rate}</h1>
      <DrawGrids architecture={architecture} setter={setArchitecture} 
                 hyperparameters={hyperparameters} hsetter={setHyperparameters}/>
    </div>
  );
}


export default App;
