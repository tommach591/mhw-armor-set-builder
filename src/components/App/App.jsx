import "./App.css";
import { useDoneLoading } from "../../utils/ArmoryContext";
import Smithy from "../Smithy";
import Wallpaper from "../Wallpaper";
import { useEffect, useState } from "react";
import Info from "../Info";

function App() {
  const doneLoading = useDoneLoading();
  const [infoType, setInfoType] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    console.log(infoType, info);
  }, [info, infoType]);

  const handleSetInfo = (type, obj) => {
    setInfoType(type);
    setInfo(obj);
  };

  return doneLoading ? (
    <div className="App">
      <Wallpaper />
      <Smithy handleSetInfo={handleSetInfo} />
      <Info infoType={infoType} info={info} />
    </div>
  ) : (
    <div className="Loading">
      <h1>Loading...</h1>
      <img
        src="https://media.tenor.com/_w-E_dXPA8MAAAAC/monster-hunter-ice-borne.gif"
        alt=""
      />
    </div>
  );
}

export default App;
