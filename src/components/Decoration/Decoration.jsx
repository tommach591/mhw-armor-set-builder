import { useDrag } from "react-dnd";
import { getDecorationIcon } from "../../utils/Icon";
import "./Decoration.css";

function Decoration({ decorationObj, handleSetInfo }) {
  // eslint-disable-next-line no-unused-vars
  const [collected, dragRef, dragPreview] = useDrag(
    () => ({
      type: "DECORATION",
      item: { decoration: decorationObj },
    }),
    [decorationObj]
  );

  const handleMouseOver = () => {
    handleSetInfo("decoration", decorationObj);
  };

  return (
    <div
      className="Decoration"
      onMouseOver={() => handleMouseOver()}
      ref={dragRef}
    >
      <div className="DecorationIcon">
        <img src={getDecorationIcon(decorationObj.slot)} alt="" />
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
