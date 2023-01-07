import { useDecorations } from "../../utils/ArmoryContext";
import Decoration from "../Decoration";
import "./DecorationShop.css";

function DecorationShop({ handleSetInfo }) {
  const decorations = useDecorations();
  decorations.sort((a, b) => {
    return a.rarity - b.rarity;
  });

  return (
    <div className="DecorationShop">
      <div className="DecorationShopTitle">Decorations</div>
      <div className="DecorationList">
        {decorations.map((decoration, i) => {
          return (
            <Decoration
              key={i}
              decorationObj={decoration}
              handleSetInfo={handleSetInfo}
            />
          );
        })}
      </div>
    </div>
  );
}
export default DecorationShop;
