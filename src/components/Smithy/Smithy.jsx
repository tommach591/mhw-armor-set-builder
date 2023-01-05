import { useState } from "react";
import Armory from "../Armory";
import "./Smithy.css";

function Smithy() {
  const WEAPON = "weapon";
  const ARMOR = "armor";
  const TALISMAN = "talisman";
  const DECORATION = "decoration";

  const [tab, setTab] = useState(ARMOR);

  const displaySmithy = () => {
    switch (tab) {
      case WEAPON:
        return <div />;
      case ARMOR:
        return <Armory />;
      case TALISMAN:
        return <div />;
      case DECORATION:
        return <div />;
      default:
        return <div />;
    }
  };

  return (
    <div className="Smithy">
      {displaySmithy()}
      <div className="TabContainer">
        <div
          className="Tab"
          onClick={() => {
            setTab(WEAPON);
          }}
        >
          <h2>Weapon</h2>
        </div>
        <div
          className="Tab"
          onClick={() => {
            setTab(ARMOR);
          }}
        >
          <h2>Armor</h2>
        </div>
        <div
          className="Tab"
          onClick={() => {
            setTab(TALISMAN);
          }}
        >
          <h2>Talisman</h2>
        </div>
        <div
          className="Tab"
          onClick={() => {
            setTab(DECORATION);
          }}
        >
          <h2>Decoration</h2>
        </div>
      </div>
    </div>
  );
}

export default Smithy;
