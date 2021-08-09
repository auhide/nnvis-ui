import { motion, useAnimation } from 'framer-motion';
import Button from '@material-ui/core/Button';


const neuronColor = '#212226';


export function Learn({ }) {
    const controls = useAnimation();

    return (
        <>
            <Button variant="contained" onClick={
                () => controls.start({
                    x: 500
                })
            }>Default</Button>
            
            {/* Activation 1 moving Xs*/}
            <MovingValue 
                startPos={[445, 100]} endPos={[670, 100]} 
                label={"x"} index={1}
            />
            <MovingValue 
                startPos={[445, 215]} endPos={[670, 100]} 
                label={"x"} index={2}
            />

            {/* Activation 2 moving Xs */}
            <MovingValue 
                startPos={[445, 100]} endPos={[670, 215]} 
                label={"x"} index={1}
            />
            <MovingValue 
                startPos={[445, 215]} endPos={[670, 215]} 
                label={"x"} index={2}
            />
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

            <motion.svg
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 600 600"
            >
                {/* Input layer */}
                <TutorialNeuron x={200} y={50} />
                <TutorialNeuron x={200} y={100} />

                {/* Hidden layer */}
                <TutorialSynapse 
                    x1={200} y1={50} 
                    x2={300} y2={50} 
                />
                <TutorialSynapse 
                    x1={200} y1={100} 
                    x2={300} y2={50} 
                />
                <TutorialNeuron x={300} y={50} />

                <TutorialSynapse 
                    x1={200} y1={50} 
                    x2={300} y2={100} 
                />
                <TutorialSynapse 
                    x1={200} y1={100} 
                    x2={300} y2={100} 
                />
                <TutorialNeuron x={300} y={100} />

                {/* Output layer */}
                <TutorialSynapse 
                    x1={300} y1={50} 
                    x2={400} y2={50} 
                />
                <TutorialSynapse 
                    x1={300} y1={100} 
                    x2={400} y2={50} 
                />
                <TutorialNeuron x={400} y={50} />

                <TutorialSynapse 
                    x1={300} y1={50} 
                    x2={400} y2={100} 
                />
                <TutorialSynapse 
                    x1={300} y1={100} 
                    x2={400} y2={100} 
                />
                <TutorialNeuron x={400} y={100} />

                    
            </motion.svg>
        </>
    )
}


function TutorialNeuron({ x, y }) {
    return (
        <motion.circle
            x={x} y={y} r={10} fill={neuronColor} stroke-width="3" stroke={neuronColor}
            // whileHover={{ scale: 1.1 }} 
            // animate={{
            //     scale: [1, 1, 1.1, 1, 1],
            // }}
            // transition={{
            //     type: "spring",
            //     duration: 0.6,
            //     ease: "easeInOut",
            //     times: [0, 0.2, 0.5, 0.8, 1],
            //     loop: Infinity
            // }}
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


function MovingValue({ startPos, endPos, label, index }) {
    let [startX, startY] = startPos;
    let [endX, endY] = endPos;

    return (
        <>
            <motion.div style={{ position: "absolute" }}
                x={startX} y={startY}
                animate={{x: endX, y: endY, opacity: 0.2}}
                transition={{
                    type: "spring",
                    duration: 2.0,
                    ease: "easeInOut",
                    times: [0, 0.4, 0.7, 0.8, 1],
                    loop: Infinity
                }}
            >
                {label}<sub>{index}</sub>
            </motion.div>

            <motion.div style={{ position: "absolute" }}
                x={startX} y={startY}
            >
                {label}<sub>{index}</sub>
            </motion.div>
        </>
    );
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