import React from "react";
import { useState } from "react";
import "./App.css";
import MyFirstComponent from "./component/MyFirstComponent";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  
  const addCounterBy2 = () => {
    setCount2((prevCount) => prevCount + 2);
  };

  const addCounterBy3 = () => {
    setCount3((prevCount) => prevCount + 3);
  };

  return (
    <>
      <h1>My First Counter App</h1>
      <div>
        <button
          className="count-btn"
          onClick={() => setCount1((count) => count + 1)}
        >
          First Button Count {count1}
        </button>
      </div>
      <br />
      <div>
        <button className="count-btn" onClick={addCounterBy2}>
          Second Button Count {count2}
        </button>
      </div>
      <br />
      <div>
        <button className="count-btn" onClick={addCounterBy3}>
          Third Button Count {count3}
        </button>
      </div>
      <br />
      <MyFirstComponent name="Zaid" />
    </>
  );
}

export default App;
