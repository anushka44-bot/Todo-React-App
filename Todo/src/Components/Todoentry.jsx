import { useRef } from "react";
import { MdAddCircle } from "react-icons/md";

function todo_entry({ onnewitems }) {
  const todonameelment = useRef();
  const duedateelment = useRef();

  const handleaddbuttonclicked = (event) => {
    event.preventDefault();
    const todoname = todonameelment.current.value;
    const duedate = duedateelment.current.value;
    todonameelment.current.value = "";
    duedateelment.current.value = "";
    console.log(`${todoname} ${duedate}`);
    onnewitems(todoname, duedate);
  };

  return (
    <>
      <center className="todo-container">
        <div className="container">
          <form className="row Kg_margin" onSubmit={handleaddbuttonclicked}>
            <div className="col-4">
              <input
                ref={todonameelment}
                type="text"
                placeholder="Enter Todo Here"
              />
            </div>
            <div className="col-4">
              <input type="date" ref={duedateelment} />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success Kg_button">
                <MdAddCircle />
              </button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
}
export default todo_entry;
