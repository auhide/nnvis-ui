
import {
    Circle,
    Line
} from 'react-konva';

// Constants - Neurons
const defaultNeuronRadius = 15;
const neuronRadiusScale = 5;
const neuronsColor = "black"

// Constants - Synapses
const defaultSynapseWidth = 4;
const synapseWidthScale = 2;
const synapseColor = "black";

// Neurons
export function getNeuronStyle(xPos, yPos) {
    return <Circle
    x={xPos} y={yPos} radius={15} fill={neuronsColor} 
    onMouseEnter={onNeuronOver} onMouseLeave={onNeuronOut}
    />;
}

function onNeuronOver(e) {
    console.log(e)
    const stage = e.target.getStage();
    const container = e.target.getStage().container();
    
    e.target.attrs.radius = defaultNeuronRadius + neuronRadiusScale;
    container.style.cursor = "pointer";
    
    stage.draw();
}

function onNeuronOut(e) {
    const stage = e.target.getStage();
    const container = e.target.getStage().container();
    
    container.style.cursor = "default";
    e.target.attrs.radius = defaultNeuronRadius;
    
    stage.draw();
}


// Synapses
export function getSynapseStyle(fromX, fromY, toX, toY) {
    return (
        <Line
        points={[fromX, 
            fromY,
            toX,
            toY]}
            tension={0.5}
            closed
            stroke={synapseColor}
            strokeWidth={defaultSynapseWidth}
            onMouseEnter={onSynapseOver} onMouseLeave={onSynapseOut}
            />
            )
        }
        
function onSynapseOver(e) {
    const stage = e.target.getStage();
    const container = e.target.getStage().container();
    
    // container.style.cursor = "default";
    e.target.attrs.strokeWidth = defaultSynapseWidth + synapseWidthScale;

    stage.draw();
}

function onSynapseOut(e) {
    const stage = e.target.getStage();
    const container = e.target.getStage().container();
    
    // container.style.cursor = "pointer";
    e.target.attrs.strokeWidth = defaultSynapseWidth;

    stage.draw();
}