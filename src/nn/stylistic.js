
import {
    Circle,
    Line
} from 'react-konva';

// Constants - Neurons
const defaultNeuronRadius = 15;
const neuronRadiusScale = 2;
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
    const stage = e.target.getStage();
    
    e.target.attrs.radius = defaultNeuronRadius + neuronRadiusScale;
    
    stage.draw();
}

function onNeuronOut(e) {
    const stage = e.target.getStage();
    
    e.target.attrs.radius = defaultNeuronRadius;
    
    stage.draw();
}


// Synapses
export function getSynapseStyle(fromX, fromY, toX, toY) {
    return (
        <Line
        points={[
            fromX, 
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
    
    e.target.attrs.strokeWidth = defaultSynapseWidth + synapseWidthScale;

    stage.draw();
}

function onSynapseOut(e) {
    const stage = e.target.getStage();
    
    e.target.attrs.strokeWidth = defaultSynapseWidth;

    stage.draw();
}