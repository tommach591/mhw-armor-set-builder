import "./App.css";
import { useDoneLoading } from "../../utils/ArmoryContext";
import Smithy from "../Smithy";
import Wallpaper from "../Wallpaper";
import { useState } from "react";
import Info from "../Info";
import Equipped from "../Equipped";

function App() {
  const doneLoading = useDoneLoading();
  const [infoType, setInfoType] = useState();
  const [info, setInfo] = useState();
  const loadingGif =
    "https://media.tenor.com/_w-E_dXPA8MAAAAC/monster-hunter-ice-borne.gif";

  const handleSetInfo = (type, obj) => {
    setInfoType(type);
    setInfo(obj);
  };

  return doneLoading ? (
    <div className="App">
      <Wallpaper />
      <Equipped handleSetInfo={handleSetInfo} />
      <Smithy handleSetInfo={handleSetInfo} />
      <Info infoType={infoType} info={info} />
    </div>
  ) : (
    <div className="Loading">
      <h1>Loading...</h1>
      <img src={loadingGif} alt="" />
    </div>
  );
}

export default App;
