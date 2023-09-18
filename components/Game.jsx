"use client";

import { USMap } from "./USMap";
import Marks from "./Marks";

const width = 980;
const height = 610;

const Game = ({ selStates, twoStates, optimal }) => {
  const data = USMap();

  if (!data) {
    return <pre>Loading...</pre>
  }

  return (
    <div className="mt-2 outline dots outline-[#9394a5] rounded-lg px-2">
      <svg width={width} height={height}>
        <Marks data={data} selStates={selStates} twoStates={twoStates} optimal={optimal}/>
      </svg>
    </div>
  );
}

export default Game;
