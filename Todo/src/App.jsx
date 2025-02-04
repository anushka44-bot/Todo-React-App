import Todohead from "./Components/Todohead";
import Todoentry from "./Components/Todoentry";
import Item from "./Components/Item";
import "./Components/App.css";
import { Todo_items } from "./store/todo-items-store";
import { useState } from "react";
function App() {
  const [todoItems, settodoItems] = useState([]);

  const handlenewitems = (itemname, itemduedate) => {
    settodoItems((currvalue) => {
      const newtodoitems = [
        ...currvalue,
        { name: itemname, duedate: itemduedate },
      ];
      return newtodoitems;
    });
  };
  const handledelete = (todoitemname) => {
    const newtodoitems = todoItems.filter((item) => item.name !== todoitemname);
    settodoItems(newtodoitems);
  };

  return (
    <>
      <Todo_items.Provider value={todoItems}>
        <Todohead></Todohead>
        <Todoentry onnewitems={handlenewitems}></Todoentry>
        {/* {todoItems.length === 0 && <welcomemsg></welcomemsg>} */}
        <Item ondeleteclick={handledelete}></Item>
      </Todo_items.Provider>
    </>
  );
}
export default App;
