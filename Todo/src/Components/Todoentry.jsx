import { useState } from "react";
import { MdAddCircle } from "react-icons/md";

function todo_entry({ onnewitems }) {
  const [todoname, settodoname] = useState();
  const [duedate, setduedate] = useState();

  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };
  const handledatechange = (event) => {
    setduedate(event.target.value);
  };
  const handleaddbuttonclicked = () => {
    onnewitems(todoname, duedate);
    settodoname("");
    setduedate("");
  };

  return (
    <>
      <center className="todo-container">
        <div className="container">
          <div className="row Kg_margin">
            <div className="col-4">
              <input
                type="text"
                placeholder="Enter Todo Here"
                value={todoname}
                onChange={handlenamechange}
              />
            </div>
            <div className="col-4">
              <input type="date" value={duedate} onChange={handledatechange} />
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-success Kg_button"
                onClick={handleaddbuttonclicked}
              >
                <MdAddCircle />
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
export default todo_entry;
