import './App.css';
import { useState, useEffect } from 'react';

// Local Imports
import {
  Network
} from './nn/NeuralNet';


function App() {
  const [architecture, setArchitecture] = useState({
    1: 2,
    2: 3,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  });

  return (
    <div className="App">
      {/* <button onClick={() => addButton(setButtons)}>Add Button</button> */}
      <h1>{Object.keys(architecture)}</h1>
      <h1>{Object.values(architecture)}</h1>

      <Network architecture={architecture} setter={setArchitecture}/>
    </div>
  );
}


export default App;
