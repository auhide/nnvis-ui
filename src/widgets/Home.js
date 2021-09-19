
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';


const rectFill = "#D9D9D9";


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: window.screen.availWidth,
        height: window.screen.availHeight + 200,
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
                <br />
                <br />
                <br />
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
                <br />

                <SubTitle text={"Here you can..."} delay={2}/>

                <Animations/>

            </Grid>
        </Grid>
    </>
}

function Animations() { 
    return (
        <>
            <LearnAnimation />
            <DataAnimation />
            <TrainingAnimation />
        </>
    );
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

function SubTitle({ text, delay }) {

    if (typeof delay === 'undefined') {
        delay = 1.5
    }

    return (
        <motion.span
            className="homePageText"
            style={{
                color: rectFill,
                fontSize: 25,
                position: "absolute",
                textAlign: "center",
                width: "100%"
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
                delay: delay,
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
            x={"270%"}
            y={"-150%"} 
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


function TrainingAnimation({  }) {
    return (
        <>
            <Rectangle position={["-10%", "70%"]} color={"#73A2BF"} />
            <TrainCog position={["-175%", "120%"]} />

            <motion.span style={{ position: "absolute" }}
                x={"-190%"}
                y={"1000%"}

                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 6.2,
                    type: "spring",
                    duration: 0.5
                }}
            >
                <small className="homePageText">Configure And Train Them</small>
                
            </motion.span>

            <motion.span style={{ position: "absolute" }}
                x={"-440%"}
                y={"850%"}

                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 6,
                    type: "spring",
                    duration: 0.5
                }}
            >
                <b className="homePageText">CONFIG</b>
            </motion.span>
        </>
    );
}


function DataAnimation({  }) { 
    return (
        <>
            <Rectangle position={["-50%", "70%"]} color={"#F24444"} />
            <Graph position={["-320%", "150%"]} />

            <motion.span style={{ position: "absolute" }}
                x={"-810%"}
                y={"850%"}

                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 5.4,
                    type: "spring",
                    duration: 0.5
                }}
            >
                <b className="homePageText">DATA</b>
            </motion.span>

            <motion.span style={{ position: "absolute" }}
                x={"-240%"}
                y={"1000%"}

                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 5.6,
                    type: "spring",
                    duration: 0.5
                }}
            >
                <small className="homePageText">Analyze And Select Data</small>
                
            </motion.span>
        </>
    );
}


function LearnAnimation({  }) { 
    return (
        <>
            <Rectangle position={["-70%", "70%"]} color={"#A61B34"} />
            <Hat />
            <motion.span style={{ position: "absolute" }}
                x={"-750%"}
                y={"850%"}

                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 3.4,
                    type: "spring",
                    duration: 0.5
                }}
            >
                <b className="homePageText">LEARN</b>
            </motion.span>
            <motion.span style={{ position: "absolute" }}
                x={"-310%"}
                y={"1000%"}

                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 3.8,
                    type: "spring",
                    duration: 0.5
                }}
            >
                <small className="homePageText">Learn How They Work</small>
                
            </motion.span>
        </>
    );
}


function Hat() {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="91"
        height="86"
        fill="none"
        viewBox="0 0 91 86"
        x={"-325%"}
        y={"140%"}
      >
        <motion.g>
          <motion.path
            initial={{
                scale: 0
            }}
            animate={{
                scale: [0.2, 1, 0.8, 1]
            }}
            transition={{
                delay: 2.5,
                type: "spring",
                duration: 0.5
            }}
            fill="#444"
            d="M74.826 28.488v19.551c0 8.164-15.09 12.598-29.326 12.598s-29.326-4.434-29.326-12.598V28.488c0-1.361 1.172-2.52 2.666-2.52h53.32c1.493 0 2.666 1.159 2.666 2.52z"
          ></motion.path>
          <motion.path
            initial={{
                scale: 0
            }}
            animate={{
                scale: [0.2, 1, 0.8, 1]
            }}
            transition={{
                delay: 2.6,
                type: "spring",
                duration: 0.5
            }}
            fill="#292929"
            d="M74.826 28.488v19.551c0 8.164-15.09 12.598-29.326 12.598V25.968h26.66c1.493 0 2.666 1.159 2.666 2.52z"
          ></motion.path>
          <motion.path
            initial={{
                scale: 0
            }}
            animate={{
                scale: [0.2, 1, 0.8, 1]
            }}
            transition={{
                delay: 2.9,
                type: "spring",
                duration: 0.5
            }}
            fill="#6E6E6E"
            d="M91 22.844c0 1.058-.693 2.015-1.707 2.368L46.46 40.329c-.319.1-.639.151-.959.151-.32 0-.64-.05-.96-.151L1.708 25.212v-4.737L44.54 5.358c.319-.1.639-.151.959-.151.32 0 .64.05.96.15l42.833 15.118c1.014.353 1.707 1.31 1.707 2.369z"
          ></motion.path>
          <motion.path
            initial={{
                scale: 0
            }}
            animate={{
                scale: [0.2, 1, 0.8, 1]
            }}
            transition={{
                delay: 3.3,
                type: "spring",
                duration: 0.5
            }}
            fill="#5A5A5A"
            d="M91 22.844c0 1.058-.693 2.015-1.707 2.368L46.46 40.329c-.319.1-.639.151-.959.151V5.207c.32 0 .64.05.96.15l42.833 15.118c1.014.353 1.707 1.31 1.707 2.369z"
          ></motion.path>
          <motion.path
            initial={{
                scale: 0,
                opacity: 0
            }}
            animate={{
                scale: [0.2, 1, 0.8, 1],
                opacity: [0.2, 1]
            }}
            transition={{
                delay: 3.5,
                type: "spring",
                duration: 0.5
            }}
            fill="#FDBF00"
            d="M48.166 22.844c0 1.41-1.173 2.52-2.666 2.52H5.332v37.389l5.172 14.714c.48 1.31-.267 2.772-1.653 3.174-1.44.454-2.932-.252-3.359-1.562l-.16-.453c-.213 1.21-1.333 2.167-2.666 2.167-1.493 0-2.666-1.109-2.666-2.52v-55.43c0-1.41 1.173-2.519 2.666-2.519H45.5c1.493 0 2.666 1.108 2.666 2.52z"
          ></motion.path>
        </motion.g>
      </motion.svg>
    );
}

function Rectangle( { position, color } ) {
    let [x, y] = position;

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="207"
            height="237"
            fill="none"
            viewBox="0 0 207 237"
            x={x}
            y={y}

            initial={{
                scale: 0
            }}
            animate={{
                scale: [0.2, 1, 0.8, 1]
            }}
            transition={{
                delay: 2.5,
                type: "spring",
                duration: 0.5
            }}
        >
            <motion.rect
                width="204"
                height="234"
                x="1.5"
                y="1.5"
                fill={color}
                stroke="#3F4D59"
                strokeWidth="3"
                rx="18.5"

            ></motion.rect>
        </motion.svg>
    );
}


function Graph({ position }) { 
    let [x, y] = position;
    
    return (
        <motion.svg 
        x={x} y={y}
        width="77" height="68" viewBox="0 0 77 68" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <motion.g id="Group">
            <motion.g 
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 5,
                    type: "spring",
                    duration: 0.5
                }}
            id="Group_2">
            <motion.path id="Vector" d="M54.1406 15.791V24.8145C54.1406 26.0597 53.13 27.0703 51.8848 27.0703C50.6395 27.0703 49.6289 26.0597 49.6289 24.8145V15.791C49.6289 14.5458 50.6395 13.5352 51.8848 13.5352C53.13 13.5352 54.1406 14.5458 54.1406 15.791Z" fill="#FABE2C"/>
            </motion.g>
            <motion.g 
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 4.9,
                    type: "spring",
                    duration: 0.5
                }}
            id="Group_3">
            <motion.path id="Vector_2" d="M63.1641 11.2793V24.8145C63.1641 26.0597 62.1534 27.0703 60.9082 27.0703C59.663 27.0703 58.6523 26.0597 58.6523 24.8145V11.2793C58.6523 10.0341 59.663 9.02344 60.9082 9.02344C62.1534 9.02344 63.1641 10.0341 63.1641 11.2793Z" fill="#6AA9FF"/>
            </motion.g>
            <motion.g 
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 4.8,
                    type: "spring",
                    duration: 0.5
                }}
            id="Group_4">
            <motion.path id="Vector_3" d="M72.1875 6.76758V24.8145C72.1875 26.0597 71.1769 27.0703 69.9316 27.0703C68.6864 27.0703 67.6758 26.0597 67.6758 24.8145V6.76758C67.6758 5.52234 68.6864 4.51172 69.9316 4.51172C71.1769 4.51172 72.1875 5.52234 72.1875 6.76758Z" fill="#FF435B"/>
            </motion.g>
            <motion.path 
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 4.6,
                    type: "spring",
                    duration: 0.5
                }}
            id="Vector_4" d="M40.6054 2.25586V31.582L21.5058 30.3789L7.03827 20.9825C12.2177 8.34217 24.5242 0 38.3496 0C39.5948 0 40.6054 1.01063 40.6054 2.25586Z" fill="#FED843"/>
            <motion.path 
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 4.4,
                    type: "spring",
                    duration: 0.5
                }}
            id="Vector_5" d="M72.1875 33.8379C72.1875 51.784 58.2523 66.4426 40.6055 67.6006C39.8596 67.6502 39.1076 67.6758 38.3496 67.6758C32.7115 67.6758 27.2012 66.2817 22.2849 63.6258L26.7816 45.2676L40.6055 31.582H69.9317C71.1769 31.582 72.1875 32.5927 72.1875 33.8379Z" fill="#FF7B4A"/>
            <motion.path 
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 4.2,
                    type: "spring",
                    duration: 0.5
                }}
            id="Vector_6" d="M72.1875 33.8379C72.1875 51.784 58.2523 66.4426 40.6055 67.6006V31.582H69.9316C71.1769 31.582 72.1875 32.5927 72.1875 33.8379Z" fill="#FF435B"/>
            <motion.path 
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 4,
                    type: "spring",
                    duration: 0.5
                }}
            id="Vector_7" d="M40.6055 31.582C39.0781 34.2536 21.9758 64.1658 21.1299 65.6455C20.4682 66.7042 19.074 67.0216 18.0198 66.3614C7.07137 59.5035 0 47.3896 0 33.8379C0 29.6901 0.658711 25.6085 1.95809 21.7074C2.35211 20.5268 3.63043 19.8862 4.8125 20.2802C4.83671 20.2879 40.2859 31.4811 40.6055 31.582Z" fill="#7ED8F6"/>
            <motion.g 
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: [0.2, 1, 0.8, 1]
                }}
                transition={{
                    delay: 5.2,
                    type: "spring",
                    duration: 0.5
                }}
            id="Group_5">
            <motion.path id="Vector_8" d="M77 24.8145C77 26.0597 75.9894 27.0703 74.7441 27.0703H47.373C46.1278 27.0703 45.1172 26.0597 45.1172 24.8145C45.1172 23.5692 46.1278 22.5586 47.373 22.5586H74.7441C75.9894 22.5586 77 23.5692 77 24.8145Z" fill="#61729B"/>
            </motion.g>
            </motion.g>
        </motion.svg>

    );
}


function TrainCog({ position }) {
    let [x, y] = position;

    return (
        <motion.svg 
            x={x} y={y}
            width="96" height="100" viewBox="0 0 96 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.g id="Page-1">
                <motion.g 
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: [0.2, 0.8, 0.7, 1],
                        rotateZ: [0, 180, 0]
                    }}
                    transition={{
                        delay: 5.8,
                        type: "spring",
                        duration: 0.5
                    }}
                id="025---Ideas">
                    <motion.path id="Shape" d="M35.3334 11.6467L39.455 2.64667C39.7253 2.04905 40.3208 1.66548 40.9767 1.66667H55.0234C55.6759 1.66625 56.2686 2.04664 56.54 2.64L60.6617 11.64L74.885 19.8517L84.745 18.9183C85.3944 18.8562 86.0203 19.1786 86.3467 19.7433L93.39 31.945C93.706 32.4916 93.6859 33.1697 93.3384 33.6967L88 41.7883V58.2117L93.3334 66.2967C93.681 66.8237 93.701 67.5018 93.385 68.0483L86.3467 80.25C86.0225 80.8179 85.3962 81.1438 84.745 81.0833L74.885 80.15L60.6667 88.3533L56.545 97.3533C56.2736 97.9467 55.6809 98.3271 55.0284 98.3267H40.9767C40.3242 98.3271 39.7315 97.9467 39.46 97.3533L35.3384 88.3533L21.115 80.1417L11.255 81.075C10.6039 81.1355 9.97754 80.8096 9.65338 80.2417L2.61004 68.0483C2.29563 67.5008 2.31757 66.8227 2.66671 66.2967L8.00004 58.2117V41.7883L2.66671 33.7033C2.31914 33.1764 2.29913 32.4982 2.61504 31.9517L9.65338 19.75C9.97982 19.1853 10.6057 18.8629 11.255 18.925L21.115 19.8583L35.3334 11.6467Z" fill="#3B97D3"/>
                    <motion.path id="Shape_2" d="M48 23.0333V71.7667C48.0048 75.6897 45.2377 79.0699 41.391 79.84C37.5443 80.6102 33.6892 78.5558 32.1833 74.9333C30.3372 74.9378 28.5651 74.2075 27.2582 72.9036C25.9512 71.5998 25.2167 69.8295 25.2167 67.9833C25.2129 66.8688 25.4818 65.7702 26 64.7833C22.7009 64.5397 20.1489 61.7914 20.15 58.4833C20.1514 57.7034 20.2925 56.9301 20.5667 56.2C20.978 55.1592 21.6563 54.2452 22.5333 53.55L22.55 53.5333C20.9429 51.9223 20.0757 49.7171 20.1546 47.4429C20.2336 45.1687 21.2517 43.0291 22.9667 41.5333C22.7793 40.8718 22.684 40.1876 22.6833 39.5C22.6758 35.4245 25.8942 32.0736 29.9667 31.9167C29.3753 31.014 29.0517 29.9623 29.0333 28.8833C29.0196 28.8346 29.014 28.7839 29.0167 28.7333C29.0149 26.3802 30.4676 24.2708 32.6667 23.4333C32.6971 23.4148 32.7312 23.4035 32.7667 23.4L32.7833 23.3833C34.1639 22.3447 35.6115 21.3982 37.1167 20.55C48 14.4 48 23.0333 48 23.0333V23.0333Z" fill="#FB7B76"/>
                    <motion.path id="Shape_3" d="M75.4333 56.2C75.7075 56.9301 75.8487 57.7034 75.85 58.4833C75.8511 61.7914 73.2991 64.5397 70 64.7833C70.5182 65.7701 70.7871 66.8687 70.7833 67.9833C70.7833 69.8295 70.0488 71.5998 68.7418 72.9036C67.4349 74.2075 65.6628 74.9378 63.8167 74.9333C62.3108 78.5558 58.4557 80.6101 54.609 79.84C50.7623 79.0698 47.9952 75.6897 48 71.7667V23.0333C48 23.0333 48 14.4333 58.8167 20.5167C60.3418 21.3794 61.8113 22.3368 63.2167 23.3833L63.2333 23.4C65.4833 24.2087 66.9836 26.3425 66.9833 28.7333C66.9861 28.7839 66.9804 28.8346 66.9667 28.8833C66.9483 29.9623 66.6247 31.014 66.0333 31.9167C70.1058 32.0736 73.3242 35.4245 73.3167 39.5C73.316 40.1876 73.2207 40.8718 73.0333 41.5333C74.7483 43.029 75.7664 45.1687 75.8454 47.4429C75.9244 49.7171 75.0571 51.9223 73.45 53.5333L73.4667 53.55C74.3437 54.2452 75.022 55.1592 75.4333 56.2V56.2Z" fill="#FF5364"/>
                    <motion.path id="Shape_4" d="M55.0233 100H40.9767C39.6723 100 38.4876 99.2395 37.945 98.0533L34.045 89.5316L20.7433 81.8516L11.41 82.735C10.1122 82.8528 8.86366 82.208 8.20835 81.0816L1.16668 68.8816C0.531202 67.7905 0.571933 66.4328 1.27168 65.3817L6.33335 57.7117V42.2883L1.27168 34.6217C0.572717 33.5703 0.532 32.213 1.16668 31.1217L8.21001 18.9217C8.86403 17.7949 10.1127 17.1504 11.41 17.27L20.7433 18.1533L34.045 10.4733L37.945 1.95167C38.4862 0.763545 39.6711 0.000717281 40.9767 3.07433e-08H55.0233C56.3277 -0.000176569 57.5124 0.760497 58.055 1.94667L61.955 10.4683L75.2567 18.1483L84.59 17.265C85.8876 17.144 87.1373 17.788 87.7917 18.915L94.8333 31.1183C95.4662 32.2105 95.4242 33.5673 94.725 34.6183L89.6667 42.2883V57.7117L94.7283 65.3783C95.4265 66.4299 95.4672 67.7867 94.8333 68.8783L87.79 81.0783C87.136 82.2059 85.8863 82.8507 84.5883 82.73L75.255 81.8467L61.9533 89.5266L58.0533 98.0483C57.5124 99.2359 56.3283 99.9986 55.0233 100V100ZM21.115 78.475C21.4076 78.475 21.695 78.552 21.9483 78.6983L36.1667 86.91C36.4662 87.0832 36.7045 87.3453 36.8483 87.66L40.9767 96.6666H55.0233L59.145 87.6666C59.2893 87.3517 59.5282 87.0896 59.8283 86.9166L74.0517 78.705C74.3512 78.5317 74.6972 78.456 75.0417 78.4883L84.9033 79.4233L91.9467 67.2217L86.6133 59.1366C86.4314 58.8624 86.3341 58.5408 86.3333 58.2116V41.7883C86.3339 41.462 86.4294 41.1429 86.6083 40.87L91.9417 32.785L84.9033 20.5833L75.0417 21.5183C74.6971 21.5522 74.3506 21.4764 74.0517 21.3017L59.8333 13.09C59.5332 12.9171 59.2943 12.6549 59.15 12.34L55.0233 3.33333H40.9767L36.8533 12.3333C36.7095 12.648 36.4712 12.9102 36.1717 13.0833L21.9483 21.295C21.6492 21.4692 21.3029 21.545 20.9583 21.5117L11.0967 20.5833L4.05335 32.785L9.38668 40.87C9.56807 41.142 9.66544 41.4614 9.66668 41.7883V58.2116C9.66643 58.5383 9.57022 58.8576 9.39001 59.13L4.05668 67.215L11.0983 79.4167L20.9583 78.4816C21.01 78.4766 21.0633 78.475 21.115 78.475V78.475Z" fill="#9FC9D3"/>
                    <motion.g id="Group">
                        <motion.path id="Shape_5" d="M37.9333 36.4333C37.7291 36.5253 37.5071 36.5708 37.2833 36.5667C36.6145 36.5661 36.0108 36.1658 35.7499 35.55C34.8297 33.3429 32.6745 31.9039 30.2833 31.9C30.1784 31.9143 30.0724 31.9199 29.9666 31.9167C29.3753 31.014 29.0517 29.9623 29.0333 28.8833C29.2268 28.7321 29.4567 28.6344 29.6999 28.6C29.8833 28.5833 30.0999 28.5667 30.2833 28.5667C34.0139 28.5659 37.3794 30.8074 38.8166 34.25C38.9928 34.6563 38.9985 35.1163 38.8325 35.5268C38.6664 35.9373 38.3424 36.2639 37.9333 36.4333V36.4333Z" fill="#DF4D60"/>
                        <motion.path id="Shape_6" d="M29.2167 57.4C29.2167 58.3205 28.4705 59.0667 27.55 59.0667C24.9329 59.0816 22.4185 58.0494 20.5667 56.2C20.978 55.1592 21.6563 54.2452 22.5333 53.55C22.6695 53.6179 22.7934 53.708 22.9 53.8167C24.1318 55.0509 25.8062 55.7411 27.55 55.7333C28.4705 55.7333 29.2167 56.4795 29.2167 57.4V57.4Z" fill="#DF4D60"/>
                        <motion.path id="Shape_7" d="M39.85 26.3833C39.6346 26.477 39.4014 26.5225 39.1667 26.5167C38.5118 26.5153 37.9185 26.1306 37.65 25.5333C36.9898 24.1027 35.5589 23.1857 33.9833 23.1833C33.5677 23.1779 33.1548 23.2514 32.7667 23.4L32.7833 23.3833C34.1639 22.3447 35.6115 21.3982 37.1167 20.55C38.7029 21.2859 39.9696 22.5704 40.6833 24.1667C41.0631 25.009 40.6906 25.9998 39.85 26.3833V26.3833Z" fill="#DF4D60"/>
                        <motion.path id="Shape_8" d="M35.975 48.7567C33.1832 48.7551 30.5212 47.5777 28.6417 45.5133C28.2327 45.074 28.0916 44.4488 28.2721 43.8764C28.4527 43.3039 28.9271 42.8728 29.5141 42.7477C30.1011 42.6225 30.71 42.8227 31.1084 43.2717C32.315 44.6016 34.0139 45.3788 35.8091 45.4223C37.6043 45.4657 39.3388 44.7716 40.6084 43.5017C41.0296 43.0807 41.6435 42.9164 42.2187 43.0708C42.7939 43.2251 43.2431 43.6746 43.3971 44.25C43.551 44.8253 43.3863 45.439 42.965 45.86C41.1146 47.7192 38.5981 48.7621 35.975 48.7567V48.7567Z" fill="#DF4D60"/>
                        <motion.path id="Shape_9" d="M31.8917 53.3633C31.099 53.365 30.4149 52.8082 30.2556 52.0317C30.0962 51.2552 30.5058 50.474 31.235 50.1633C32.5792 49.5931 33.5096 48.34 33.6667 46.8883C33.7638 45.9729 34.5846 45.3096 35.5 45.4067C36.4154 45.5038 37.0788 46.3246 36.9817 47.24C36.6986 49.8901 35.0056 52.1805 32.555 53.2283C32.3455 53.3182 32.1197 53.3642 31.8917 53.3633V53.3633Z" fill="#DF4D60"/>
                        <motion.path id="Shape_10" d="M39.3566 73.7133C38.4362 73.7133 37.69 72.9671 37.69 72.0467C37.6776 70.6457 37.1135 69.3061 36.12 68.3183C33.8456 66.0731 33.0671 62.7191 34.12 59.7017C35.1739 56.7994 37.8254 54.7798 40.9033 54.535C41.2807 54.4932 41.6602 54.4726 42.04 54.4733C42.9604 54.4733 43.7066 55.2195 43.7066 56.14C43.7066 57.0605 42.9604 57.8067 42.04 57.8067C41.7805 57.807 41.5213 57.8209 41.2633 57.8483C39.4558 57.9614 37.8862 59.1327 37.2633 60.8333C36.6453 62.652 37.1314 64.6641 38.5116 66C40.1191 67.6096 41.0265 69.7885 41.0366 72.0633C41.0275 72.9825 40.2758 73.7207 39.3566 73.7133V73.7133Z" fill="#DF4D60"/>
                        <motion.path id="Shape_11" d="M55.8916 73.7133C54.9711 73.7133 54.225 72.9671 54.225 72.0467C54.2351 69.7719 55.1425 67.5929 56.75 65.9833C58.1287 64.6466 58.6146 62.6355 57.9983 60.8167C57.3751 59.1172 55.8065 57.9468 53.9999 57.8333C53.7408 57.8059 53.4805 57.792 53.22 57.7917C52.2995 57.7917 51.5533 57.0455 51.5533 56.125C51.5533 55.2045 52.2995 54.4583 53.22 54.4583C53.6008 54.4577 53.9814 54.4783 54.36 54.52C57.4371 54.7649 60.0876 56.7847 61.14 59.6867C62.194 62.7041 61.4154 66.0587 59.14 68.3033C58.1464 69.2911 57.5823 70.6307 57.57 72.0317C57.574 72.4783 57.3986 72.9079 57.083 73.2241C56.7675 73.5402 56.3383 73.7165 55.8916 73.7133V73.7133Z" fill="#DF4D60"/>
                    </motion.g>
                    <motion.path id="Shape_12" d="M49.6667 35.6967C48.7462 35.6967 48.0001 34.9505 48.0001 34.03C47.9982 32.8537 47.0446 31.9009 45.8684 31.9C44.9479 31.9 44.2017 31.1538 44.2017 30.2333C44.2017 29.3129 44.9479 28.5667 45.8684 28.5667C48.8848 28.5694 51.3297 31.0136 51.3334 34.03C51.3334 34.9505 50.5872 35.6967 49.6667 35.6967Z" fill="#FF5364"/>
                    <motion.path id="Shape_13" d="M66.9667 28.8833C66.9483 29.9623 66.6247 31.014 66.0334 31.9167C65.9441 31.9189 65.8549 31.9133 65.7667 31.9C63.3587 31.8887 61.1812 33.3294 60.25 35.55C59.9892 36.1658 59.3855 36.5661 58.7167 36.5667C58.4928 36.5708 58.2709 36.5253 58.0667 36.4333C57.6576 36.2639 57.3336 35.9373 57.1675 35.5268C57.0014 35.1163 57.0071 34.6563 57.1834 34.25C58.6206 30.8074 61.9861 28.5659 65.7167 28.5667C65.9 28.5667 66.1167 28.5833 66.3 28.6C66.5441 28.6311 66.7749 28.7292 66.9667 28.8833V28.8833Z" fill="#DF4D60"/>
                    <motion.path id="Shape_14" d="M75.4333 56.2C73.5815 58.0494 71.0671 59.0816 68.45 59.0667C67.5295 59.0667 66.7833 58.3205 66.7833 57.4C66.7833 56.4795 67.5295 55.7333 68.45 55.7333C70.1938 55.7411 71.8682 55.0509 73.1 53.8167C73.2066 53.708 73.3305 53.6179 73.4667 53.55C74.3437 54.2452 75.022 55.1592 75.4333 56.2V56.2Z" fill="#DF4D60"/>
                    <motion.path id="Shape_15" d="M63.2167 23.3833C62.7952 23.2277 62.3493 23.1487 61.9 23.15C60.3223 23.1452 58.888 24.0645 58.2333 25.5C57.9676 26.0996 57.3725 26.4854 56.7167 26.4833C56.4809 26.4816 56.2481 26.4305 56.0333 26.3333C55.1971 25.9547 54.8245 24.971 55.2 24.1333C55.9234 22.5266 57.2099 21.2401 58.8167 20.5167C60.3418 21.3794 61.8113 22.3368 63.2167 23.3833V23.3833Z" fill="#DF4D60"/>
                    <motion.path id="Shape_16" d="M60.025 48.7567C57.3985 48.7647 54.8778 47.7217 53.025 45.86C52.6034 45.4381 52.4389 44.8234 52.5935 44.2474C52.7481 43.6713 53.1982 43.2215 53.7743 43.0674C54.3505 42.9132 54.9651 43.0781 55.3867 43.5C56.6562 44.7699 58.3908 45.4641 60.186 45.4206C61.9811 45.3772 63.6801 44.5999 64.8867 43.27C65.285 42.821 65.894 42.6209 66.481 42.746C67.068 42.8712 67.5424 43.3023 67.7229 43.8747C67.9035 44.4471 67.7623 45.0724 67.3533 45.5117C65.4753 47.5754 62.8153 48.7532 60.025 48.7567Z" fill="#DF4D60"/>
                    <motion.path id="Shape_17" d="M64.1083 53.3633C63.8831 53.363 63.6603 53.3171 63.4533 53.2283C61.0027 52.1805 59.3097 49.8901 59.0266 47.24C58.9295 46.3246 59.5929 45.5038 60.5083 45.4067C61.4237 45.3096 62.2445 45.9729 62.3417 46.8883C62.496 48.3394 63.4231 49.5935 64.765 50.1667C65.4942 50.4773 65.9038 51.2586 65.7444 52.035C65.5851 52.8115 64.901 53.3683 64.1083 53.3667V53.3633Z" fill="#DF4D60"/>
                    <motion.path id="Shape_18" d="M46.3334 43.6933C45.4129 43.6933 44.6667 42.9471 44.6667 42.0267C44.6704 39.0102 47.1152 36.5661 50.1317 36.5633C51.0522 36.5633 51.7984 37.3095 51.7984 38.23C51.7984 39.1505 51.0522 39.8967 50.1317 39.8967C48.9554 39.8976 48.0019 40.8504 48 42.0267C48 42.9471 47.2538 43.6933 46.3334 43.6933Z" fill="#FB7B76"/>
                </motion.g>
            </motion.g>
        </motion.svg>
    );
}

