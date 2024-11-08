import Todohead from "./Components/Todohead";
import Todoentry from "./Components/Todoentry";
import Todobody from "./Components/Todobody";
import Todobody2 from "./Components/Todobody2";
import "./Components/App.css";
function App() {
  return (
    <>
      <Todohead></Todohead>
      <Todoentry></Todoentry>
      <div className="item_container">
        <Todobody></Todobody>
        <Todobody2></Todobody2>
      </div>
    </>
  );
}
export default App;
