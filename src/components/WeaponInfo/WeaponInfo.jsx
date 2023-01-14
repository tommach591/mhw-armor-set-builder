import {
  getSlotIcon,
  getStatIcon,
  getWeaponIcon,
  getElementType,
  rarityColor,
  getDecorationIcon,
} from "../../utils/Icon";
import Skills from "../Skills";
import "./WeaponInfo.css";

function WeaponInfo({ info }) {
  const getSkills = () => {
    let skills = [];

    for (let i = 0; i < info.slots.length; i++) {
      if (info.slots[i].decoration) {
        for (let j = 0; j < info.slots[i].decoration.skills.length; j++) {
          let index = skills.findIndex(
            (skill) => skill.id === info.slots[i].decoration.skills[j].id
          );

          if (index === -1) {
            skills.push(
              JSON.parse(JSON.stringify(info.slots[i].decoration.skills[j]))
            );
          } else {
            skills[index].level += info.slots[i].decoration.skills[j].level;
          }
        }
      }
    }

    return skills;
  };

  const Sharpness = (sharpness) => {
    const colors = [];
    for (const [key, value] of Object.entries(sharpness)) {
      colors.push(
        <div
          className={`Sharpness${key}`}
          style={{
            width: `${(value / 400) * 100}%`,
          }}
          key={key}
        />
      );
    }

    return <div className="InfoSharpnessBar">{colors}</div>;
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
            <img
              src={getWeaponIcon(info.type, info.rarity)}
              alt={info.rarity}
            />
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
            <img src={getStatIcon("attack")} alt="" />
            <h2>Attack</h2>
          </div>
          <div className="InfoValue">
            <h2>{info.attack.display}</h2>
          </div>
        </div>
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("sharpness")} alt="" />
            <h2>Sharpness</h2>
          </div>
          <div className="InfoValue">
            {info.durability ? Sharpness(info.durability[0]) : "-"}
          </div>
        </div>
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("affinity")} alt="" />
            <h2>Affinity</h2>
          </div>
          <div className="InfoValue">
            <h2>
              {info.attributes.affinity ? `${info.attributes.affinity}%` : "-"}
            </h2>
          </div>
        </div>
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("element")} alt="" />
            <h2>Element</h2>
          </div>
          <div className="InfoValue">
            {info.elements[0] ? (
              <div className="InfoElement">
                <h2
                  className="ElementType"
                  style={
                    info.elements[0].hidden
                      ? { color: "white" }
                      : { color: "gray" }
                  }
                >
                  <img
                    className="ElementIcon"
                    src={getElementType(info.elements[0].type)}
                    alt=""
                  />
                  {info.elements[0].type.slice(0, 1).toUpperCase() +
                    info.elements[0].type.slice(1)}
                </h2>
                <h2
                  style={
                    info.elements[0].hidden
                      ? { color: "white" }
                      : { color: "gray" }
                  }
                >
                  {info.elements[0].damage}
                </h2>
              </div>
            ) : (
              <h2>-</h2>
            )}
          </div>
        </div>
        {info.elderseal ? (
          <div className="InfoStat">
            <div className="InfoType">
              <img src={getStatIcon("elderseal")} alt="" />
              <h2>Elderseal</h2>
            </div>
            <div className="InfoValue">
              <h2>
                {info.elderseal.slice(0, 1).toUpperCase() +
                  info.elderseal.slice(1)}
              </h2>
            </div>
          </div>
        ) : (
          <div />
        )}
        {info.elements[1] ? (
          <div className="InfoStat">
            <div className="InfoType" />
            <div className="InfoValue">
              <div className="InfoElement">
                <h2
                  className="ElementType"
                  style={
                    info.elements[1].hidden
                      ? { color: "white" }
                      : { color: "gray" }
                  }
                >
                  <img
                    className="ElementIcon"
                    src={getElementType(info.elements[1].type)}
                    alt=""
                  />
                  {info.elements[1].type.slice(0, 1).toUpperCase() +
                    info.elements[1].type.slice(1)}
                </h2>
                <h2
                  style={
                    info.elements[1].hidden
                      ? { color: "white" }
                      : { color: "gray" }
                  }
                >
                  {info.elements[1].damage}
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
        {!info.elements[1] && !info.elderseal ? (
          <div className="InfoStat" />
        ) : (
          <div />
        )}
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("decoration")} alt="" />
            <h2>Slots</h2>
          </div>
          <div className="InfoValue">
            {[...Array(3)].map((i, j) => {
              return j < info.slots.length ? (
                <div className="InfoSlots" key={j}>
                  {info.slots[j].decoration ? (
                    <div className="InfoDecoration">
                      <img
                        className="InfoEmptySlot"
                        src={getSlotIcon(info.slots[j].rank)}
                        alt=""
                      />
                      <img
                        className="InfoFilledSlot"
                        src={getDecorationIcon(info.slots[j].decoration.slot)}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="InfoDecoration">
                      <img
                        className="InfoEmptySlot"
                        src={getSlotIcon(info.slots[j].rank)}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="InfoSlots" key={j}>
                  -
                </div>
              );
            })}
          </div>
        </div>
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("defense")} alt="" />
            <h2>Defense</h2>
          </div>
          <div className="InfoValue">
            <h2>
              {info.attributes.defense ? `${info.attributes.defense}` : "-"}
            </h2>
          </div>
        </div>
      </div>

      <div className="AllInfoSkills">
        <div className="InfoSkillsTitle">
          <h1>Skills</h1>
        </div>
        <div className="InfoSkillsList">
          <Skills equipmentSkills={getSkills()} />
        </div>
      </div>
    </div>
  );
}

export default WeaponInfo;
