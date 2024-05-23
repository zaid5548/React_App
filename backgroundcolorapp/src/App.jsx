import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <button
        className="outline-none px-4 py1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "red" }}
        type="submit"
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="outline-none px-4 py1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "yellow" }}
        type="submit"
        onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
      <button
        className="outline-none px-4 py1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "green" }}
        type="submit"
        onClick={() => setColor("green")}
      >
        Green
      </button>
      <button
        className="outline-none px-4 py1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "blue" }}
        type="submit"
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        className="outline-none px-4 py1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "pink" }}
        type="submit"
        onClick={() => setColor("pink")}
      >
        pink
      </button>
      <button
        className="outline-none px-4 py1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "black" }}
        type="submit"
        onClick={() => setColor("black")}
      >
        black
      </button>
      <button
        className="outline-none px-4 py1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "#d9cfcf" }}
        type="submit"
        onClick={() => setColor("white")}
      >
        white
      </button>
    </div>
  );
}

export default App;
