import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  let data = [
    { name: "Bye Milk1", date: "05/06/2024" },
    { name: "Bye Milk2", date: "05/06/2024" },
    { name: "Bye Milk3", date: "05/06/2024" },
  ];
  const [todoItems, setTodoItems] = useState(data);

  const onNewItem = (todo, date) => {
    // const newTodo = [...todoItems, { name: todo, date: date }];
    // console.log("Added " + todo+" "+date);
    setTodoItems((prevTodo)=>[...prevTodo,{ name: todo, date: date }]);
  };

  const deleteItem = (todoName) => {
    // console.log("Final Delete Expected Item from Items : "+todoName)
    if (todoItems.length === 1) {
      setTodoItems([]);
    } else {
      setTodoItems(todoItems.filter((item) => item.name != todoName));
    }
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addTodo={onNewItem} />
      <TodoItems todoItems={todoItems} deleteItem={deleteItem} />
    </center>
  );
}

export default App;
