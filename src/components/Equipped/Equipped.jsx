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
import { getArmorIcon, getSlotIcon, getWeaponIcon } from "../../utils/Icon";
import { GreekReplacer } from "../../utils/TextDecorator";
import "./Equipped.css";

function Equipped({ handleSetInfo }) {
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

  const NoEquipment = () => {
    return (
      <div className="EquippedPiece">
        <div className="EquippedIntroduction">
          <div className="EquippedPieceIcon" />
          <h1 className="EquippedPieceName" style={{ color: "gray" }}>
            No Equipment
          </h1>
        </div>
        <div className="EquippedSlots">
          {[...Array(3)].map((i, j) => {
            return (
              <div className="InfoSlots" key={j}>
                -
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const EquippedPiece = (type, obj) => {
    return (
      <div
        className="EquippedPiece"
        onMouseOver={() => {
          type === "weapon" || type === "charm"
            ? handleSetInfo(type, obj)
            : handleSetInfo("armor", obj);
        }}
        onClick={() => {
          handleUnequip(type);
        }}
      >
        <div className="EquippedIntroduction">
          <div className="EquippedPieceIcon">
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
              return j < obj.slots.length ? (
                <div className="InfoSlots" key={j}>
                  <img src={getSlotIcon(obj.slots[j].rank)} alt="" />
                </div>
              ) : (
                <div className="InfoSlots" key={j}>
                  -
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

  return (
    <div className="Equipped">
      <div className="EquippedTitle">
        <h1>Equipped</h1>
      </div>
      {weapon.name ? EquippedPiece("weapon", weapon) : NoEquipment()}
      {head.name ? EquippedPiece("head", head) : NoEquipment()}
      {chest.name ? EquippedPiece("chest", chest) : NoEquipment()}
      {gloves.name ? EquippedPiece("gloves", gloves) : NoEquipment()}
      {waist.name ? EquippedPiece("waist", waist) : NoEquipment()}
      {legs.name ? EquippedPiece("legs", legs) : NoEquipment()}
      {charm.name ? (
        EquippedPiece("charm", charm)
      ) : (
        <div className="EquippedPiece">
          <div className="EquippedIntroduction">
            <div className="EquippedPieceIcon" />
            <h1 className="EquippedPieceName" style={{ color: "gray" }}>
              No Equipment
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Equipped;
