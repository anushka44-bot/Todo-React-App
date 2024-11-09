import Todohead from "./Components/Todohead";
import Todoentry from "./Components/Todoentry";
import Item from "./Components/Item";
import "./Components/App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Cake",
      duedate: "25/5/2024",
    },
    {
      name: "Buy Rice",
      duedate: "26/5/2024",
    },
    {
      name: "Meal Prep",
      duedate: "27/5/2024",
    },
  ];

  return (
    <>
      <Todohead></Todohead>
      <Todoentry></Todoentry>
      <Item todoItems={todoItems}></Item>
    </>
  );
}
export default App;
