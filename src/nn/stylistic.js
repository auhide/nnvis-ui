
import {
    Circle
} from 'react-konva';


export function getNeuronStyle(xPos, yPos) {
    return <Circle
        x={xPos} y={yPos} radius={15} fill="black" onMouseOver={onNeuronHover}
    />;
}

function onNeuronHover(e) {
    console.log(e.target.attrs.radius);
}
