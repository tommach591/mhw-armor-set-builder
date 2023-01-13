import { useDrop } from "react-dnd";
import { getDecorationIcon, getSlotIcon } from "../../utils/Icon";
import "./EquippedSlot.css";

function EquippedSlot({
  type,
  obj,
  index,
  handleSetDecoration,
  handleSetInfo,
}) {
  // eslint-disable-next-line no-unused-vars
  const [collectedProps, dropRef] = useDrop(
    () => ({
      accept: "DECORATION",
      drop: (item, monitor) => {
        handleSetDecoration(type, obj, index, item.decoration);
      },
      collect: (monitor) => {
        return {
          highlight: monitor.canDrop(),
        };
      },
    }),
    [obj]
  );

  return index < obj.slots.length ? (
    <div className="EquippedSlot" key={index}>
      {obj.slots[index].decoration ? (
        <div className="SetDecoration" ref={dropRef}>
          <img
            className="EmptySlot"
            src={getSlotIcon(obj.slots[index].rank)}
            alt=""
          />
          <img
            className="FilledSlot"
            src={getDecorationIcon(obj.slots[index].decoration.slot)}
            alt=""
            onClick={() => handleSetDecoration(type, obj, index, {})}
            onMouseOver={() => {
              handleSetInfo("decoration", obj.slots[index].decoration);
            }}
          />
          {collectedProps.highlight ? <div className="Highlight" /> : <div />}
        </div>
      ) : (
        <div className="SetDecoration" ref={dropRef}>
          <img
            className="EmptySlot"
            src={getSlotIcon(obj.slots[index].rank)}
            alt=""
          />
          {collectedProps.highlight ? <div className="Highlight" /> : <div />}
        </div>
      )}
    </div>
  ) : (
    <div className="EquippedSlot" key={index}>
      <div className="SetDecoration">-</div>
    </div>
  );
}

export default EquippedSlot;
