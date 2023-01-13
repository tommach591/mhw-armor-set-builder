import {
  useWeapon,
  useChest,
  useGloves,
  useHead,
  useLegs,
  useWaist,
  useCharm,
} from "../../utils/HunterContext";
import Skills from "../Skills";
import "./SkillsStatus.css";

function SkillsStatus() {
  const weapon = useWeapon();
  const head = useHead();
  const chest = useChest();
  const gloves = useGloves();
  const waist = useWaist();
  const legs = useLegs();
  const charm = useCharm();

  const weaponEquipped = Object.keys(weapon).length > 0;
  const headEquipped = Object.keys(head).length > 0;
  const chestEquipped = Object.keys(chest).length > 0;
  const glovesEquipped = Object.keys(gloves).length > 0;
  const waistEquipped = Object.keys(waist).length > 0;
  const legsEquipped = Object.keys(legs).length > 0;
  const charmEquipped = Object.keys(charm).length > 0;

  const getSkills = (skills, info) => {
    if (info.skills)
      for (let i = 0; i < info.skills.length; i++) {
        let index = skills.findIndex((skill) => skill.id === info.skills[i].id);
        if (index === -1) {
          skills.push(JSON.parse(JSON.stringify(info.skills[i])));
        } else {
          skills[index].level += info.skills[i].level;
        }
      }

    if (info.slots)
      for (let i = 0; i < info.slots.length; i++) {
        if (info.slots[i].decoration) {
          for (let j = 0; j < info.slots[i].decoration.skills.length; j++) {
            let index = skills.findIndex(
              (skill) => skill.id === info.slots[i].decoration.skills[j].id
            );

            if (index === -1) {
              skills.push(
                JSON.parse(JSON.stringify(info.slots[i].decoration.skills[j]))
              );
            } else {
              skills[index].level += info.slots[i].decoration.skills[j].level;
            }
          }
        }
      }
  };

  const getAllSkills = () => {
    const skills = [];

    if (weaponEquipped) getSkills(skills, weapon);
    if (headEquipped) getSkills(skills, head);
    if (chestEquipped) getSkills(skills, chest);
    if (glovesEquipped) getSkills(skills, gloves);
    if (waistEquipped) getSkills(skills, waist);
    if (legsEquipped) getSkills(skills, legs);
    if (charmEquipped) getSkills(skills, charm);

    return skills;
  };

  return (
    <div className="SkillsStatus">
      <div className="SkillStatusTitle">
        <h1>Skills</h1>
      </div>
      <div className="SkillStatusSkills">
        <Skills equipmentSkills={getAllSkills()} />
      </div>
    </div>
  );
}

export default SkillsStatus;
