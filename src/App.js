import './App.css';
import { useState, useEffect } from 'react';

// Local Imports
import {
  Network
} from './nn/NeuralNet';
import {
  SendArchitectureButton
} from './forms/architectureForm'


function App() {
  const [architecture, setArchitecture] = useState({
    1: 2,
    2: 3,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  });

  let test_request = {
      "architecture": {
          "1": 3,
          "2": 3,
          "3": 3
      },
      "optimization": "adam",
      "hyperparameters": {
          "learning_rate": 0.1,
          "type_": "classification",
          "epochs": 5,
          "random": 0,
          "activation": "sigm",
          "momentum": 0.5,
          "epsilon": 0.01
      }
  }

  return (
    <div className="App">
      <h1>{Object.keys(architecture)}</h1>
      <h1>{Object.values(architecture)}</h1>
      <SendArchitectureButton request={test_request} text="Train Network" />
      <Network architecture={architecture} setter={setArchitecture}/>
    </div>
  );
}


export default App;
