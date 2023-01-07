import "./Armory.css";
import { useState } from "react";
import {
  useHighArmor,
  useLowArmor,
  useMasterArmor,
} from "../../utils/ArmoryContext";
import Armor from "../Armor";

function Armory({ handleSetInfo }) {
  const lowArmor = useLowArmor();
  const highArmor = useHighArmor();
  const masterArmor = useMasterArmor();

  const [display, setDisplay] = useState(lowArmor);

  const getSetRow = (pieces) => {
    const types = ["head", "chest", "gloves", "waist", "legs"];
    const row = [];

    let j = 0;
    for (let i = 0; i < types.length; i++) {
      if (j < pieces.length && types[i] === pieces[j].type) {
        row.push(
          <Armor key={i} armorObj={pieces[j]} handleSetInfo={handleSetInfo} />
        );
        j++;
      } else {
        row.push(
          <Armor key={i} armorObj={null} handleSetInfo={handleSetInfo} />
        );
      }
    }

    return row;
  };

  return (
    <div className="Armory">
      <div className="RankContainer">
        <div
          className={display === lowArmor ? "Rank Selected" : "Rank"}
          onClick={() => {
            setDisplay(lowArmor);
          }}
        >
          <h2>Low Rank</h2>
        </div>
        <div
          className={display === highArmor ? "Rank Selected" : "Rank"}
          onClick={() => {
            setDisplay(highArmor);
          }}
        >
          <h2>High Rank</h2>
        </div>
        <div
          className={display === masterArmor ? "Rank Selected" : "Rank"}
          onClick={() => {
            setDisplay(masterArmor);
          }}
        >
          <h2>Master Rank</h2>
        </div>
      </div>
      <div className="ArmorSets">
        {display.map((set, i) => {
          return (
            <div className="Set" key={i}>
              <h1 className="SetName">{set.name}</h1>
              {getSetRow(set.pieces)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Armory;
