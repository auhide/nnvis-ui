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
  const initialLayersN = 2;
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
          {drawSynapses()}
        </Layer>
      </Stage>
    </div>
  );
}


let nnData = {};

let drawLayers = (layersN, neuronsN) => {
  let xPos = 100;
  let neurons = [];

  for (let i = 0; i < layersN; i++) {
    neurons.push(...drawNeurons(i, neuronsN, xPos));
    xPos += 200;
  }
  
  return neurons;
}

let drawNeurons = (layerIndex, neuronsN, xPos) => {
  let neurons = [];
  let yPos = window.innerHeight * 1/4;
  nnData[layerIndex] = {};
  
  for (let i = 0; i < neuronsN; i++){
    nnData[layerIndex][i] = [xPos, yPos];
    neurons.push(<Circle
                  x={xPos} y={yPos} radius={15} fill="black"
                />);
    yPos += 100;
  }

  return neurons;
}

let drawSynapses = () => {
  let lines = [];
  let lastLayerId = Math.max(...Object.keys(nnData));
  
  for (let layer in nnData){
    console.log(layer);
    
    if (layer != lastLayerId){
      console.log(nnData[layer]);
      for (let neuron in nnData[layer]){
        console.log(nnData[layer][neuron]);
        lines.push(
          ...singleNeuronSynapses(layer, neuron)
        );
      }

    }
  
  }

  return lines;
}

let singleNeuronSynapses = (layer, neuron) => {
  let synapses = [];
  let layerInt = parseInt(layer);
  let nextLayer = layerInt + 1;
  nextLayer = nextLayer.toString();

  console.log("Layer: " + layer);
  console.log(nnData[layer][neuron][1]);
  for (let nextLayerNeuron in nnData[nextLayer]){

    synapses.push(
      <Line
        points={[nnData[layer][neuron][0], 
                 nnData[layer][neuron][1],
                 nnData[nextLayer][nextLayerNeuron][0],
                 nnData[nextLayer][nextLayerNeuron][1]]}
        tension={0.5}
        closed
        stroke="black"
      />
    );
  }

  return synapses;
}

export default App;
