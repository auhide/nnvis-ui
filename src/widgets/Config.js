import {
    Datasets
} from '../forms/datasetsForm';
import {
  DrawGrids
} from './Grids';


export function ArchitectureComponents() {

    return (
      <>
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