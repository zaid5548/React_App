import { createContext, useContext } from "react";

export const MyTodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Learn React",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(MyTodoContext);
};

export const MyTodoProvider = MyTodoContext.Provider;
