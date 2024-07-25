import styles from "./AddTodo.module.css";
import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    if (todo != "" && date != "") {
      addTodo(todo, date);
      setTodo("");
      setDate("");
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
              placeholder="Enter Todo Here"
              value={todo}
              onChange={handleTodoChange}
            />
          </div>
          <div className="col-4">
            <input
              className={styles.inputTodo}
              type="date"
              name=""
              id=""
              value={date}
              onChange={handleDateChange}
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
