import { useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const [textToShow, setTextToShow] = useState("This is the my first message");
  // let foodItems = ["Dal", "Sabji", "Roti", "Salad", "Milk", "Egg", "Water"];
  //let foodItems = [];
  const [foodItems, setFoodItems] = useState([]);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    // console.log("Enter a value")
    setTextToShow(() => e.target.value);
  };

  const addFoodItem = (e) => {
    setFoodItems((preFoodItems) => [...preFoodItems, textToShow]);
    document.getElementById("foodInput").value = "";
    console.log("Clearing input field");
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ul className="list-group">
          {/* <FoodInput /> */}
          <FoodInput
            handleOnChange={handleOnChange}
            addFoodItem={addFoodItem}
          />
          <ErrorMessage items={foodItems} />
          {/* <p>{textToShow}</p> */}
          <FoodItems items={foodItems} />
        </ul>
      </Container>

      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          exercitationem iste facere, eveniet rem quis odio eum temporibus
          molestiae nesciunt ipsam quasi dolores fugit mollitia!
        </p>
      </Container>
    </>
  );
}

export default App;
