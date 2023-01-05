import "./App.css";
import { useDoneLoading } from "../../utils/ArmoryContext";
import Smithy from "../Smithy";

function App() {
  const doneLoading = useDoneLoading();

  return doneLoading ? (
    <div className="App">
      <img src="https://images6.alphacoders.com/101/1012987.jpg" alt="" />
      <Smithy />
    </div>
  ) : (
    <div className="Loading">
      <h1>Loading...</h1>
    </div>
  );
}

export default App;
