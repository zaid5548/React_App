import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.todo, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name != action.payload.todoName
    );
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  let data = [
    { name: "Bye Milk1", date: "05/06/2024" },
    { name: "Bye Milk2", date: "05/06/2024" },
    { name: "Bye Milk3", date: "05/06/2024" },
  ];

  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);
  const todoContext = useContext(TodoItemsContext);

  const addNewItem = (todo, date) => {
    const newTodoAction = {
      type: "NEW_ITEM",
      payload: {
        todo,
        date,
      },
    };
    dispatchTodoItems(newTodoAction);
  };

  const deleteItem = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName: todoName,
      },
    };

    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
