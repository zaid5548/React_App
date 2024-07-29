import { MdDeleteForever } from "react-icons/md";

function TodoItem({ todoName, todoDate, handleDeleteBtn }) {
  const handleDeleteOnClick = ({}) => {
    handleDeleteBtn(todoName);
    // console.log("Item Deleted")
  };

  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={handleDeleteOnClick}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
