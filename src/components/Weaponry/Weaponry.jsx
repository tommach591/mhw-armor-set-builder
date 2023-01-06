import { useEffect, useState } from "react";
import { useWeaponList } from "../../utils/ArmoryContext";
import Weapon from "../Weapon";
import "./Weaponry.css";

function Weaponry() {
  const weaponList = useWeaponList();
  const GS = "great-sword";
  const LS = "long-sword";
  const SnS = "sword-and-shield";
  const DB = "dual-blades";
  const HAMMER = "hammer";
  const HH = "hunting-horn";
  const LANCE = "lance";
  const GL = "gunlance";
  const SA = "switch-axe";
  const CB = "charge-blade";
  const IG = "insect-glaive";
  const LBG = "light-bowgun";
  const HBG = "heavy-bowgun";
  const BOW = "bow";

  const [type, setType] = useState(GS);
  const [display, setDisplay] = useState(
    weaponList.filter((weapon) => weapon.type === type)
  );

  useEffect(() => {
    setDisplay(weaponList.filter((weapon) => weapon.type === type));
  }, [type, weaponList]);

  return (
    <div className="Weaponry">
      <div className="SelectWeaponType">
        <label>Weapon Type: </label>
        <select
          name="type"
          onChange={(event) => {
            setType(event.currentTarget.value);
          }}
        >
          <option value={GS}>Great Sword</option>
          <option value={LS}>Long Sword</option>
          <option value={SnS}>Sword and Shield</option>
          <option value={DB}>Dual Blades</option>
          <option value={HAMMER}>Hammer</option>
          <option value={HH}>Hunting Horn</option>
          <option value={LANCE}>Lance</option>
          <option value={GL}>Gunlance</option>
          <option value={SA}>Switch Axe</option>
          <option value={CB}>Charge Blade</option>
          <option value={IG}>Insect Glaive</option>
          <option value={LBG}>Light Bowgun</option>
          <option value={HBG}>Heavy Bowgun</option>
          <option value={BOW}>Bow</option>
        </select>
      </div>
      <div className="WeaponList">
        {display.map((weaponObj, i) => {
          return <Weapon key={i} weaponObj={weaponObj} />;
        })}
      </div>
    </div>
  );
}

export default Weaponry;
