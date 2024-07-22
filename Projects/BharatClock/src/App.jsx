import { useState } from "react";
import "./App.css";
import DateTimeItem from "./components/DateTimeItem";
import ContentItem from "./components/ContentItem";
import AppName from "./components/AppName";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppName />
      <ContentItem />
      <DateTimeItem />
    </>
  );
}

export default App;
