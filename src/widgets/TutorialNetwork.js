import { motion } from 'framer-motion';
import { synapseColor, outputNeuronColor } from '../nn/stylistic'


const neuronColor = synapseColor;



export function TutorialNetwork({ tutorialStep }) {

    let currentOutputAnimationLabels = <></>;
    let currentOutputAnimation = <></>;

    switch(tutorialStep) {
        // For error calculation
        case 4:
            currentOutputAnimationLabels = <> 
                <OriginalOutputY visualized={true} position={[1000, 120]} index={1} />
                <OriginalOutputY visualized={true} position={[1000, 185]} index={2} />
            </>;
            currentOutputAnimation = <>
                <AnimatedNeuron x={400} y={50} destination={[445, 58]} 
                    times={[0, 0.7, 0.8, 0.9, 1]} 
                    scale = {[1, 1, 1.2, 1, 1]}
                />
                <TutorialNeuron x={400} y={50} />
                <AnimatedNeuron x={400} y={100} destination={[445, 88]} 
                    times={[0, 0.7, 0.8, 0.9, 1]} 
                    scale = {[1, 1, 1.2, 1, 1]}
                />
                <TutorialNeuron x={400} y={100} />

                {/* y1 */}
                <OriginalOutputNeuron visualized={true} position={[445, 58]} />
                {/* y2 */}
                <OriginalOutputNeuron visualized={true} position={[445, 88]} />
            </>

            break;
        
        // For 2nd layer w11 backprop
        case 5:
            currentOutputAnimationLabels = <> 
                <OriginalOutputY visualized={true} position={[1000, 120]} index={1} />
                <OriginalOutputY visualized={true} position={[1000, 185]} index={2} /> 
            </>;

            currentOutputAnimation = <> 
                {/* Updated synapse animation */}
                <AnimatedSynapse 
                    x1={300} y1={50} 
                    x2={400} y2={50} 
                /> 

                {/* y1 to o1 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={58} destination={[400, 50]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />

                {/* o1 to w11 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={50} destination={[350, 50]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* a1 to w11 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={50} destination={[350, 50]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                <TutorialNeuron x={400} y={50} /> 
                <TutorialNeuron x={400} y={100} />

                {/* y1 */}
                <OriginalOutputNeuron visualized={true} position={[445, 58]} />
                {/* y2 */}
                <OriginalOutputNeuron visualized={true} position={[445, 88]} />
            </>;
            break;
        
        // 2nd Layer - w12
        case 6:
            currentOutputAnimationLabels = <> 
                <OriginalOutputY visualized={true} position={[1000, 120]} index={1} />
                <OriginalOutputY visualized={true} position={[1000, 185]} index={2} /> 
            </>;

            currentOutputAnimation = <> 

                {/* y1 to o1 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={58} destination={[400, 50]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />

                {/* o1 to w12 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={50} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* a2 to w11 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={100} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                <TutorialNeuron x={400} y={50} /> 
                <TutorialNeuron x={400} y={100} />

                {/* y1 */}
                <OriginalOutputNeuron visualized={true} position={[445, 58]} />
                {/* y2 */}
                <OriginalOutputNeuron visualized={true} position={[445, 88]} />

                {/* Updated Synapse */}
                <AnimatedSynapse 
                    x1={300} y1={100} 
                    x2={400} y2={50} 
                />
            </>;
            break;

        // 2nd Layer - w21
        case 7:
            currentOutputAnimationLabels = <> 
                <OriginalOutputY visualized={true} position={[1000, 120]} index={1} />
                <OriginalOutputY visualized={true} position={[1000, 185]} index={2} /> 
            </>;

            currentOutputAnimation = <> 
                <AnimatedSynapse 
                    x1={300} y1={50} 
                    x2={400} y2={100} 
                />

                {/* y2 to o2 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={88} destination={[400, 100]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />

                {/* o2 to w21 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={100} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* a1 to w21 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={50} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                <TutorialNeuron x={400} y={50} /> 
                <TutorialNeuron x={400} y={100} />

                {/* y1 */}
                <OriginalOutputNeuron visualized={true} position={[445, 58]} />
                {/* y2 */}
                <OriginalOutputNeuron visualized={true} position={[445, 88]} />

            </>;
            break;

        // For 2nd layer w11 backprop
        case 8:
            currentOutputAnimationLabels = <> 
                <OriginalOutputY visualized={true} position={[1000, 120]} index={1} />
                <OriginalOutputY visualized={true} position={[1000, 185]} index={2} /> 
            </>;

            currentOutputAnimation = <> 
                {/* y2 to o2 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={88} destination={[400, 100]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />

                {/* o2 to w22 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={100} destination={[350, 100]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* a2 to w22 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={100} destination={[350, 100]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                <TutorialNeuron x={400} y={50} /> 
                <TutorialNeuron x={400} y={100} />

                {/* y1 */}
                <OriginalOutputNeuron visualized={true} position={[445, 58]} />
                {/* y2 */}
                <OriginalOutputNeuron visualized={true} position={[445, 88]} />

                <AnimatedSynapse 
                    x1={300} y1={100} 
                    x2={400} y2={100} 
                />
            </>;
            break;

        // For 1st layer w11 backprop
        case 9:
            currentOutputAnimationLabels = <> 
                <OriginalOutputY visualized={true} position={[1000, 120]} index={1} />
                <OriginalOutputY visualized={true} position={[1000, 185]} index={2} /> 
            </>;

            currentOutputAnimation = <> 
                <AnimatedSynapse 
                    x1={200} y1={50} 
                    x2={300} y2={50} 
                />

                {/* y2 to o2 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={88} destination={[400, 100]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />
                {/* y1 to o1 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={58} destination={[400, 50]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />

                {/* o2 to w21 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={100} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* a1 to w21 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={50} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* o1 to w11 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={50} destination={[350, 50]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* a1 to w11 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={50} destination={[350, 50]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* a1 to w11^1 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={50} destination={[250, 50]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* x1 to w11^1 */}
                <AnimatedNeuron 
                    color={neuronColor} x={200} y={50} destination={[250, 50]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                <TutorialNeuron x={400} y={50} /> 
                <TutorialNeuron x={400} y={100} />

                {/* y1 */}
                <OriginalOutputNeuron visualized={true} position={[445, 58]} />
                {/* y2 */}
                <OriginalOutputNeuron visualized={true} position={[445, 88]} />
            </>;
            break;

        // For 1st layer w12 backprop
        case 10:
            currentOutputAnimationLabels = <> 
                <OriginalOutputY visualized={true} position={[1000, 120]} index={1} />
                <OriginalOutputY visualized={true} position={[1000, 185]} index={2} /> 
            </>;

            currentOutputAnimation = <> 
                {/* y2 to o2 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={88} destination={[400, 100]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />
                {/* y1 to o1 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={58} destination={[400, 50]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />

                {/* o2 to w21 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={100} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* a1 to w21 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={50} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* o1 to w11 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={50} destination={[350, 50]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* a1 to w11 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={50} destination={[350, 50]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* a1 to w12^1 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={50} destination={[250, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* x1 to w12^1 */}
                <AnimatedNeuron 
                    color={neuronColor} x={200} y={100} destination={[250, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                <TutorialNeuron x={400} y={50} /> 
                <TutorialNeuron x={400} y={100} />

                {/* y1 */}
                <OriginalOutputNeuron visualized={true} position={[445, 58]} />
                {/* y2 */}
                <OriginalOutputNeuron visualized={true} position={[445, 88]} />

                <AnimatedSynapse 
                    x1={200} y1={100} 
                    x2={300} y2={50} 
                />
            </>;
            break;

        // For 1st layer w21 backprop
        case 11:
            currentOutputAnimationLabels = <> 
                <OriginalOutputY visualized={true} position={[1000, 120]} index={1} />
                <OriginalOutputY visualized={true} position={[1000, 185]} index={2} /> 
            </>;

            currentOutputAnimation = <> 
                <AnimatedSynapse 
                    x1={200} y1={50} 
                    x2={300} y2={100} 
                />

                {/* y2 to o2 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={88} destination={[400, 100]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />
                {/* y1 to o1 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={58} destination={[400, 50]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />

                {/* o2 to w22 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={100} destination={[350, 100]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* a2 to w22 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={100} destination={[350, 100]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* o1 to w12 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={50} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* a2 to w12 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={100} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* a2 to w21^1 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={100} destination={[250, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* x1 to w21^1 */}
                <AnimatedNeuron 
                    color={neuronColor} x={200} y={50} destination={[250, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                <TutorialNeuron x={400} y={50} /> 
                <TutorialNeuron x={400} y={100} />

                {/* y1 */}
                <OriginalOutputNeuron visualized={true} position={[445, 58]} />
                {/* y2 */}
                <OriginalOutputNeuron visualized={true} position={[445, 88]} />
            </>;
            break;
        
        // For 1st layer w22 backprop
        case 12:
            currentOutputAnimationLabels = <> 
                <OriginalOutputY visualized={true} position={[1000, 120]} index={1} />
                <OriginalOutputY visualized={true} position={[1000, 185]} index={2} /> 
            </>;

            currentOutputAnimation = <> 

                {/* y2 to o2 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={88} destination={[400, 100]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />
                {/* y1 to o1 */}
                <AnimatedNeuron 
                    color={outputNeuronColor} x={445} y={58} destination={[400, 50]} 
                    times={[0, 0.9, 0.95, 1, 1]}
                    scale={[1, 1, 1.2, 1, 1]}
                />

                {/* o2 to w22 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={100} destination={[350, 100]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* a2 to w22 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={100} destination={[350, 100]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* o1 to w12 */}
                <AnimatedNeuron 
                    color={neuronColor} x={400} y={50} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* a2 to w12 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={100} destination={[350, 75]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                {/* a2 to w22^1 */}
                <AnimatedNeuron 
                    color={neuronColor} x={300} y={100} destination={[250, 100]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />
                {/* x2 to w22^1 */}
                <AnimatedNeuron 
                    color={neuronColor} x={200} y={100} destination={[250, 100]} 
                    times={[0, 0.7, 0.8, 0.9, 1]}
                    scale={[1, 0.5, 1.2, 0.5, 1]}
                />

                <TutorialNeuron x={400} y={50} /> 
                <TutorialNeuron x={400} y={100} />

                {/* y1 */}
                <OriginalOutputNeuron visualized={true} position={[445, 58]} />
                {/* y2 */}
                <OriginalOutputNeuron visualized={true} position={[445, 88]} />
                
                <AnimatedSynapse 
                    x1={200} y1={100} 
                    x2={300} y2={100} 
                />

            </>;
            break;

        default:
            currentOutputAnimation = <> 
                <TutorialNeuron x={400} y={50} /> 
                <TutorialNeuron x={400} y={100} />
            </>;
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
            
            {currentOutputAnimationLabels}

            <motion.svg
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 600 200"
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
                
                {/* Output layer */}
                {currentOutputAnimation}

                {/* Input layer */}
                <TutorialNeuron x={200} y={50} />
                <TutorialNeuron x={200} y={100} />

                {/* Hidden layer */}
                <TutorialNeuron x={300} y={50} />
                <TutorialNeuron x={300} y={100} />


            </motion.svg>
        </>
    );
}


function OriginalOutputY({ visualized, position, index }) {
    let [x, y] = position;

    if (visualized) {
        return (
            <>
                <StaticValue x={x} y={y} value={"y"} subIndex={index} valueColor={neuronColor} />
            </>
        );
    }

    return (
        <></>
    );
}


function OriginalOutputNeuron({ visualized, position }) {
    let [x, y] = position;

    if (visualized) {
        return (
            <>
                <TutorialNeuron x={x} y={y} color={outputNeuronColor} />
            </>
        );
    }

    return (
        <></>
    );
}


function TutorialNeuron({ x, y, color, stroke }) {
    if (color == null) { color = neuronColor; }
    if (stroke == null) { stroke = neuronColor; }

    return (
        <motion.circle
            x={x} y={y} r={10} fill={color} stroke-width="3" stroke={stroke}
        />
    )
}


function AnimatedNeuron({ x, y, color, stroke, destination, times, scale }) {
    if (color == null) { color = neuronColor; }
    if (stroke == null) { stroke = neuronColor; }

    let [endX, endY] = destination;

    return (
        <>
            <motion.circle
                x={x} y={y} r={10} fill={color} stroke-width="3" stroke={stroke}
                animate={{
                    x: [x, endX, x],
                    y: [y, endY, y],
                    opacity: [1, 1, 0.2],
                    scale: scale,
                }}
                transition={{
                    type: "spring",
                    duration: 2,
                    ease: "easeInOut",
                    times: times,
                    loop: Infinity
                }}
            />
        </>
    );
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

function AnimatedSynapse({ x1, y1, x2, y2 }) {
    return (
        <motion.line
            x1={x1} y1={y1} 
            x2={x2} y2={y2} 
            stroke-width="3" stroke={neuronColor}
            animate={{
                strokeWidth: ["1", "2", "10", "3", "1"],
                opacity: [1, 1, 0.5, 1, 1]
            }}
            transition={{
                type: "spring",
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.7, 0.8, 0.9, 1],
                loop: Infinity
            }}
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
