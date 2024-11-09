import Todoitems from "./Todoitems";
import styles from "./Todohead.module.css";

const Item = ({ todoItems }) => {
  return (
    <>
      <div className={styles.item_container}>
        {todoItems.map((items) => (
          <Todoitems tododate={items.duedate} todoname={items.name}></Todoitems>
        ))}
      </div>
    </>
  );
};

export default Item;
