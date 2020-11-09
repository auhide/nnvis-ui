import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { 
  Stage, 
  Layer, 
  Rect, 
  Text, 
  Circle, 
  Line } from 'react-konva';



function App() {
  const initialneuronsN = 1;
  const initialLayersN = 1;
  const [neuronsN, setNeuronsN] = useState(initialneuronsN);
  const [layersN, setLayersN] = useState(initialLayersN);

  return (
    <div className="App">
      <h1>Neurons {neuronsN}</h1>
      <button onClick={() => setNeuronsN(prevNeuronsN => ++prevNeuronsN)}>Increment</button>
      <button onClick={() => setNeuronsN(initialneuronsN)}>Reset</button>

      <h1>Layers {layersN}</h1>
      <button onClick={() => setLayersN(prevLayersN => ++prevLayersN)}>Increment</button>
      <button onClick={() => setLayersN(initialLayersN)}>Reset</button>
      
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {drawLayers(layersN, neuronsN)}
        </Layer>
      </Stage>
    </div>
  );
}

let drawLayers = (layersN, neuronsN) => {
  let xPos = 100;
  let neurons = [];

  for (let i = 0; i < layersN; i++) {
    neurons.push(...drawNeurons(neuronsN, xPos));
    xPos += 200;
  }

  return neurons;
}

let drawNeurons = (neuronsN, xPos) => {
  let neurons = [];
  let yPos = window.innerHeight * 1/4;
  
  for (let i = 0; i < neuronsN; i++){
    neurons.push(<Circle
                  x={xPos} y={yPos} radius={15} fill="green"
                />);
    yPos += 100;
  }

  return neurons;
}

let drawSynapse = (x, y) => {

}

export default App;
