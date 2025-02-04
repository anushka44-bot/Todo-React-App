function todo_entry() {
  return (
    <>
      <center className="todo-container">
        <div className="container">
          <form className="row Kg_margin" onSubmit={handleaddbuttonclicked}>
            <div className="col-4">
              <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div className="col-4">
              <input type="date" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success Kg_button">
                Add
              </button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
}
export default todo_entry;
