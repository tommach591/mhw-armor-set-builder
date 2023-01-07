import WeaponInfo from "../WeaponInfo";
import "./Info.css";

function Info({ infoType, info }) {
  const EquipInfo = () => {
    switch (infoType) {
      case "weapon":
        return <WeaponInfo info={info} />;
      case "armor":
        return ArmorInfo();
      case "charm":
        return CharmInfo();
      case "decoration":
        return DecorationInfo();
      default:
        return;
    }
  };

  const ArmorInfo = () => {};
  const CharmInfo = () => {};
  const DecorationInfo = () => {};

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
