import "./Wallpaper.css";
import { useState } from "react";

function Wallpaper() {
  const background = [
    "https://images2.alphacoders.com/881/881826.png",
    "https://images4.alphacoders.com/844/844964.jpg",
    "https://images7.alphacoders.com/101/1014252.jpg",
    "https://images4.alphacoders.com/900/900718.jpg",
    "https://wallpaperaccess.com/full/1926141.jpg",
    "https://images6.alphacoders.com/101/1012987.jpg",
  ];

  const [wallpaper, setWallpaper] = useState(0);

  return (
    <div className="Wallpaper">
      <img src={background[wallpaper]} alt="" />
      <div className="Dropdown">
        <label>Wallpaper: </label>
        <select
          name="wallpaper"
          onChange={(event) => {
            setWallpaper(event.currentTarget.value);
          }}
        >
          <option value={0}>New World</option>
          <option value={1}>Turf War</option>
          <option value={2}>Elder's Recess</option>
          <option value={3}>Nergigante</option>
          <option value={4}>Iceborne</option>
          <option value={5}>Flagships</option>
        </select>
      </div>
    </div>
  );
}

export default Wallpaper;
