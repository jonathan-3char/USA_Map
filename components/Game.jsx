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
    <div className="border gradient">
      <svg width="auto" height="auto" viewBox="0 0 980 610" preserveAspectRatio="xMinYMid">
        <Marks data={data} selStates={selStates} twoStates={twoStates} optimal={optimal}/>
      </svg>
    </div>
  );
}

export default Game;
