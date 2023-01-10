import ArmorInfo from "../ArmorInfo";
import CharmInfo from "../CharmInfo/CharmInfo";
import DecorationInfo from "../DecorationInfo/DecorationInfo";
import WeaponInfo from "../WeaponInfo";
import "./Info.css";

function Info({ infoType, info }) {
  const EquipInfo = () => {
    switch (infoType) {
      case "weapon":
        return <WeaponInfo info={info} />;
      case "armor":
        return <ArmorInfo info={info} />;
      case "charm":
        return <CharmInfo info={info} />;
      case "decoration":
        return <DecorationInfo info={info} />;
      default:
        return;
    }
  };

  return info ? (
    <div className="Info">
      <div className="InfoTitle">
        <h1>Equipment Info</h1>
      </div>
      {EquipInfo()}
    </div>
  ) : (
    <div className="NoInfo">
      <h1>No Equipment</h1>
    </div>
  );
}

export default Info;
