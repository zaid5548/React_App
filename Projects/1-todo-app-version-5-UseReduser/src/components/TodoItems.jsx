import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {

  const {todoItems}=useContext(TodoItemsContext)
  const {deleteItem}=useContext(TodoItemsContext)

  const deleteTodoItem = (todoName) => {
    deleteItem(todoName);
  };
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.date}
            handleDeleteBtn={deleteTodoItem}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
