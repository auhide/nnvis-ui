
import { 
    Slider
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';



const CustomSlider = withStyles({
    root: {
        width: 300,
        color: '#3F4D59'
    }
})(Slider);

const marks = [
    {
        value: 2,
        label: 'L2',
    },
    {
        value: 3,
        label: 'L3',
    },
    {
        value: 4,
        label: 'L4',
    },
    {
        value: 5,
        label: 'L5',
    },
    {
        value: 6,
        label: 'L6',
    },
];


let updateLayers = (event, value, architecture, dispatch) => {
    const newArchitecture = architecture;

    for (let layersN in architecture) {
        
        if (layersN > value && architecture[layersN] !== 0) {
            newArchitecture[layersN] = 0;
        } else if (layersN <= value && architecture[layersN] === 0) {
            newArchitecture[layersN] = 2;
        }

    }

    dispatch({type: "UPDATE_LAYERS", architecture: { ...newArchitecture }})
}


export function LayersSlider({ architecture, dispatch }) {

    return (
        <Grid
            container
            justify="center"
        >
            <div>
                <CustomSlider
                    defaultValue={2}
                    onChange={(e, value) => updateLayers(e, value, architecture, dispatch)}
                    aria-labelledby="discrete-slider-small-steps"
                    step={1}
                    min={2}
                    max={6}
                    marks={marks}
                    valueLabelDisplay="auto"
                />
            </div>
        </Grid>
    );
}
