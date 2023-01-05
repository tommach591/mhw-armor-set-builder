import { getIcon } from "../../utils/getIcon";
import Missing from "../../assets/Missing.png";
import "./Equipment.css";

function Equipment({ equipmentObject }) {
  const handleMouseOver = () => {
    console.log(equipmentObject);
  };

  return equipmentObject ? (
    <div className="Equipment" onMouseOver={() => handleMouseOver()}>
      <img
        src={getIcon(equipmentObject.type, equipmentObject.rarity)}
        alt={equipmentObject.rarity}
      />
    </div>
  ) : (
    <div className="Equipment">
      <img src={Missing} alt="X" />
    </div>
  );
}

export default Equipment;
