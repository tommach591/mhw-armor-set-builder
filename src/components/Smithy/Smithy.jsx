import { useState } from "react";
import Armory from "../Armory";
import CharmShop from "../CharmShop";
import DecorationShop from "../DecorationShop";
import Weaponry from "../Weaponry";
import "./Smithy.css";

function Smithy({ handleSetInfo }) {
  const WEAPON = "weapon";
  const ARMOR = "armor";
  const CHARM = "charm";
  const DECORATION = "decoration";

  const [tab, setTab] = useState(ARMOR);

  const displaySmithy = () => {
    switch (tab) {
      case WEAPON:
        return <Weaponry handleSetInfo={handleSetInfo} />;
      case ARMOR:
        return <Armory handleSetInfo={handleSetInfo} />;
      case CHARM:
        return <CharmShop handleSetInfo={handleSetInfo} />;
      case DECORATION:
        return <DecorationShop handleSetInfo={handleSetInfo} />;
      default:
        return <div />;
    }
  };

  return (
    <div className="Smithy">
      {displaySmithy()}
      <div className="TabContainer">
        <div
          className={tab === WEAPON ? "Tab Selected" : "Tab"}
          onClick={() => {
            setTab(WEAPON);
          }}
        >
          <h2>Weapon</h2>
        </div>
        <div
          className={tab === ARMOR ? "Tab Selected" : "Tab"}
          onClick={() => {
            setTab(ARMOR);
          }}
        >
          <h2>Armor</h2>
        </div>
        <div
          className={tab === CHARM ? "Tab Selected" : "Tab"}
          onClick={() => {
            setTab(CHARM);
          }}
        >
          <h2>Charm</h2>
        </div>
        <div
          className={tab === DECORATION ? "Tab Selected" : "Tab"}
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
