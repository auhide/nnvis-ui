import {
  SendArchitectureButton
} from '../forms/architectureForm'
import {
    Datasets
} from '../forms/datasetsForm';
import {
  DrawGrids
} from './Grids';


export function ArchitectureComponents() {
    return (
      <>
        <br />
        <SendArchitectureButton text="Train Network" />
        <br />
        <DrawGrids />
    </>
  )
}

export function DatasetsComponents() {
    return (
        <>
            <Datasets />
        </>
    );
}