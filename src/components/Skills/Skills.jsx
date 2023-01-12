import "./Skills.css";
import { useSkills } from "../../utils/ArmoryContext";

function Skills({ equipmentSkills }) {
  const skills = useSkills();
  const skillComponents = [];

  const Ranks = (skill, level) => {
    const ranks = [];
    for (let i = 0; i < skill.ranks.length; i++) {
      ranks.push(
        skill.ranks[i].level <= level ? (
          <div className="SkillRank Filled" key={i} />
        ) : (
          <div className="SkillRank Empty" key={i} />
        )
      );
    }
    return ranks;
  };

  for (let i = 0; i < equipmentSkills.length; i++) {
    let foundSkill = skills.find(
      (skill) => skill.name === equipmentSkills[i].skillName
    );
    skillComponents.push(
      <div className="InfoSkill" key={i}>
        <h1 className="SkillName">{equipmentSkills[i].skillName}</h1>
        <div className="SkillLevel">
          <div className="SkillSlotRank">
            {Ranks(foundSkill, equipmentSkills[i].level)}
          </div>
          <h1 className="SkillSlotLevel">{`Level ${
            equipmentSkills[i].level > foundSkill.ranks.length
              ? foundSkill.ranks.length
              : equipmentSkills[i].level
          }`}</h1>
        </div>
      </div>
    );
  }

  return skillComponents;
}

export default Skills;
