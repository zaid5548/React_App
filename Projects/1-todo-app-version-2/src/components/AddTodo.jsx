import styles from "./AddTodo.module.css"

function AddTodo() {
  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input className={styles.inputTodo} type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input className={styles.inputTodo} type="date" name="" id="" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button">
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
