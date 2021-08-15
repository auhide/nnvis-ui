import { motion } from 'framer-motion';
import { synapseColor, outputNeuronColor } from '../nn/stylistic'


const neuronColor = synapseColor;


export function TutorialNetwork({ tutorialStep }) {
    let showExpectedOutputs = false;

    switch(tutorialStep) {
        case 4:
            showExpectedOutputs = true;
            break;
    }

    return (
        <>
            {/* Inputs */}
            <StaticValue x={445} y={100} value={"x"} subIndex={1} valueColor="white" />
            <StaticValue x={445} y={215} value={"x"} subIndex={2} valueColor="white" />

            {/* Activations */}
            <StaticValue x={670} y={100} value={"a"} subIndex={1} valueColor="white" />
            <StaticValue x={670} y={215} value={"a"} subIndex={2} valueColor="white" />

            {/* Outputs */}
            <StaticValue x={895} y={100} value={"o"} subIndex={1} valueColor="white" />
            <StaticValue x={895} y={215} value={"o"} subIndex={2} valueColor="white" />

            {/* Activation Weights */}
            {/* For a1 */}
            <StaticValue x={560} y={85} value={"w"} subIndex={11} supIndex={1} />
            <StaticValue x={480} y={175} value={"w"} subIndex={12} supIndex={1} />

            {/* For a2 */}
            <StaticValue x={480} y={135} value={"w"} subIndex={21} supIndex={1} />
            <StaticValue x={560} y={200} value={"w"} subIndex={22} supIndex={1} />

            {/* Activation Weights */}
            {/* For o1 */}
            <StaticValue x={780} y={85} value={"w"} subIndex={11} supIndex={2} />
            <StaticValue x={700} y={175} value={"w"} subIndex={12} supIndex={2} />

            {/* For o2 */}
            <StaticValue x={700} y={135} value={"w"} subIndex={21} supIndex={2} />
            <StaticValue x={780} y={200} value={"w"} subIndex={22} supIndex={2} />

            <OriginalOutputYs visualized={showExpectedOutputs} />

            <motion.svg
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 600 600"
            >

                {/* Hidden layer */}
                <TutorialSynapse 
                    x1={200} y1={50} 
                    x2={300} y2={50} 
                />
                <TutorialSynapse 
                    x1={200} y1={100} 
                    x2={300} y2={50} 
                />

                <TutorialSynapse 
                    x1={200} y1={50} 
                    x2={300} y2={100} 
                />
                <TutorialSynapse 
                    x1={200} y1={100} 
                    x2={300} y2={100} 
                />

                {/* Output layer */}
                <TutorialSynapse 
                    x1={300} y1={50} 
                    x2={400} y2={50} 
                />
                <TutorialSynapse 
                    x1={300} y1={100} 
                    x2={400} y2={50} 
                />

                <TutorialSynapse 
                    x1={300} y1={50} 
                    x2={400} y2={100} 
                />
                <TutorialSynapse 
                    x1={300} y1={100} 
                    x2={400} y2={100} 
                />

                {/* Input layer */}
                <TutorialNeuron x={200} y={50} />
                <TutorialNeuron x={200} y={100} />

                {/* Hidden layer */}
                <TutorialNeuron x={300} y={50} />
                <TutorialNeuron x={300} y={100} />

                {/* Output layer */}
                <TutorialNeuron x={400} y={50} isAnimated={showExpectedOutputs} destination={[445, 58]} />
                <TutorialNeuron x={400} y={100} isAnimated={showExpectedOutputs} destination={[445, 88]}/>

                <OriginalOutputNeurons visualized={showExpectedOutputs} />

            </motion.svg>
        </>
    );
}


function OriginalOutputYs({ visualized }) {
    if (visualized) {
        return (
            <>
                {/* Expected predictions */}
                {/* For y1 */}
                <StaticValue x={1000} y={120} value={"y"} subIndex={1} valueColor={neuronColor} />

                {/* For y2 */}
                <StaticValue x={1000} y={185} value={"y"} subIndex={2} valueColor={neuronColor} />
            </>
        );
    }

    return (
        <></>
    );
}


function OriginalOutputNeurons({ visualized }) {
    if (visualized) {
        return (
            <>
                {/* Expected outputs */}
                <TutorialNeuron x={445} y={58} color={outputNeuronColor} />
                <TutorialNeuron x={445} y={88} color={outputNeuronColor} />
            </>
        );
    }

    return (
        <></>
    );
}


function TutorialNeuron({ x, y, isAnimated, color, stroke, destination }) {
    if (color == null) { color = neuronColor; }
    if (stroke == null) { stroke = neuronColor; }

    if (isAnimated) {
        let [endX, endY] = destination;

        return (
            <>
                <motion.circle
                    x={x} y={y} r={10} fill={color} stroke-width="3" stroke={stroke}
                />
                <motion.circle
                    x={x} y={y} r={10} fill={color} stroke-width="3" stroke={stroke}
                    animate={{
                        x: [x, endX, x],
                        y: [y, endY, y],
                        opacity: [1, 1, 0.2],
                        scale: [1, 1, 1.2, 1, 1],
                    }}
                    transition={{
                        type: "spring",
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.7, 0.8, 0.9, 1],
                        loop: Infinity
                    }}
                />
            </>
        );
    }

    return (
        <motion.circle
            x={x} y={y} r={10} fill={color} stroke-width="3" stroke={stroke}
        />
    )
}


function TutorialSynapse({ x1, y1, x2, y2 }) {
    return (
        <motion.line
            x1={x1} y1={y1} 
            x2={x2} y2={y2} 
            fill={neuronColor} stroke-width="3" stroke={neuronColor}
        />
    )
}


function StaticValue({ x, y, value, subIndex, supIndex, valueColor }) {
    let color = neuronColor;

    if (valueColor != null) {
        color = valueColor;
    }

    if (supIndex != null && subIndex != null) {
        return (
            <motion.div style={{ position: "absolute", color: color }}
                x={x} y={y}
            >
                {value}<sup>{supIndex}</sup><sub>{subIndex}</sub>
            </motion.div>
        );
    }

    if (subIndex != null){
        return (
            <motion.div style={{ position: "absolute", color: color }}
                x={x} y={y}
            >
                {value}<sub>{subIndex}</sub>
            </motion.div>
        );
    }

    if (subIndex == null && supIndex == null) {
        return (
            <motion.div style={{ position: "absolute", color: color }}
                x={x} y={y}
            >
                {value}
            </motion.div>
        );
    }

}
