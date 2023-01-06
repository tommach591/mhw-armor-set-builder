import { getIcon } from "../../utils/getIcon";
import Missing from "../../assets/Missing.png";
import "./Armor.css";

function Armor({ armorObj }) {
  const handleMouseOver = () => {
    console.log(armorObj);
  };

  const getSparkles = (rarity) => {
    if (rarity >= 10) {
      return <div className={`Rarity${rarity}`} />;
    }
  };

  return armorObj ? (
    <div className="Armor" onMouseOver={() => handleMouseOver()}>
      {getSparkles(armorObj.rarity)}
      <img
        src={getIcon(armorObj.type, armorObj.rarity)}
        alt={armorObj.rarity}
      />
    </div>
  ) : (
    <div className="Armor">
      <img src={Missing} alt="X" />
    </div>
  );
}

export default Armor;
