import { getElementType, getStatIcon } from "../../utils/Icon";
import "./DefenseStatus.css";
import {
  useWeapon,
  useChest,
  useGloves,
  useHead,
  useLegs,
  useWaist,
} from "../../utils/HunterContext";

function DefenseStatus() {
  const weapon = useWeapon();

  const head = useHead();
  const chest = useChest();
  const gloves = useGloves();
  const waist = useWaist();
  const legs = useLegs();

  const weaponEquipped = Object.keys(weapon).length > 0;
  const headEquipped = Object.keys(head).length > 0;
  const chestEquipped = Object.keys(chest).length > 0;
  const glovesEquipped = Object.keys(gloves).length > 0;
  const waistEquipped = Object.keys(waist).length > 0;
  const legsEquipped = Object.keys(legs).length > 0;

  const getDefense = () => {
    let defense = 1;
    defense +=
      weaponEquipped && weapon.attributes.defense
        ? weapon.attributes.defense
        : 0;
    defense += headEquipped ? head.defense.base : 0;
    defense += chestEquipped ? chest.defense.base : 0;
    defense += glovesEquipped ? gloves.defense.base : 0;
    defense += waistEquipped ? waist.defense.base : 0;
    defense += legsEquipped ? legs.defense.base : 0;
    return defense;
  };

  const getResistance = () => {
    let resistances = {
      fire: 0,
      water: 0,
      ice: 0,
      thunder: 0,
      dragon: 0,
    };

    if (headEquipped)
      Object.entries(head.resistances).forEach(([key, value]) => {
        resistances[key] += value;
      });

    if (chestEquipped)
      Object.entries(chest.resistances).forEach(([key, value]) => {
        resistances[key] += value;
      });

    if (glovesEquipped)
      Object.entries(gloves.resistances).forEach(([key, value]) => {
        resistances[key] += value;
      });

    if (waistEquipped)
      Object.entries(waist.resistances).forEach(([key, value]) => {
        resistances[key] += value;
      });

    if (legsEquipped)
      Object.entries(legs.resistances).forEach(([key, value]) => {
        resistances[key] += value;
      });

    return resistances;
  };

  const Resistances = () => {
    const resistancesComponenets = [];
    let resistances = getResistance();

    Object.entries(resistances).forEach(([key, value]) => {
      resistancesComponenets.push(
        <div className="InfoStat" key={key}>
          <div className="InfoType">
            <img src={getElementType(key)} alt="" />
            <h2>{`Vs. ${key.slice(0, 1).toUpperCase() + key.slice(1)}`}</h2>
          </div>
          <div className="InfoValue">
            <h2>{value}</h2>
          </div>
        </div>
      );
    });

    return resistancesComponenets;
  };

  return (
    <div className="DefenseStatus">
      <div className="DefenseStatusTitle">
        <h1>Defense Status</h1>
      </div>
      <div className="AllDefenseStats">
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("defense")} alt="" />
            <h2>Defense</h2>
          </div>
          <div className="InfoValue">
            <h2>{getDefense()}</h2>
          </div>
        </div>
        {Resistances()}
      </div>
    </div>
  );
}

export default DefenseStatus;
