import { useWeapon } from "../../utils/HunterContext";
import { getElementType, getStatIcon } from "../../utils/Icon";
import "./AttackStatus.css";

function AttackStatus() {
  const weapon = useWeapon();
  const weaponEquipped = Object.keys(weapon).length > 0;

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
    <div className="AttackStatus">
      <div className="AttackStatusTitle">
        <h1>Attack Status</h1>
      </div>
      <div className="AllAttackStats">
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("attack")} alt="" />
            <h2>Attack</h2>
          </div>
          <div className="InfoValue">
            <h2>{weaponEquipped ? weapon.attack.display : 0}</h2>
          </div>
        </div>
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("sharpness")} alt="" />
            <h2>Sharpness</h2>
          </div>
          <div className="InfoValue">
            {weaponEquipped && weapon.durability
              ? Sharpness(weapon.durability[0])
              : "-"}
          </div>
        </div>
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("affinity")} alt="" />
            <h2>Affinity</h2>
          </div>
          <div className="InfoValue">
            <h2>
              {weaponEquipped && weapon.attributes.affinity
                ? `${weapon.attributes.affinity}%`
                : "-"}
            </h2>
          </div>
        </div>
        <div className="InfoStat">
          <div className="InfoType">
            <img src={getStatIcon("element")} alt="" />
            <h2>Element</h2>
          </div>
          {
            <div className="InfoValue">
              {weaponEquipped && weapon.elements[0] ? (
                <div className="InfoElement">
                  <h2
                    className="ElementType"
                    style={
                      weapon.elements[0].hidden
                        ? { color: "white" }
                        : { color: "gray" }
                    }
                  >
                    <img
                      className="ElementIcon"
                      src={getElementType(weapon.elements[0].type)}
                      alt=""
                    />
                    {weapon.elements[0].type.slice(0, 1).toUpperCase() +
                      weapon.elements[0].type.slice(1)}
                  </h2>
                  <h2
                    style={
                      weapon.elements[0].hidden
                        ? { color: "white" }
                        : { color: "gray" }
                    }
                  >
                    {weapon.elements[0].damage}
                  </h2>
                </div>
              ) : (
                <h2>-</h2>
              )}
            </div>
          }
        </div>
        {weaponEquipped && weapon.elderseal ? (
          <div className="InfoStat">
            <div className="InfoType">
              <img src={getStatIcon("elderseal")} alt="" />
              <h2>Elderseal</h2>
            </div>
            <div className="InfoValue">
              <h2>
                {weapon.elderseal.slice(0, 1).toUpperCase() +
                  weapon.elderseal.slice(1)}
              </h2>
            </div>
          </div>
        ) : (
          <div />
        )}
        {weaponEquipped && weapon.elements[1] ? (
          <div className="InfoStat">
            <div className="InfoType" />
            <div className="InfoValue">
              <div className="InfoElement">
                <h2
                  className="ElementType"
                  style={
                    weapon.elements[1].hidden
                      ? { color: "white" }
                      : { color: "gray" }
                  }
                >
                  <img
                    className="ElementIcon"
                    src={getElementType(weapon.elements[1].type)}
                    alt=""
                  />
                  {weapon.elements[1].type.slice(0, 1).toUpperCase() +
                    weapon.elements[1].type.slice(1)}
                </h2>
                <h2
                  style={
                    weapon.elements[1].hidden
                      ? { color: "white" }
                      : { color: "gray" }
                  }
                >
                  {weapon.elements[1].damage}
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
        {!weaponEquipped || (!weapon.elements[1] && !weapon.elderseal) ? (
          <div className="InfoStat" />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default AttackStatus;
