import { getArmorIcon } from "../../utils/Icon";
import Missing from "../../assets/Missing.png";
import "./Armor.css";

function Armor({ armorObj, handleSetInfo }) {
  const handleMouseOver = () => {
    handleSetInfo("armor", armorObj);
  };

  return armorObj ? (
    <div className="Armor" onMouseOver={() => handleMouseOver()}>
      <div className={`Rarity${armorObj.rarity}`} />
      <img
        src={getArmorIcon(armorObj.type, armorObj.rarity)}
        alt={armorObj.rarity}
      />
    </div>
  ) : (
    <div className="Armor" onMouseOver={() => handleMouseOver()}>
      <img src={Missing} alt="X" />
    </div>
  );
}

export default Armor;
