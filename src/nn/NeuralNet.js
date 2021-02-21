
import {
  getIncrementalButton
} from '../widgets/Buttons';

import {
  GetNeuronStyle,
  getSynapseStyle
} from './stylistic';

import {
  LayersSlider
} from '../widgets/Sliders'

import { motion } from 'framer-motion';
import { useSelector, useDispatch } from "react-redux";


// Buttons Margins
let minusXSignMargin = 50;
let yButtonMargin = 40;
let xButtonMargin = 10;

// Neural network margins
let yNeuronDifference = 80;
let xStartingPos = 50;
let layersDistance = 450;

let yTopNeuron = window.innerHeight * 1/8;
let maxNeurons = 6;
let minNeurons = 2;

let layersScales = {
  "2": 450,
  "3": 225,
  "4": 150,
  "5": 125,
  "6": 100
};

let nnData = {};

export function Network({}) {
  // Using Redux's useSelector and useDispatch to manage the architecture.
  const architecture = useSelector(state => state.architecture);
  const dispatch = useDispatch();

  // A Flag for when the NeuralNetwork is Evaluating a Model
  const isEvaluating = useSelector(state => state.isEvaluating);

  return (
    <div className="network">
      <LayersSlider 
        justify="center"
        architecture={architecture}
        dispatch={dispatch} 
      />

      <DrawDescriptiveData architecture={architecture} />

      <motion.svg
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 600 600"
      >
        <DrawNeurons architecture={architecture} isLoading={isEvaluating} />
        <DrawSynapses isLoading={isEvaluating} />
      </motion.svg>
      
      <DrawButtons architecture={architecture} dispatch={dispatch}/>

    </div>
  );
}

function DrawDescriptiveData({ architecture }) {
  let lastLayer = getLastLayerNumber(architecture);
  let layersCount = getArchitectureLayersNumber(architecture);

  return (
    <div>
      <small className='mainText'><i>Hidden Layers: {layersCount - 1}</i></small>
      <br />
      <small className='mainText'><i>Output Neurons: {architecture[lastLayer]}</i></small>
    </div>
  )
}

function getLastLayerNumber(architecture) {
  let currentLayer = 0;

  for (const layer in architecture) {
    if (architecture[layer] === 0) {
      break;
    }
    currentLayer = layer
 }

 return currentLayer;
}


function getArchitectureLayersNumber(architecture) {
  let counter = 0;

  for (const layer in architecture) {
    if (architecture[layer] !== 0) {
        counter++;
    }
  }

  return counter;
}

function scaleNN(newArchitecture) {
  let nLayers = getArchitectureLayersNumber(newArchitecture);
  
  layersDistance = layersScales[nLayers];
}


export function DrawNeurons({ architecture, isLoading }) {
  let xPos = xStartingPos;
  let neurons = [];

  scaleNN(architecture);

  for (let layerN in architecture) {
    neurons.push(
      ...getNeurons(layerN, architecture[layerN], xPos, isLoading)
    );
    xPos += layersDistance;
  }

  return neurons;
}


export function getNeurons(layerIndex, neuronsN, xPos, isLoading) {
  let neurons = [];
  let yPos = yTopNeuron;
  nnData[layerIndex] = {};
  
  for (let i = 0; i < neuronsN; i++){
    nnData[layerIndex][i] = [xPos, yPos];
    neurons.push(<GetNeuronStyle xPos={xPos} yPos={yPos} isLoading={isLoading} />);
    yPos += yNeuronDifference;
  }

  return neurons;
}


export function DrawButtons({ architecture, dispatch }) {
  let buttons = [];

  for (let layerIndex in nnData) {

    if (nnData[layerIndex][0]) {
      // Plus Button
      buttons.push(
        getIncrementalButton("+", () => buttonCallback(architecture, dispatch, layerIndex.toString(), plusFunc), 
        [nnData[layerIndex][0][0] + xButtonMargin, nnData[layerIndex][0][1] + yButtonMargin])
      );

      // Minus Button
      buttons.push(
        getIncrementalButton("-", () => buttonCallback(architecture, dispatch, layerIndex.toString(), minusFunc), 
        [nnData[layerIndex][0][0] + xButtonMargin - minusXSignMargin, nnData[layerIndex][0][1] + yButtonMargin])
      );
    }
  }

  return buttons;
}


function plusFunc(num) {
  if (num === maxNeurons) {
    return num;
  }

  return ++num;
}

function minusFunc(num) {
  if (num === minNeurons) {
    return num;
  }

  return --num;
}


function buttonCallback(architecture, dispatch, layer, func) {
  // Changing the number of neurons of a certain layer with `func`
  let newArchitecture = architecture;
  newArchitecture[layer] = func(architecture[layer]);
  let mergedArchitecture = Object.assign(architecture, newArchitecture);

  dispatch({type: "UPDATE_LAYERS", architecture: { ...mergedArchitecture }})
}


export function DrawSynapses({ isLoading }) {
  let lines = [];
  let lastLayerId = Math.max(...Object.keys(nnData));
  
  for (let layer in nnData){
    
    if (layer !== lastLayerId){

      for (let neuron in nnData[layer]){
        lines.push(
          ...singleNeuronSynapses(layer, neuron, isLoading)
        );
      }

    }
  
  }

  return lines;
}


export function singleNeuronSynapses(layer, neuron, isLoading) {
  let synapses = [];
  let layerInt = parseInt(layer);
  let nextLayer = layerInt + 1;
  nextLayer = nextLayer.toString();

  for (let nextLayerNeuron in nnData[nextLayer]){

    synapses.push(
      getSynapseStyle(
        nnData[layer][neuron][0], nnData[layer][neuron][1],
        nnData[nextLayer][nextLayerNeuron][0], nnData[nextLayer][nextLayerNeuron][1],
        isLoading
      )
    );
  }

  return synapses;
}