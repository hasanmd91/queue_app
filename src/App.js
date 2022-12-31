import React from "react";

import "./App.css";
import Tile from "./components/Tile";
const tileArray = [];

let colors = [
  "red",
  "green",
  "orange",
  "yellow",
  "cadetblue",
  "blueviolet",
  "skyblue",
  "olivedrab",
  "orangered",
];

// queue function

const fillingTiles = (e) => {
  if (!e.target.classList.contains("tile")) return;
  if (tileArray.includes(e.target)) return;
  tileArray.push(e.target);
  e.target.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  if (tileArray.length >= 9) {
    const interval = setInterval(() => {
      const tile = tileArray.shift();
      tile.style.backgroundColor = "";
      if (tileArray.length === 0) {
        clearInterval(interval);
      }
    }, 300);
  }
};

const App = () => {
  const tileClickHandeler = (e) => {
    fillingTiles(e);
  };

  return (
    <div className="container">
      <h4> Queue App </h4>
      <div className="grid">
        <div>
          {" "}
          <Tile clickHandeler={tileClickHandeler} />
          <Tile clickHandeler={tileClickHandeler} />
          <Tile clickHandeler={tileClickHandeler} />
        </div>
        <div>
          {" "}
          <Tile clickHandeler={tileClickHandeler} />
          <Tile clickHandeler={tileClickHandeler} />
          <Tile clickHandeler={tileClickHandeler} />
        </div>
        <div>
          {" "}
          <Tile clickHandeler={tileClickHandeler} />
          <Tile clickHandeler={tileClickHandeler} />
          <Tile clickHandeler={tileClickHandeler} />
        </div>
      </div>
    </div>
  );
};

export default App;
