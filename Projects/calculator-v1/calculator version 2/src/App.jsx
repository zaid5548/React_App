import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonsContainer";
import { evaluate } from 'mathjs';

function App() {
  const [calValue, setCalValue] = useState("");

  const clickByButtton = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = evaluate(calValue);
      setCalValue(result);
    } else {
      setCalValue(calValue + buttonText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calValue={calValue} />
      <ButtonContainer clickByButtton={clickByButtton} />
    </div>
  );
}

export default App;
