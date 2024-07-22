function TodoItem() {
  let todoName = "Bye Milk";
  let todoDate = "05/06/2024";
  return (
    <>
      <div class="container">
        <div class="row kg-row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
