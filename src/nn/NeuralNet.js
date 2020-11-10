import { 
    Stage, 
    Layer, 
    Rect, 
    Text, 
    Circle, 
    Line } from 'react-konva';


export let nnData = {};

export let drawLayers = (layersN, neuronsN) => {
  let xPos = 100;
  let neurons = [];

  for (let i = 0; i < layersN; i++) {
    neurons.push(...drawNeurons(i, neuronsN, xPos));
    xPos += 200;
  }
  
  return neurons;
}

export let drawNeurons = (layerIndex, neuronsN, xPos) => {
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

export let drawSynapses = () => {
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

export let singleNeuronSynapses = (layer, neuron) => {
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

export let drawNeuralNet = (layersN, neuronsN) => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {drawLayers(layersN, neuronsN)}
        {drawSynapses()}
      </Layer>
    </Stage>
  )
}

export let setLayerCustom = (layersSetter, value) => {
  nnData = {};
  return layersSetter(value);
};

export let setNeuronsCustom = (neuronsN, neuronsSetter, change) => {
  nnData = {};
  let minNeurons = 2;
  let maxNeurons = 6;
  neuronsN = change(neuronsN);

  if (neuronsN < minNeurons){
    return neuronsSetter(minNeurons);
  }

  if (neuronsN > maxNeurons){
    return neuronsSetter(maxNeurons);
  }

  return neuronsSetter(change);
};