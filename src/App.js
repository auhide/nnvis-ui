import './App.css';

// Local Imports
import {
  NNVis
} from './widgets/Navbars';

import { useSelector, useDispatch } from "react-redux";


function App() {
  const architecture = useSelector(state => state.architecture);
  const params = useSelector(state => state.params);

  return (
    <div className="App">
      <h1>Something</h1>
      <h1>{JSON.stringify(architecture)}</h1>
      <h1>{JSON.stringify(params)}</h1>
      <NNVis />
    </div>
  );
}


export default App;
