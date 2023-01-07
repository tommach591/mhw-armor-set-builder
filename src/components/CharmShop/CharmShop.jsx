import { useCharms } from "../../utils/ArmoryContext";
import Charm from "../Charm";
import "./CharmShop.css";

function CharmShop({ handleSetInfo }) {
  const charms = useCharms();

  return (
    <div className="CharmShop">
      <div className="CharmShopTitle">Charms</div>
      <div className="CharmList">
        {charms.map((charm) => {
          return charm.ranks.map((level) => {
            return (
              <Charm
                key={level.name}
                charmObj={level}
                handleSetInfo={handleSetInfo}
              />
            );
          });
        })}
      </div>
    </div>
  );
}
export default CharmShop;
