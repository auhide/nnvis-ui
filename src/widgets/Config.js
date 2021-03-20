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
        <SendArchitectureButton text="Train Network" />
        <br />
        <div style={{ width: datasetLength, margin: "auto", marginTop: -10, marginBottom: -10}}>
          <p class="dataset-border mainText">{datasetName}</p>
        </div>
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