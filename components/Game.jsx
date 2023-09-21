"use client";

import { USMap } from "./USMap";
import Marks from "./Marks";

const Game = ({ selStates, twoStates, optimal }) => {
  const data = USMap();

  if (!data) {
    return <pre className="font-bold">Loading...</pre>
  }

  return (
    <div className="border gradient rounded-lg dark:border-zinc-700">
      <svg width="100%" height="100%" viewBox="0 0 980 610" preserveAspectRatio="xMinYMid">
        <Marks data={data} selStates={selStates} twoStates={twoStates} optimal={optimal}/>
      </svg>
    </div>
  );
}

export default Game;
