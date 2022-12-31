import React from "react";

const Tile = ({ clickHandeler, clicked }) => {
  return <div className="tile" onClick={clickHandeler}></div>;
};

export default Tile;
