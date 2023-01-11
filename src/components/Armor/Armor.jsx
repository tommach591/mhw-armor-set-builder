import { getArmorIcon } from "../../utils/Icon";
import Missing from "../../assets/Missing.png";
import "./Armor.css";
import {
  useChestUpdate,
  useGlovesUpdate,
  useHeadUpdate,
  useLegsUpdate,
  useWaistUpdate,
} from "../../utils/HunterContext";

function Armor({ armorObj, handleSetInfo }) {
  const handleSetHead = useHeadUpdate();
  const handleSetChest = useChestUpdate();
  const handleSetGloves = useGlovesUpdate();
  const handleSetWaist = useWaistUpdate();
  const handleSetLegs = useLegsUpdate();

  const handleMouseOver = () => {
    handleSetInfo("armor", armorObj);
  };

  const handleSetArmor = () => {
    switch (armorObj.type) {
      case "head":
        handleSetHead(armorObj);
        break;
      case "chest":
        handleSetChest(armorObj);
        break;
      case "gloves":
        handleSetGloves(armorObj);
        break;
      case "waist":
        handleSetWaist(armorObj);
        break;
      case "legs":
        handleSetLegs(armorObj);
        break;
      default:
        break;
    }
  };

  return armorObj ? (
    <div
      className="Armor"
      onMouseOver={() => handleMouseOver()}
      onClick={() => {
        handleSetArmor();
      }}
    >
      <div className={`Rarity${armorObj.rarity}`} />
      <img src={getArmorIcon(armorObj.type, armorObj.rarity)} alt="" />
    </div>
  ) : (
    <div className="Armor" onMouseOver={() => handleMouseOver()}>
      <img src={Missing} alt="" />
    </div>
  );
}

export default Armor;
