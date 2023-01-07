import { getSlotIcon } from "../../utils/Icon";
import "./Decoration.css";

function Decoration({ decorationObj, handleSetInfo }) {
  const handleMouseOver = () => {
    handleSetInfo("decoration", decorationObj);
  };

  return (
    <div className="Decoration" onMouseOver={() => handleMouseOver()}>
      <div className="DecorationIcon">
        <img src={getSlotIcon(decorationObj.slot)} alt="" />
      </div>
      <div className="DecorationName">
        <h1>{decorationObj.name}</h1>
      </div>
      <div className="DecorationSkills">
        {decorationObj.skills.map((skill, i) => {
          return <h2 key={i}>{`${skill.skillName} ${skill.level}`}</h2>;
        })}
      </div>
    </div>
  );
}
export default Decoration;
