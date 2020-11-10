import './App.css';
import { useState } from 'react';

import { 
  Slider
} from '@material-ui/core';


import {
  drawNeuralNet,
  setLayerCustom,
  setNeuronsCustom
} from './nn/NeuralNet.js';

import {
  getIncrementalButton
} from './widgets/Buttons.js';


function App() {
  const initialneuronsN = 2;
  const initialLayersN = 2;
  const [neuronsN, setNeuronsN] = useState(initialneuronsN);
  const [layersN, setLayersN] = useState(initialLayersN);
  
  return (
    <div className="App">
      <h1>Neurons {neuronsN}</h1>
      {getIncrementalButton("+", () => setNeuronsCustom(
        neuronsN, 
        setNeuronsN, 
        prevNeuronsN => ++prevNeuronsN
      ))}
      {getIncrementalButton("-", () => setNeuronsCustom(
        neuronsN, 
        setNeuronsN, 
        prevNeuronsN => --prevNeuronsN
      ))}
      <button onClick={() => setNeuronsN(prevNeuronsN => ++prevNeuronsN)}>+</button>
      <button onClick={() => setNeuronsN(prevNeuronsN => --prevNeuronsN)}>-</button>

      <h1>Layers {layersN}</h1>

      <Slider 
        min={2}
        max={6}
        onChange={(e, val) => setLayerCustom(setLayersN, val)}
      />
      {drawNeuralNet(layersN, neuronsN)}
      
    </div>
  );
}


export default App;
