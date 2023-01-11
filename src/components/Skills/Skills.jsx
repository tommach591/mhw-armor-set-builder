import "./Skills.css";
import { useSkills } from "../../utils/ArmoryContext";

function Skills({ equipmentSkills }) {
  const skills = useSkills();
  const skillComponents = [];

  const Ranks = (skillName, level) => {
    const ranks = [];
    let skill = skills.find((skill) => skill.name === skillName);
    if (skill) {
      for (let i = 0; i < skill.ranks.length; i++) {
        ranks.push(
          skill.ranks[i].level <= level ? (
            <div className="SkillRank Filled" key={i} />
          ) : (
            <div className="SkillRank Empty" key={i} />
          )
        );
      }
    }
    return ranks;
  };

  for (let i = 0; i < equipmentSkills.length; i++) {
    skillComponents.push(
      <div className="InfoSkill" key={i}>
        <h1 className="SkillName">{equipmentSkills[i].skillName}</h1>
        <div className="SkillLevel">
          <div className="SkillSlotRank">
            {Ranks(equipmentSkills[i].skillName, equipmentSkills[i].level)}
          </div>
          <h1 className="SkillSlotLevel">{`Level ${equipmentSkills[i].level}`}</h1>
        </div>
      </div>
    );
  }

  return skillComponents;
}

export default Skills;
