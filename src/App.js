import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  Line,
  SteppedLine,
  PolyLine,
  Circle,
  Rectangle
} from 'draw-shape-reactjs';


function App() {
  const initialCounter = 0;
  const [counter, setCounter] = useState(initialCounter);

  return (
    <div className="App">
      {drawNeurons(counter)}
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prevCounter => ++prevCounter)}>Increment</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

let drawNeurons = (neurons_n) => {
  let neurons = [];
  let neuron_pos = 200;
  
  for (let i = 0; i < neurons_n; i++){
    neurons.push(<Circle
                  center={[100, neuron_pos]} radius={15} color='#00701a'
                />);
    neuron_pos += 50;
  }

  return neurons;
}

export default App;
