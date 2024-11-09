import styles from "./Todohead.module.css";

function todo_head() {
  return (
    <>
      <center className="todo-container head_contain">
        <h1 className={styles.head_contain}>Todo App</h1>
      </center>
    </>
  );
}
export default todo_head;
