import { resultIsValid } from '../validators/ResultValidators'
import evalSpinner from '../spinners/eval-spinner.gif'


export function Evaluations(props) {
    if (props.isLoading == null) {
        return( 
            <>
                <h1 className="mainText">Evaluation</h1>
                <p>Click <b><i>TRAIN NETWORK</i></b> to Evaluate</p>
            </>
        )
    }
    
    if (props.isLoading) {
        return (
            <>
                <h1 className="mainText">Evaluation</h1>
                <img style={{width: 60, height: 60}}src={evalSpinner} alt="Loading..." />
            </>
        );
    } else {
        return (
            <>
                <h1 className="mainText">Evaluation</h1>
                <Accuracy result={props.result} />
            </>
        )
    }
}

function Accuracy(props) {
    
    if (resultIsValid(props.result)) {
        return (
            <h1>Accuracy: {props.result["Data"]["Accuracy"]}</h1>
            )
            // return (<p>{JSON.stringify(props.result)}</p>);
    }
    
    return ( 
        <p>{JSON.stringify(props.result)}</p>
    )
}