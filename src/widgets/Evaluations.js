import { resultIsValid } from '../validators/ResultValidators'


export function Evaluations(props) {

    return (
        <>
            <h1 className="mainText">Evaluation</h1>
            <Accuracy result={props.result} />
        </>
    )
}

function Accuracy(props) {
    console.log(props.result);
    
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