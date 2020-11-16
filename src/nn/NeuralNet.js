import { Button } from '@material-ui/core';
import { 
    Stage, 
    Layer, 
    Rect, 
    Text, 
    Circle, 
    Line } from 'react-konva';

import {
  getIncrementalButton
} from '../widgets/Buttons';


let yNeuronDifference = 100;
export let nnData = {};

export function drawLayers(architecture) {
  console.log(architecture)
  let xPos = 300;
  let neurons = [];

  for (let layerN in architecture) {
    neurons.push(
      ...drawNeurons(layerN, architecture[layerN], xPos)
    );
    xPos += 100;
  }

  return neurons;
}

export function drawNeurons(layerIndex, neuronsN, xPos) {
  let neurons = [];
  let yPos = window.innerHeight * 1/4;
  nnData[layerIndex] = {};
  
  for (let i = 0; i < neuronsN; i++){
    nnData[layerIndex][i] = [xPos, yPos];
    neurons.push(<Circle
                  x={xPos} y={yPos} radius={15} fill="black"
                />);
    yPos += yNeuronDifference;
  }

  return neurons;
}


export function drawButtons(architecture, setter) {
  let buttons = [];

  for (let layerIndex in nnData) {

    if (nnData[layerIndex][0]) {
      // Plus Button
      buttons.push(
        getIncrementalButton("+", () => buttonCallback(architecture, setter, layerIndex.toString(), plusFunc), 
        [nnData[layerIndex][0][0] + 10, nnData[layerIndex][0][1] + 60])
      );

      // Minus Button
      buttons.push(
        getIncrementalButton("-", () => buttonCallback(architecture, setter, layerIndex.toString(), minusFunc), 
        [nnData[layerIndex][0][0] - 50 + 10, nnData[layerIndex][0][1] + 60])
      );
    }
  }

  return buttons;
}

function plusFunc(num) {
  if (num == 8) {
    return num;
  }

  return ++num;
}

function minusFunc(num) {
  if (num == 2) {
    return num;
  }

  return --num;
}


function buttonCallback(architecture, setter, layer, func) {
  // Changing the number of neurons of a certain layer with `func`
  let newArchitecture = architecture;
  newArchitecture[layer] = func(architecture[layer]);
  let mergedArchitecture = Object.assign(architecture, newArchitecture);

  setter({...mergedArchitecture});
}



export function drawSynapses() {
  let lines = [];
  let lastLayerId = Math.max(...Object.keys(nnData));
  
  for (let layer in nnData){
    
    if (layer != lastLayerId){

      for (let neuron in nnData[layer]){
        lines.push(
          ...singleNeuronSynapses(layer, neuron)
        );
      }

    }
  
  }

  return lines;
}

export function singleNeuronSynapses(layer, neuron) {
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

export function stageFigures(figures) {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {figures}
      </Layer>
    </Stage>
  );
}