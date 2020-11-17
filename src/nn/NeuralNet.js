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

import {
  getNeuronStyle,
  getSynapseStyle
} from './stylistic';

import {
  LayersSlider
} from '../widgets/Sliders'


// Buttons Margins
let minusXSignMargin = 50;
let yButtonMargin = 125;
let xButtonMargin = 10;

// Neural network margins
let yNeuronDifference = 100;
let xStartingPos = 300;
let layersDistance = 100;
let yTopNeuron = window.innerHeight * 1/4;
let maxNeurons = 8;
let minNeurons = 2;

export let nnData = {};



export function Network(architecture, setter, initLayersN) {
  return (
    <div className="network">
      {LayersSlider(architecture, setter, initLayersN)}

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {drawLayers(architecture)}
          {drawSynapses()}
        </Layer>
      </Stage>

      {drawButtons(architecture, setter)}
    </div>
  );
}


// export function 


export function drawLayers(architecture) {
  console.log(architecture)
  let xPos = xStartingPos;
  let neurons = [];

  for (let layerN in architecture) {
    neurons.push(
      ...drawNeurons(layerN, architecture[layerN], xPos)
    );
    xPos += layersDistance;
  }

  return neurons;
}


export function drawNeurons(layerIndex, neuronsN, xPos) {
  let neurons = [];
  let yPos = yTopNeuron;
  nnData[layerIndex] = {};
  
  for (let i = 0; i < neuronsN; i++){
    nnData[layerIndex][i] = [xPos, yPos];
    neurons.push(getNeuronStyle(xPos, yPos));
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
        [nnData[layerIndex][0][0] + xButtonMargin, nnData[layerIndex][0][1] + yButtonMargin])
      );

      // Minus Button
      buttons.push(
        getIncrementalButton("-", () => buttonCallback(architecture, setter, layerIndex.toString(), minusFunc), 
        [nnData[layerIndex][0][0] + xButtonMargin - minusXSignMargin, nnData[layerIndex][0][1] + yButtonMargin])
      );
    }
  }

  return buttons;
}


function plusFunc(num) {
  if (num == maxNeurons) {
    return num;
  }

  return ++num;
}

function minusFunc(num) {
  if (num == minNeurons) {
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

  // console.log("Layer: " + layer);
  // console.log(nnData[layer][neuron][1]);
  for (let nextLayerNeuron in nnData[nextLayer]){

    synapses.push(
      getSynapseStyle(
        nnData[layer][neuron][0], nnData[layer][neuron][1],
        nnData[nextLayer][nextLayerNeuron][0], nnData[nextLayer][nextLayerNeuron][1]
      )
    );
  }

  return synapses;
}