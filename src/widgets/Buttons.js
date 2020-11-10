import { 
    Button
} from '@material-ui/core';


export function getIncrementalButton(symbol, callback){
    return <Button 
    style={{
        borderRadius: 90, 
        fontSize: 30, 
        minWidth: '30px',
        minHeight: '40px',
        maxWidth: '30px', 
        maxHeight: '40px'
      }} 
    onClick={callback}
    size="small" 
    color="primary">{symbol}</Button>
}