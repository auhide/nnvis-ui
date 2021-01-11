
import { useState, useEffect, triggerRender } from 'react';

import { motion } from 'framer-motion';
// Constants - Neurons
const defaultNeuronRadius = 15;
const neuronRadiusScale = 2;
const neuronsColor = '#212226';

// Constants - Synapses
const defaultSynapseWidth = 4;
const synapseWidthScale = 2;
const synapseColor = '#212226';

// Animation Delays
let repeatDelays = [0.1, 0.2, 0.3, 0.4, 0.5];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// Neurons
function AnimatedNeuron({x, y}) {
  return (
    <motion.circle
      x={x} y={y} r="10" fill={synapseColor} stroke-width="3" 
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

function Neuron({x, y}) {
  return (
    <motion.circle
      x={x} y={y} r={defaultNeuronRadius} fill={synapseColor} stroke-width="3" 
      whileHover={{ scale: 1.2 }}
    />
  );
}

export function GetNeuronStyle(props) {
    let xPos = props.xPos;
    let yPos = props.yPos;
    let isLoading = props.isLoading;

    if (isLoading) {
      return (
        <AnimatedNeuron x={xPos} y={yPos} />
      )
    }

    return (
        <Neuron x={xPos} y={yPos} />
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
