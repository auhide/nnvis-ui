import {
  SendArchitectureButton
} from '../forms/architectureForm'
import {
    Datasets
} from '../forms/datasetsForm';
import {
  DrawGrids
} from './Grids';


export function ArchitectureComponents(props) {
    return (
      <>
        <br />
        <SendArchitectureButton params={props.params} 
                                rsetter={props.rsetter} 
                                evalLoad={props.evalLoad} evalLoadSetter={props.evalLoadSetter}
                                isTraining={props.trainButton} trainButtonSetter={props.trainButtonSetter}
                                text="Train Network" />
        <br />
        <DrawGrids params={props.params} hsetter={props.hsetter}
                   result={props.result} rsetter={props.rsetter}
                   evalLoad={props.evalLoad} />
    </>
  )
}

export function DatasetsComponents(props) {
    return (
        <>
            <Datasets />
        </>
    );
}