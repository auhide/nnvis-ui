import { useState } from 'react';

import { motion } from 'framer-motion';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded';

import { TutorialNetwork } from './TutorialNetwork';
import { EquationGenerator } from './Formulas';


let maxStep = 3;
let minStep = 0;


export function Learn({ }) {
    let [tutorialStep, setTutorialStep] = useState(0);

    return (
        <>
            {tutorialStep}
            <ChangeStepButtons tutorialStep={tutorialStep} stepSetter={setTutorialStep} />
            <EquationGenerator tutorialStep={tutorialStep} />
            <TutorialAnimation tutorialStep={tutorialStep} />
            <TutorialNetwork />
        </>
    )
}


function MovingValue({ startPos, endPos, label, index, isVisible }) {
    let [startX, startY] = startPos;
    let [endX, endY] = endPos;

    if (!isVisible) {
        return <></>
    }

    return (
        <>
            <motion.div style={{ position: "absolute" }}
                x={startX} y={startY}
                animate={{
                    x: endX, y: endY, 
                    opacity: 0.2,
                    scale: [2, 1.5, 1, 1, 1],
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
        </>
    );
}


function TutorialAnimation({ tutorialStep }) {
    let chosenAnimation = null;
    // Doing it that way, because triggering these animations at random times
    // did some random stuff, not sure why :(.
    let animationsVisibility = {
        0: false,
        1: false,
        2: false,
        3: false,
    }

    animationsVisibility[tutorialStep] = true;
    
    return (
        <>
            <>
                <MovingValue 
                    startPos={[445, 100]} endPos={[670, 100]} 
                    label={"x"} index={1} isVisible={animationsVisibility[0]}
                />
                <MovingValue 
                    startPos={[445, 215]} endPos={[670, 100]} 
                    label={"x"} index={2} isVisible={animationsVisibility[0]}
                />
            </>
            
            <>
                <MovingValue 
                    startPos={[445, 100]} endPos={[670, 215]} 
                    label={"x"} index={1} isVisible={animationsVisibility[1]}
                />
                <MovingValue 
                    startPos={[445, 215]} endPos={[670, 215]} 
                    label={"x"} index={2} isVisible={animationsVisibility[1]}
                />
            </>

            <>
                <MovingValue 
                    startPos={[670, 100]} endPos={[895, 100]} 
                    label={"a"} index={1} isVisible={animationsVisibility[2]}
                />
                <MovingValue 
                    startPos={[670, 215]} endPos={[895, 100]} 
                    label={"a"} index={2} isVisible={animationsVisibility[2]}
                />
            </>
            <>
                <MovingValue 
                    startPos={[670, 100]} endPos={[895, 215]} 
                    label={"a"} index={1} isVisible={animationsVisibility[3]}
                />
                <MovingValue 
                    startPos={[670, 215]} endPos={[895, 215]} 
                    label={"a"} index={2} isVisible={animationsVisibility[3]}
                />
            </>
        </>
    );
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