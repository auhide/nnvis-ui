import { useSelector } from "react-redux";

import {
  SendArchitectureButton
} from '../forms/architectureForm'
import {
    Datasets
} from '../forms/datasetsForm';
import {
  DrawGrids
} from './Grids';
import {
  getPresentableDatasetByName
} from '../forms/datasetsForm'


let datasetNameScaleFactor = 13

export function ArchitectureComponents() {
    let datasetName = useSelector(state => state.dataset);
    datasetName = getPresentableDatasetByName(datasetName);
    let datasetLength = datasetName.length * datasetNameScaleFactor;
    return (
      <>
        <br />
        <div style={{ width: datasetLength, margin: "auto"}}>
          <p class="dataset-border mainText">{datasetName}</p>
        </div>
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