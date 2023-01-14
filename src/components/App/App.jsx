import "./App.css";
import { useDoneLoading } from "../../utils/ArmoryContext";
import Smithy from "../Smithy";
import Wallpaper from "../Wallpaper";
import { useState } from "react";
import Info from "../Info";
import Equipped from "../Equipped";
import Status from "../Status";
import { useMobile } from "../../utils/useMobile";

function App() {
  const doneLoading = useDoneLoading();
  const [infoType, setInfoType] = useState();
  const [info, setInfo] = useState();
  const [window, setWindow] = useState(0);
  const isMobile = useMobile();

  const loadingGif =
    "https://media.tenor.com/_w-E_dXPA8MAAAAC/monster-hunter-ice-borne.gif";

  const handleSetInfo = (type, obj) => {
    setInfoType(type);
    setInfo(obj);
  };

  const changeWindow = () => {
    window < 2 ? setWindow(window + 1) : setWindow(0);
  };

  const getWeb = () => {
    return (
      <div className="App">
        <Wallpaper />
        <div className="AppContent">
          <Smithy handleSetInfo={handleSetInfo} />
          <Equipped handleSetInfo={handleSetInfo} />
          <Info infoType={infoType} info={info} />
          <Status />
        </div>
      </div>
    );
  };

  const getWindow = () => {
    switch (window) {
      case 0:
        return (
          <Equipped handleSetInfo={handleSetInfo} changeWindow={changeWindow} />
        );
      case 1:
        return (
          <Info infoType={infoType} info={info} changeWindow={changeWindow} />
        );
      case 2:
        return <Status changeWindow={changeWindow} />;
      default:
        return;
    }
  };

  const getMobile = () => {
    return (
      <div className="App">
        <Wallpaper />
        <div className="AppContent">
          <Smithy handleSetInfo={handleSetInfo} />
          {getWindow()}
        </div>
      </div>
    );
  };

  return doneLoading ? (
    isMobile ? (
      getMobile()
    ) : (
      getWeb()
    )
  ) : (
    <div className="Loading">
      <h1>Loading...</h1>
      <img src={loadingGif} alt="" />
    </div>
  );
}

export default App;
