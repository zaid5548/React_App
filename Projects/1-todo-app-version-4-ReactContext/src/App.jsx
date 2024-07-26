import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let data = [
    { name: "Bye Milk1", date: "05/06/2024" },
    { name: "Bye Milk2", date: "05/06/2024" },
    { name: "Bye Milk3", date: "05/06/2024" },
  ];
  const [todoItems, setTodoItems] = useState([]);

  const todoContext = useContext(TodoItemsContext);

  const addNewItem = (todo, date) => {
    // const newTodo = [...todoItems, { name: todo, date: date }];
    // console.log("Added " + todo+" "+date);
    setTodoItems((prevTodo) => [...prevTodo, { name: todo, date: date }]);
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
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
