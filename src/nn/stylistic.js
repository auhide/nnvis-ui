
import { useSelector, useDispatch } from "react-redux";
import { motion } from 'framer-motion';
import {
  getLastLayerNumber
} from './NeuralNet';


// Constants - Neurons
const defaultNeuronRadius = 15;

// Constants - Synapses
const defaultSynapseWidth = 4;
export const synapseColor = '#212226';
export const outputNeuronColor = "#F2F2F2";

// Animation Delays
let repeatDelays = [0.1, 0.2, 0.3, 0.4, 0.5];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// Neurons
function AnimatedNeuron({x, y, layerIndex}) {
  let architecture = useSelector(state => state.architecture);
  let lastLayerIndex = getLastLayerNumber(architecture);
  let neuronColor = synapseColor;

  if (layerIndex == lastLayerIndex) {
    neuronColor = outputNeuronColor;
  }

  return (
    <motion.circle
      x={x} y={y} r="10" fill={neuronColor} stroke-width="3" stroke={synapseColor}
      style={{ x: x, y: y }}
      animate={{
        scale: [1, 1, 1.5, 1, 1],
        // opacity: [1, 1, 0.7, 1, 1]
      }}
      transition={{
        type: "spring",
        duration: 0.6,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: repeatDelays[getRandomInt(5)]
      }}
    />
  );
}

function Neuron({x, y, layerIndex}) {
  let architecture = useSelector(state => state.architecture);
  let lastLayerIndex = getLastLayerNumber(architecture);
  let neuronColor = synapseColor;

  if (layerIndex == lastLayerIndex) {
    neuronColor = outputNeuronColor;
  }
  return (
    <motion.circle
      x={x} y={y} r={defaultNeuronRadius} fill={neuronColor} stroke-width="3" stroke={synapseColor}
      whileHover={{ scale: 1.2 }}
    />
  );
}

export function GetNeuronStyle(props) {
    let xPos = props.xPos;
    let yPos = props.yPos;
    let isLoading = props.isLoading;
    let layerIndex = props.layerIndex;

    if (isLoading) {
      return (
        <AnimatedNeuron x={xPos} y={yPos} layerIndex={layerIndex} />
      )
    }

    return (
        <Neuron x={xPos} y={yPos} layerIndex={layerIndex}/>
    );
}


// Synapses
function AnimatedSynapse({fromX, fromY, toX, toY}) {
  return (
    <motion.line className="synapse"
      x1={fromX} y1={fromY} x2={toX} y2={toY} 
      stroke={synapseColor} strokeWidth={defaultSynapseWidth}

      animate={{
        stroke: [synapseColor, synapseColor, synapseColor, synapseColor, synapseColor],
        strokeWidth: [defaultSynapseWidth, defaultSynapseWidth-1, defaultSynapseWidth-2, defaultSynapseWidth-1, defaultSynapseWidth]
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: repeatDelays[getRandomInt(5)]
      }}
    />
  )
}


function Synapse({fromX, fromY, toX, toY}) {
  return (
    <motion.line className="synapse"
      x1={fromX} y1={fromY} x2={toX} y2={toY} 
      stroke={synapseColor} strokeWidth={defaultSynapseWidth}
      whileHover={{ strokeWidth: defaultSynapseWidth + 2 }}
    />
  )
}

export function getSynapseStyle(fromX, fromY, toX, toY, isLoading) {

  if (isLoading) {
    return (
      <AnimatedSynapse fromX={fromX} fromY={fromY} toX={toX} toY={toY} />
    )
  }

  return (
    <Synapse fromX={fromX} fromY={fromY} toX={toX} toY={toY} />
  )
}
