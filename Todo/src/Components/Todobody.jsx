function todo_body() {
  let todoname = "Buy Milk";
  let tododate = "07/10/2024";
  return (
    <>
      <center className="todo-container">
        <div className="container">
          <div className="row Kg_margin">
            <div className="col-4">{todoname}</div>
            <div className="col-4">{tododate}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger Kg_button">
                Delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
export default todo_body;
