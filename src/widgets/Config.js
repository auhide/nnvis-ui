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
        <SendArchitectureButton architecture={props.architecture} params={props.params} text="Train Network" />
        <br />
        <DrawGrids architecture={props.architecture} setter={props.setter} 
                  params={props.params} hsetter={props.hsetter}/>
      </>
    )
  }