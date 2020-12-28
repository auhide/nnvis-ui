import './App.css';
import { useState, useEffect } from 'react';

// Local Imports
import {
  SendArchitectureButton
} from './forms/architectureForm'
import {
  DrawGrids
} from './widgets/Grids';
import {
  CustomNavbar
} from './widgets/Navbars';


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
      <CustomNavbar />
      <br />
      <SendArchitectureButton architecture={architecture} text="Train Network" />
      <br />
      <DrawGrids architecture={architecture} setter={setArchitecture} />
    </div>
  );
}


export default App;
