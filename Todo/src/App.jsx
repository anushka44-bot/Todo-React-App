import Todohead from "./Components/Todohead";
import Todoentry from "./Components/Todoentry";
import Item from "./Components/Item";
import "./Components/App.css";
// import welcomemsg from "./Components/welcomemsg";
import { useState } from "react";
function App() {
  const initialtodoItems = [
    // {
    //   name: "Buy Milk",
    //   duedate: "4/10/24",
    // },
  ];
  const [todoItems, settodoItems] = useState(initialtodoItems);

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
      <Todohead></Todohead>
      <Todoentry onnewitems={handlenewitems}></Todoentry>
      {/* {todoItems.length === 0 && <welcomemsg></welcomemsg>} */}
      <Item todoItems={todoItems} ondeleteclick={handledelete}></Item>
    </>
  );
}
export default App;
