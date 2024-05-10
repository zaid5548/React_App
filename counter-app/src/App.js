import "./App.css";
import {useState} from 'react';





function App() {

let [counter,setCounter] = useState(0);

const addCounter = () => {
  if(counter<20){
    setCounter(counter+1)
  }
}

const removeCounter = () => {
  if(counter>0){
    setCounter(counter-1)
  }
}

  return (
    <div className="App">
      <h1>Counter App !</h1>
      <h2 className="counter">Total Count : {counter}</h2>
      <button id="counter-add" onClick={addCounter}>Add Counter Here</button>
      <button id="counter-remove" onClick={removeCounter}>Remove Counter Here</button>
      <footer>Counter Footer : {counter}</footer>
    </div>
  );
}

export default App;
