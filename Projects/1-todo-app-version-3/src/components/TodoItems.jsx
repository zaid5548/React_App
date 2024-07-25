import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, deleteItem }) => {
  const deleteTodoItem = (todoName) => {
    deleteItem(todoName);
    // console.log("Item Delete Successfully!")
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
