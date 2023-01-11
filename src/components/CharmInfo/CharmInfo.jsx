import { getArmorIcon, rarityColor } from "../../utils/Icon";
import Skills from "../Skills";
import "./CharmInfo.css";

function CharmInfo({ info }) {
  return (
    <div className="InfoDetails">
      <div className="InfoIntroduction">
        <div className="InfoName">
          <div className="InfoIcon">
            <div
              className="InfoIconBorder"
              style={{
                borderColor: rarityColor[info.rarity - 1],
              }}
            />
            <div
              className="InfoIconGlow"
              style={{
                boxShadow: `inset 0px 0px 3px 3px ${
                  rarityColor[info.rarity - 1]
                }`,
              }}
            />
            <img src={getArmorIcon("charm", info.rarity)} alt={info.rarity} />
          </div>
          <h1>{info.name}</h1>
        </div>
        <div
          className="InfoRarity"
          style={{ color: rarityColor[info.rarity - 1] }}
        >
          <h2>{`Rarity ${info.rarity}`}</h2>
        </div>
      </div>
      <div className="AllInfoSkills">
        <Skills equipmentSkills={info.skills} />
      </div>
    </div>
  );
}

export default CharmInfo;
