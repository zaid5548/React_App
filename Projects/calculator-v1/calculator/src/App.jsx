import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonsContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
