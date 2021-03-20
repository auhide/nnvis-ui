import {
    Box,
    Button
} from '@material-ui/core';

import {
    getLastLayerNumber
} from '../nn/NeuralNet';

export function getIncrementalButton(symbol, callback, position, currLayer, architecture, isLoading){
    const [x, y] = position;

    let lastLayerNum = getLastLayerNumber(architecture)
    if (currLayer !== lastLayerNum) {
        return (
            <Box>
                <Button 
                    style={{
                        borderRadius: 90, 
                        fontSize: 30,
                        color: "#636D73", 
                        minWidth: '30px',
                        minHeight: '40px',
                        maxWidth: '30px', 
                        maxHeight: '40px',
                        position: 'absolute',   
                        left:`${x}px`, 
                        top:`${y}px`
                    }}
                    onClick={callback}
                    size="small" 
                    color="primary"
                    disabled={isLoading}>{symbol}</Button>
            </Box>
        );    
    }

    return <></>;

}

