import { useSkills } from "../../utils/ArmoryContext";
import {
  getArmorIcon,
  getSlotIcon,
  getStatIcon,
  getElementType,
  rarityColor,
} from "../../utils/Icon";
import "./ArmorInfo.css";

function ArmorInfo({ info }) {
  const skills = useSkills();

  const Resistances = () => {
    const resistances = [];
    Object.entries(info.resistances).forEach(([key, value]) => {
      resistances.push(
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

    return resistances;
  };

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
            <img src={getArmorIcon(info.type, info.rarity)} alt={info.rarity} />
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
      <div className="AllInfoStats">
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("defense")} alt="" />
            <h2>Max Defense</h2>
          </div>
          <div className="InfoValue">
            <h2>{info.defense.augmented}</h2>
          </div>
        </div>
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("decoration")} alt="" />
            <h2>Slots</h2>
          </div>
          <div className="InfoValue">
            {[...Array(3)].map((i, j) => {
              return j < info.slots.length ? (
                <div className="InfoSlots" key={j}>
                  <img src={getSlotIcon(info.slots[j].rank)} alt="" />
                </div>
              ) : (
                <div className="InfoSlots" key={j}>
                  -
                </div>
              );
            })}
          </div>
        </div>
        {Resistances()}
      </div>
      <div className="AllInfoSkills">
        <div className="InfoSkillsTitle">
          <h1>Skills</h1>
        </div>
        {Skills()}
      </div>
    </div>
  );
}

export default ArmorInfo;
