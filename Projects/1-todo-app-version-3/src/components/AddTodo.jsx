import styles from "./AddTodo.module.css";
import { useState, useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";

function AddTodo({ addTodo }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    let todo = todoNameElement.current.value;
    let date = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    if (todo != "" && date != "") {
      addTodo(todo, date);
    } else {
      alert("Please enter Todo Name & Todo Date");
    }
  };

  return (
    <>
      <div className="container text-center">
        <form onSubmit={handleAddButtonClicked} className="row kg-row">
          <div className="col-6">
            <input
              className={styles.inputTodo}
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input
              className={styles.inputTodo}
              type="date"
              name=""
              id=""
              ref={todoDateElement}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">
              <MdLibraryAdd />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
