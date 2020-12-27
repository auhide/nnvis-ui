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

  return (
    <div className="App">
      <h1>{Object.keys(architecture)}</h1>
      <h1>{Object.values(architecture)}</h1>
      <SendArchitectureButton architecture={architecture} text="Train Network" />
      <Network architecture={architecture} setter={setArchitecture}/>
    </div>
  );
}


export default App;
