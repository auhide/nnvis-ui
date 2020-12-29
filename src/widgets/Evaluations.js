
export function Evaluations(props) {

    return (
        <>
            <h1 className="mainText">Evaluation</h1>
            <p>{JSON.stringify(props.result)}</p>
        </>
    )
}