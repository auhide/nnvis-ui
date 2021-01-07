import {
    SendArchitectureButton
} from '../forms/architectureForm'
import {
    DrawGrids
} from './Grids';


export function ArchitectureComponents(props) {
    return (
      <>
        <br />
        <SendArchitectureButton architecture={props.architecture} params={props.params} 
                                rsetter={props.rsetter} 
                                evalLoad={props.evalLoad} evalLoadSetter={props.evalLoadSetter}
                                isTraining={props.trainButton} trainButtonSetter={props.trainButtonSetter}
                                text="Train Network" />
        <br />
        <DrawGrids architecture={props.architecture} setter={props.setter} 
                   params={props.params} hsetter={props.hsetter}
                   result={props.result} rsetter={props.rsetter}
                   evalLoad={props.evalLoad} />
      </>
    )
  }