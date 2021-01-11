
import {
    Circle,
    Line
} from 'react-konva';

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



function AnimatedNeuron({x, y}) {
  return (
    <motion.circle
      x={x} y={y} r="10" stroke="black" stroke-width="3" 
      style={{ x: x, y: y }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["0%", "20%", "50%", "50%", "20%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
    />
  );
}

function Neuron({x, y}) {
  return (
    <motion.circle
      x={x} y={y} r={defaultNeuronRadius} stroke="black" stroke-width="3" 
      
    />
  );
}


// Neurons
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

function Synapse({fromX, fromY, toX, toY}) {
  return (
    <motion.line x1={fromX} y1={fromY} x2={toX} y2={toY} stroke="black" strokeWidth={defaultSynapseWidth}/>
  )
}

// Synapses
export function getSynapseStyle(fromX, fromY, toX, toY) {

    return (
      <Synapse fromX={fromX} fromY={fromY} toX={toX} toY={toY} />
    )
}
