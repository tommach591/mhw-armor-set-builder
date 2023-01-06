import "./App.css";
import { useDoneLoading } from "../../utils/ArmoryContext";
import Smithy from "../Smithy";
import Wallpaper from "../Wallpaper";

function App() {
  const doneLoading = useDoneLoading();

  return doneLoading ? (
    <div className="App">
      <Wallpaper />
      <Smithy />
    </div>
  ) : (
    <div className="Loading">
      <h1>Loading...</h1>
    </div>
  );
}

export default App;
