import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  let data = [
    { name: "Bye Milk1", date: "05/06/2024" },
    { name: "Bye Milk2", date: "05/06/2024" },
    { name: "Bye Milk3", date: "05/06/2024" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={data} />
    </center>
  );
}

export default App;
