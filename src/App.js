import './App.css';
import { useState, useEffect } from 'react';

import { 
  Slider
} from '@material-ui/core';

import { 
  Stage, 
  Layer, 
} from 'react-konva';

// Local Imports
import {
  nnData,
  drawLayers,
  drawButtons,
  stageFigures
} from './nn/NeuralNet';


function App() {
  const [architecture, setArchitecture] = useState({
    1: 2,
    2: 3,
    3: 0,
    4: 0
  });

  console.log(nnData);
  return (
    <div className="App">
      {/* <button onClick={() => addButton(setButtons)}>Add Button</button> */}
      <h1>{Object.keys(architecture)}</h1>
      <h1>{Object.values(architecture)}</h1>

      {
        stageFigures(
          drawLayers(architecture)
          )
      }
      {drawButtons(architecture, setArchitecture)}

    </div>
  );
}


export default App;
