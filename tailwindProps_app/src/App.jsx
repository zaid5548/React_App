import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    userName:'Zaid Khan',
    email:'test@test.com',
    id:12
  }

  return (
    <>
      <Card userName="khan" btnText='Click here' imgUrl='https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg'/>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <Card userName="Zaid" btnText='Visit me'imgUrl='https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-vintage-tram-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <Buttons btnclassName="first bg-blue-500 m-5" btnText="First Button" />
      <Buttons btnclassName="second bg-gray-500 m-5" btnText="Second Button" />
      <Buttons btnclassName="third bg-red-500 m-5" btnText="Third Button" />
    </>
  );
}

export default App;
