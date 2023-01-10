import { getArmorIcon } from "../../utils/Icon";
import "./Charm.css";

function Charm({ charmObj, handleSetInfo }) {
  const handleMouseOver = () => {
    handleSetInfo("charm", charmObj);
  };

  return (
    <div className="Charm" onMouseOver={() => handleMouseOver()}>
      <div className="CharmIcon">
        <div className={`Rarity${charmObj.rarity}`} />
        <img src={getArmorIcon("charm", charmObj.rarity)} alt="" />
      </div>
      <div className="CharmName">
        <h1>{charmObj.name}</h1>
      </div>
      <div className="CharmSkills">
        {charmObj.skills.map((skill, i) => {
          return <h2 key={i}>{`${skill.skillName} ${skill.level}`}</h2>;
        })}
      </div>
    </div>
  );
}
export default Charm;
