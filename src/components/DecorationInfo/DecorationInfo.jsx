import { useSkills } from "../../utils/ArmoryContext";
import { getSlotIcon, rarityColor } from "../../utils/Icon";
import "./DecorationInfo.css";

function DecorationInfo({ info }) {
  const skills = useSkills();

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

  const Skills = () => {
    const skills = [];

    for (let i = 0; i < info.skills.length; i++) {
      skills.push(
        <div className="InfoSkill" key={i}>
          <h1 className="SkillName">{info.skills[i].skillName}</h1>
          <div className="SkillLevel">
            <div className="SkillSlotRank">
              {Ranks(info.skills[i].skillName, info.skills[i].level)}
            </div>
            <h1 className="SkillSlotLevel">{`Level ${info.skills[i].level}`}</h1>
          </div>
        </div>
      );
    }

    return skills;
  };

  return (
    <div className="InfoDetails">
      <div className="InfoIntroduction">
        <div className="InfoName">
          <div className="InfoIcon">
            <div
              className="InfoIconBorder"
              style={{
                borderColor: rarityColor[info.rarity - 1],
              }}
            />
            <div
              className="InfoIconGlow"
              style={{
                boxShadow: `inset 0px 0px 3px 3px ${
                  rarityColor[info.rarity - 1]
                }`,
              }}
            />
            <img src={getSlotIcon(info.slot)} alt={info.rarity} />
          </div>
          <h1>{info.name}</h1>
        </div>
        <div
          className="InfoRarity"
          style={{ color: rarityColor[info.rarity - 1] }}
        >
          <h2>{`Rarity ${info.rarity}`}</h2>
        </div>
      </div>
      <div className="AllInfoSkills">{Skills()}</div>
    </div>
  );
}

export default DecorationInfo;
