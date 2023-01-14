import {
  useCharm,
  useCharmUpdate,
  useChest,
  useChestUpdate,
  useGloves,
  useGlovesUpdate,
  useHead,
  useHeadUpdate,
  useLegs,
  useLegsUpdate,
  useWaist,
  useWaistUpdate,
  useWeapon,
  useWeaponUpdate,
} from "../../utils/HunterContext";
import { getArmorIcon, getWeaponIcon } from "../../utils/Icon";
import { GreekReplacer } from "../../utils/TextDecorator";
import { useMobile } from "../../utils/useMobile";
import EquippedSlot from "../EquippedSlot";
import "./Equipped.css";

function Equipped({ handleSetInfo, changeWindow }) {
  const weapon = useWeapon();
  const head = useHead();
  const chest = useChest();
  const gloves = useGloves();
  const waist = useWaist();
  const legs = useLegs();
  const charm = useCharm();

  const handleSetWeapon = useWeaponUpdate();
  const handleSetHead = useHeadUpdate();
  const handleSetChest = useChestUpdate();
  const handleSetGloves = useGlovesUpdate();
  const handleSetWaist = useWaistUpdate();
  const handleSetLegs = useLegsUpdate();
  const handleSetCharm = useCharmUpdate();

  const isMobile = useMobile();

  const handleUnequip = (type) => {
    switch (type) {
      case "weapon":
        handleSetWeapon({});
        break;
      case "head":
        handleSetHead({});
        break;
      case "chest":
        handleSetChest({});
        break;
      case "gloves":
        handleSetGloves({});
        break;
      case "waist":
        handleSetWaist({});
        break;
      case "legs":
        handleSetLegs({});
        break;
      case "charm":
        handleSetCharm({});
        break;
      default:
        break;
    }
  };

  const handleSetDecoration = (type, obj, index, decoration) => {
    if (obj.slots[index].rank < decoration.slot) return;
    let temp = JSON.parse(JSON.stringify(obj));
    if (Object.keys(decoration).length === 0)
      delete temp.slots[index].decoration;
    else temp.slots[index].decoration = JSON.parse(JSON.stringify(decoration));

    switch (type) {
      case "weapon":
        handleSetWeapon(temp);
        break;
      case "head":
        handleSetHead(temp);
        break;
      case "chest":
        handleSetChest(temp);
        break;
      case "gloves":
        handleSetGloves(temp);
        break;
      case "waist":
        handleSetWaist(temp);
        break;
      case "legs":
        handleSetLegs(temp);
        break;
      case "charm":
        handleSetCharm(temp);
        break;
      default:
        break;
    }
  };

  const NoEquipment = (type) => {
    return (
      <div className="EquippedPiece">
        <div className="EquippedIntroduction">
          <div className="EquippedPieceIcon" />
          <h1 className="EquippedPieceName" style={{ color: "gray" }}>
            No Equipment
          </h1>
        </div>
        {type !== "charm" ? (
          <div className="EquippedSlots">
            {[...Array(3)].map((i, j) => {
              return (
                <div className="EquippedSlot" key={j}>
                  <div className="SetDecoration">-</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  };

  const EquippedPiece = (type, obj) => {
    return (
      <div className="EquippedPiece">
        <div
          className="EquippedIntroduction"
          onMouseOver={() => {
            type === "weapon" || type === "charm"
              ? handleSetInfo(type, obj)
              : handleSetInfo("armor", obj);
          }}
        >
          <div
            className="EquippedPieceIcon"
            onClick={() => {
              handleUnequip(type);
            }}
          >
            <img
              src={
                type === "weapon"
                  ? getWeaponIcon(obj.type, obj.rarity)
                  : getArmorIcon(type, obj.rarity)
              }
              alt=""
            />
          </div>
          <h1 className="EquippedPieceName">{GreekReplacer(obj.name)}</h1>
        </div>
        {type !== "charm" ? (
          <div className="EquippedSlots">
            {[...Array(3)].map((i, j) => {
              return (
                <EquippedSlot
                  key={j}
                  type={type}
                  obj={obj}
                  index={j}
                  handleSetDecoration={handleSetDecoration}
                  handleSetInfo={handleSetInfo}
                />
              );
            })}
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  };

  return (
    <div className="Equipped">
      <div
        className="EquippedTitle"
        onClick={() => {
          if (isMobile) changeWindow();
        }}
      >
        <h1>Equipped</h1>
      </div>
      {weapon.name ? EquippedPiece("weapon", weapon) : NoEquipment("weapon")}
      {head.name ? EquippedPiece("head", head) : NoEquipment("head")}
      {chest.name ? EquippedPiece("chest", chest) : NoEquipment("chest")}
      {gloves.name ? EquippedPiece("gloves", gloves) : NoEquipment("gloves")}
      {waist.name ? EquippedPiece("waist", waist) : NoEquipment("waist")}
      {legs.name ? EquippedPiece("legs", legs) : NoEquipment("legs")}
      {charm.name ? EquippedPiece("charm", charm) : NoEquipment("charm")}
      <div className="EquippedFooter">
        <h1>Drag and drop decorations to set decorations</h1>
      </div>
    </div>
  );
}

export default Equipped;
