import { useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [count, setCount] = useState(0);

  let foodItems = ["Dal","Sabji", "Roti", "Salad", "Milk", "Egg", "Water"];
  //let foodItems = [];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </ul>
    </>
  );
}

export default App;
