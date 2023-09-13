"use client";

import {USMap} from "./USMap";
import Marks from "./Marks";

const width = 1200;
const height = 1000;

const Game = () => {
  const data = USMap();

  if (!data) {
    return <pre>Loading...</pre>
  }

  return (
    <div>
      Go from state1 to state2
      <svg width={width} height={height}>
        <Marks data={data}/>
      </svg>
    </div>
  );
}

export default Game;