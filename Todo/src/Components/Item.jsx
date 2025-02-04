import Todoitems from "./Todoitems";
import styles from "./Todohead.module.css";
import { useContext } from "react";
import { Todo_items } from "../store/todo-items-store";

const Item = ({ ondeleteclick }) => {
  const todoitems = useContext(Todo_items);
  return (
    <>
      <div className={styles.item_container}>
        {todoitems.map((items) => (
          <Todoitems
            tododate={items.duedate}
            todoname={items.name}
            ondeleteclick={ondeleteclick}
          ></Todoitems>
        ))}
      </div>
    </>
  );
};

export default Item;
