"use client";

import { USMap } from "./USMap";
import Marks from "./Marks";

const width = 960;
const height = 600;

const Game = ({ selStates, twoStates, optimal }) => {
  const data = USMap();

  if (!data) {
    return <pre>Loading...</pre>
  }

  return (
    <div>
      <svg width={width} height={height}>
        <Marks data={data} selStates={selStates} twoStates={twoStates} optimal={optimal}/>
      </svg>
    </div>
  );
}

export default Game;
