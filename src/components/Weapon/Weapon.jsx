import { getWeaponTypeIcon, getSlotIcon } from "../../utils/getIcon";
import "./Weapon.css";

function Weapon({ weaponObj }) {
  const getSharpness = (sharpness) => {
    const colors = [];
    for (const [key, value] of Object.entries(sharpness)) {
      colors.push(
        <div
          className={`Sharpness${key}`}
          style={{
            width: `${(value / 400) * 100}%`,
          }}
          key={key}
        />
      );
    }

    return <div className="SharpnessBar">{colors}</div>;
  };

  const getElements = () => {
    const element = [];

    for (let i = 0; i < weaponObj.elements.length; i++) {
      const e = weaponObj.elements[i];
      element.push(
        <div className="Element" key={i}>
          <h2
            className="ElementType"
            style={e.hidden ? { color: "white" } : { color: "gray" }}
          >
            <img
              className="ElementIcon"
              src={getWeaponTypeIcon(e.type)}
              alt=""
            />
            {e.type.slice(0, 1).toUpperCase() + e.type.slice(1)}
          </h2>
          <h2
            className="ElementValue"
            style={e.hidden ? { color: "white" } : { color: "gray" }}
          >
            {e.damage}
          </h2>
        </div>
      );
    }

    return element;
  };

  const getAttributes = () => {
    const attributes = [];

    for (const [key, value] of Object.entries(weaponObj.attributes)) {
      if (value !== 0 && (key === "defense" || key === "affinity"))
        attributes.push(
          <div className="Attribute" key={key}>
            <h2>{key === "defense" ? "🛡️ Defense" : "🔪 Affinity"}</h2>
            <h2 className="AttributeValue">
              {key === "defense" ? `${value}` : `${value}%`}
            </h2>
          </div>
        );
    }

    return attributes;
  };

  const getSlots = () => {
    const slots = [];

    for (let i = 0; i < weaponObj.slots.length; i++) {
      slots.push(
        <img key={i} src={getSlotIcon(weaponObj.slots[i].rank)} alt="" />
      );
    }

    return slots;
  };

  return (
    <div className="Weapon">
      <div className="WeaponName">{weaponObj.name}</div>
      <div className="WeaponStats">
        <div className="WeaponIcon">
          <img
            src={weaponObj.assets ? weaponObj.assets.icon : ""}
            alt={weaponObj.rarity}
          />
        </div>
        <div className="WeaponLeft">
          <div className="WeaponAtk">
            <h2>{"⚔️ Attack "}</h2>
            <h2 className="AttackValue">{`${weaponObj.attack.display}`}</h2>
          </div>
          <div className="WeaponSharpness">
            Sharpness
            {getSharpness(weaponObj.durability[0])}
          </div>
        </div>
        <div className="WeaponRight">
          {getElements()}
          {getAttributes()}
        </div>
      </div>
      <div className="WeaponSlots">{getSlots()}</div>
    </div>
  );
}

export default Weapon;
