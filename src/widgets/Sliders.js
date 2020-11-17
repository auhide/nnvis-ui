
import { 
    Slider
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';



const sliderStyles = makeStyles({
    root: {
        width: 300
    },
});

const marks = [
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
];


let updateLayers = (event, value, architecture, setter) => {
    let newArchitecture = architecture;
    console.log(value);

    for (let layersN in architecture) {
        
        if (layersN > value && architecture[layersN] != 0) {
        newArchitecture[layersN] = 0;
        } else if (layersN <= value && architecture[layersN] == 0) {
        newArchitecture[layersN] = 2;
        }

    }

    setter({...newArchitecture});
}


export function LayersSlider(architecture, setter, initLayersN) {
    const styles=sliderStyles();

    return (
        <div className={styles.root}>
            <Slider
                defaultValue={initLayersN}
                onChange={(e, value) => updateLayers(e, value, architecture, setter)}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                min={2}
                max={6}
                marks={marks}
                valueLabelDisplay="auto"
            />
        </div>
    );
}
