
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';


const rectFill = "#D9D9D9";


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: window.screen.availWidth,
        height: window.screen.availHeight,
        background: "linear-gradient(to bottom, #3F4D59,#73A2BF)"
    },
    firstPaper: {
        alignItems: "center",
        justify: "center"
    },
}));


export function Home({  }) { 
    const classes = useStyles();

    return <>
        <Grid container className={classes.root}>

            <Grid item xs={12} className={classes.firstPaper}>
                <Title text={"Welcome to Neuroad"} />
                <PaveText />


                {/* First path */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={600}
                    x={-100}
                    y={100} 
                >
                    <CustomPolygon position={[100, 100]} points={"20,20 150,20 200,6 75,5"} delay={0} />
                    <CustomPolygon position={[150, 80]} points={"20,20 150,20 225,6 110,5"} delay={0.2}/>
                    <CustomPolygon position={[250, 60]} points={"20,20 150,20 225,6 110,5"} delay={0.4}/>
                    <CustomPolygon position={[400, 60]} points={"20,20 150,20 225,6 110,5"} delay={0.6}/>
                    <motion.circle/>

                </motion.svg>

                {/* Second path */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={600}
                    x={-250}
                    y={65} 
                >
                    <CustomPolygon position={[100, 100]} points={"10,18 150,20 200,6 75,5"} delay={0.8}/>
                    <CustomPolygon position={[150, 80]} points={"20,20 150,20 225,6 110,5"} delay={1}/>
                    <CustomPolygon position={[250, 60]} points={"20,20 150,20 225,6 110,5"} delay={1.2}/>
                    <CustomPolygon position={[400, 60]} points={"20,20 150,20 225,6 110,5"} delay={1.4}/>

                </motion.svg>
                <CustomNeuralNetAnim />
            </Grid>
        </Grid>
    </>
}


function Title({ text }) { 
    return (
        <>
            <motion.h1 
                className="homePageText"
                initial={{
                    scale: 0.2,
                    opacity: 0.2
                }}
                animate={{
                    scale: 2,
                    opacity: 1,
                    textShadow: 5,
                    color: ["#3F4D59", rectFill]
                }}
                transition={{
                    type: "spring",
                    duration: .8,
                    ease: "easeIn",
                    times: [0, 0.4, 0.7, 0.8, 1],
                }}
                whileHover={{
                    scale: 2.05
                }}

            >{text}</motion.h1>

        </>
    )
}


function PaveText({ }) {
    return (
        <>
            <SubTitle text={"Pave Your Road Towards Neural Networks"}/>
        </>
    )
}

function SubTitle({ text }) {

    return (
        <motion.span
            className="homePageText"
            style={{
                color: rectFill,
                fontSize: 25,
                position: "absolute",
                textAlign: "center"
            }}
            initial={{
                scale: 0.5,
                opacity: 0
            }}
            animate={{
                scale: 1,
                opacity: 1
            }}
            transition={{
                delay: 1.5,
                type: "spring",
                duration: .8,
            }}
        >
            {text}
        </motion.span>
    )
}


function CustomPolygon({ position, points, delay}) {
    let [x, y] = position;
    return (
        <motion.polygon
            x={x}
            y={y}
            points={points}
            fill={rectFill}
            initial={{
                rotateX: 20
            }}
            animate={{
                rotateX: [50, 0],
                fill: ["#3F4D59", rectFill]
            }}
            transition={{
                delay: delay,
                type: "spring",
                duration: 0.8,
            }}
        />
    )
}


function CustomNeuralNetAnim() {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            x={400}
            y={-150} 
        >
            {/* Synapses */}
            <motion.line 
                x1={50}
                y1={50}
                x2={100}
                y2={50}
                stroke={rectFill}
                
                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 1.8,
                    type: "spring",
                    duration: 0.5
                }}
            />
            <motion.line 
                x1={50}
                y1={100}
                x2={100}
                y2={50}
                stroke={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 1.8,
                    type: "spring",
                    duration: 0.5
                }}
            />

            <motion.line 
                x1={50}
                y1={50}
                x2={100}
                y2={100}
                stroke={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 1.9,
                    type: "spring",
                    duration: 0.5
                }}
            />
            <motion.line 
                x1={50}
                y1={100}
                x2={100}
                y2={100}
                stroke={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 1.9,
                    type: "spring",
                    duration: 0.5
                }}
            />

            <motion.line 
                x1={100}
                y1={50}
                x2={150}
                y2={75}
                stroke={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 2.1,
                    type: "spring",
                    duration: 0.5
                }}
            />
            <motion.line 
                x1={100}
                y1={100}
                x2={150}
                y2={75}
                stroke={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 2.1,
                    type: "spring",
                    duration: 0.5
                }}
            />

            {/* First two neurons */}
            <motion.circle 
                x={50}
                y={50}
                stroke={"black"}
                r={10}
                fill={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 1.7,
                    type: "spring",
                    duration: 0.5
                }}
            />

            <motion.circle 
                x={50}
                y={100}
                stroke={"black"}
                r={10}
                fill={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 1.7,
                    type: "spring",
                    duration: 0.5
                }}
            />

            {/* Second two neurons */}
            <motion.circle 
                x={100}
                y={50}
                stroke={"black"}
                r={10}
                fill={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 2,
                    type: "spring",
                    duration: 0.5
                }}
            />
            <motion.circle 
                x={100}
                y={100}
                stroke={"black"}
                r={10}
                fill={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 2,
                    type: "spring",
                    duration: 0.5
                }}
            />

            {/* Last neuron */}
            <motion.circle 
                x={150}
                y={75}
                stroke={"black"}
                r={10}
                fill={rectFill}

                initial={{
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    scale: 1,
                    opacity: 1

                }}
                transition={{
                    delay: 2.2,
                    type: "spring",
                    duration: 0.5
                }}
            />

        </motion.svg>
    );
}
