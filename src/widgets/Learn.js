import { useState } from 'react';

import { motion, useAnimation } from 'framer-motion';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded';


import { TutorialNetwork } from './TutorialNetwork';


let maxStep = 3;
let minStep = 0;


export function Learn({ }) {
    let [tutorialStep, setTutorialStep] = useState(0);

    return (
        <>
            {tutorialStep}
            <ChangeStepButtons tutorialStep={tutorialStep} stepSetter={setTutorialStep} />
            <TutorialAnimation tutorialStep={tutorialStep} />
            <TutorialNetwork />
        </>
    )
}


function MovingValue({ startPos, endPos, label, index }) {
    let [startX, startY] = startPos;
    let [endX, endY] = endPos;

    return (
        <>
            <motion.div style={{ position: "absolute" }}
                x={startX} y={startY}
                animate={{
                    x: endX, y: endY, 
                    opacity: 0.2,
                    scale: [2, 1.5, 1, 1, 1]
                }}
                transition={{
                    type: "spring",
                    duration: 2,
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


function TutorialAnimation({ tutorialStep }) {

    switch (tutorialStep) {
        case 0:
            return (
                <>
                    <MovingValue 
                        startPos={[445, 100]} endPos={[670, 100]} 
                        label={"x"} index={1}
                    />
                    <MovingValue 
                        startPos={[445, 215]} endPos={[670, 100]} 
                        label={"x"} index={2}
                    />
                </>
            );
        case 1:
            return (
                <>
                    <MovingValue 
                        startPos={[445, 100]} endPos={[670, 215]} 
                        label={"x"} index={1}
                    />
                    <MovingValue 
                        startPos={[445, 215]} endPos={[670, 215]} 
                        label={"x"} index={2}
                    />
                </>
            );
        case 2:
            return (
                <>
                    <MovingValue 
                        startPos={[670, 100]} endPos={[895, 100]} 
                        label={"a"} index={1}
                    />
                    <MovingValue 
                        startPos={[670, 215]} endPos={[895, 100]} 
                        label={"a"} index={2}
                    />
                </>
            );
        case 3:
            return (
                <>
                    <MovingValue 
                        startPos={[670, 100]} endPos={[895, 215]} 
                        label={"a"} index={1}
                    />
                    <MovingValue 
                        startPos={[670, 215]} endPos={[895, 215]} 
                        label={"a"} index={2}
                    />
                </>
            );
        default:
            return <></>;
    }
}


function ChangeStepButtons({ tutorialStep, stepSetter }) {
    return (
        <>
            <br />
            <IconButton onClick={() => decrementStep(tutorialStep, stepSetter)} aria-label="arrow-backward">
                <ArrowBackIosRounded />
            </IconButton>

            <IconButton onClick={() => incrementStep(tutorialStep, stepSetter)} aria-label="arrow-forward">
                <ArrowForwardIosRounded />
            </IconButton>
        </>
    );
}


function incrementStep(currentStep, stepSetter) {
    
    if (currentStep < maxStep) {
        stepSetter(++currentStep);
    }
}


function decrementStep(currentStep, stepSetter) {
    
    if (currentStep > minStep) {
        stepSetter(--currentStep);
    }
}