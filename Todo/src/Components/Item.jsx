import Todoitems from "./Todoitems";
import styles from "./Todohead.module.css";

const Item = ({ todoItems, ondeleteclick }) => {
  return (
    <>
      <div className={styles.item_container}>
        {todoItems.map((items) => (
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
