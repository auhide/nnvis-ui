import { useState } from 'react';

import { motion } from 'framer-motion';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './Grids';
import { TutorialNetwork, neuronColor } from './TutorialNetwork';
import { EquationGenerator, GeneralEquationGenerator, NotationsGenerator } from './Formulas';


let maxStep = 12;
let minStep = 0;


export function Learn({ }) {
    let [tutorialStep, setTutorialStep] = useState(0);
    let classes = useStyles();

    return (
        <>
            <Grid container className={classes.root} spacing={1} style={{ marginTop: "-1.6%" }}>
                <Grid item xs={5}>
                    <Paper className={classes.learnPageFormulasPaper} >
                        <EquationGenerator tutorialStep={tutorialStep} />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.learnPageFormulasPaper} >
                        <NotationsGenerator tutorialStep={tutorialStep} />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.learnPageFormulasPaper} >
                        <GeneralEquationGenerator tutorialStep={tutorialStep} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.learnPageAnimPaper} style={{ height: 400 }}>
                        <ChangeStepButtons tutorialStep={tutorialStep} stepSetter={setTutorialStep} />
                        <TutorialAnimation tutorialStep={tutorialStep} />
                        <TutorialNetwork tutorialStep={tutorialStep} />
                    </Paper>
                </Grid>
            </Grid>
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
                    scale: [3, 1.5, 1, 1, 1],
                }}
                transition={{
                    type: "spring",
                    duration: 2.5,
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
    // Doing it that way, because triggering these animations at random times
    // did some bizarre stuff, not sure why :(.
    let animationsVisibility = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
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