import { useWeaponUpdate } from "../../utils/HunterContext";
import { getWeaponIcon, getElementType, getSlotIcon } from "../../utils/Icon";
import "./Weapon.css";

function Weapon({ weaponObj, handleSetInfo }) {
  const handleSetWeapon = useWeaponUpdate();

  const handleMouseOver = () => {
    handleSetInfo("weapon", weaponObj);
  };

  const Sharpness = (sharpness) => {
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

  const Elements = () => {
    const element = [];

    for (let i = 0; i < weaponObj.elements.length; i++) {
      const e = weaponObj.elements[i];
      element.push(
        <div className="Element" key={i}>
          <h2
            className="ElementType"
            style={e.hidden ? { color: "white" } : { color: "gray" }}
          >
            <img className="ElementIcon" src={getElementType(e.type)} alt="" />
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

  const Attributes = () => {
    const attributes = [];

    for (const [key, value] of Object.entries(weaponObj.attributes)) {
      if (value !== 0 && (key === "defense" || key === "affinity"))
        attributes.push(
          <div className="Attribute" key={key}>
            <h2 className="AttributeLabel">
              <img
                className="AttributeIcon"
                src={
                  key === "defense"
                    ? "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-defense_s.png"
                    : "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-affinity.png"
                }
                alt=""
              />
              {key === "defense" ? "Defense" : "Affinity"}
            </h2>
            <h2 className="AttributeValue">
              {key === "defense" ? `${value}` : `${value}%`}
            </h2>
          </div>
        );
    }

    return attributes;
  };

  const Slots = () => {
    const slots = [];

    for (let i = 0; i < weaponObj.slots.length; i++) {
      slots.push(
        <img key={i} src={getSlotIcon(weaponObj.slots[i].rank)} alt="" />
      );
    }

    return slots;
  };

  if (
    weaponObj.name === "Hazak Velos 1" ||
    weaponObj.name === "Hazak Velos 2"
  ) {
    weaponObj.rarity = 7;
  }

  return (
    <div
      className="Weapon"
      onMouseOver={() => handleMouseOver()}
      onClick={() => {
        handleSetWeapon(weaponObj);
      }}
    >
      <div className="WeaponName">{weaponObj.name}</div>
      <div className="WeaponStats">
        <div className="WeaponIcon">
          <img src={getWeaponIcon(weaponObj.type, weaponObj.rarity)} alt="" />
        </div>
        <div className="WeaponLeft">
          <div className="WeaponAtk">
            <h2 className="WeaponAtkLabel">
              <img
                className="WeaponAtkIcon"
                src="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-attack.png"
                alt=""
              />
              {"Attack "}
            </h2>
            <h2 className="AttackValue">{`${weaponObj.attack.display}`}</h2>
          </div>
          {weaponObj.durability ? (
            <div className="WeaponSharpness">
              Sharpness
              {Sharpness(weaponObj.durability[0])}
            </div>
          ) : (
            <div />
          )}
        </div>
        <div className="WeaponRight">
          {Elements()}
          {Attributes()}
        </div>
      </div>
      <div className="WeaponSlots">{Slots()}</div>
    </div>
  );
}

export default Weapon;
