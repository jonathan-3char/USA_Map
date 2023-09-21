"use client";

import { useEffect, useState } from "react";
import Game from "@/components/Game";
import SearchBar from "@/components/SearchBar";
import { graph } from "@/utils/states";

const Home = () => {
  const [selStates, setSelStates] = useState([]);
  const [twoRngStates, setTwoRngStates] = useState(null);
  const [optimalStates, setOptimalStates] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const twoState = [...graph].sort(() => 0.5 - Math.random()).slice(0, 2);
    setTwoRngStates(twoState);
    setOptimalStates(optimalPath(twoState));
    setSelStates([]);
  }, [refresh]);

  const handleSelStates = (state) => {
    if (
      !selStates.find(elt => elt.name === state.name) &&
      !twoRngStates.find(elt => elt.name === state.name)
    ) {
      setSelStates([...selStates, state]);
      return true;
    }

    return false;
  };

  const optimalPath = ([start, end]) => {
    const queue = [start];
    const visited = Array(48).fill(null);
    visited[start.id] = { parent: null, distance: 0 };

    while (queue.length) {
      const node = queue.shift();

      if (node === end) {
        break;
      }

      for (let neighbor of node.neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = {
            parent: node,
            distance: visited[node.id].distance + 1,
          };
          queue.push(graph[neighbor]);
        }
      }
    }

    const optimal = new Set();
    let path = [end];

    while (path.length) {
      const node = path.shift();

      if (node === start) {
        break;
      }

      for (let neighbor of node.neighbors) {
        if (
          visited[neighbor] &&
          visited[neighbor].distance === visited[node.id].distance - 1
        ) {
          optimal.add(graph[neighbor].name);
          path.push(graph[neighbor]);
        }
      }
    }

    optimal.delete(start.name);
    return optimal;
  };
  
  const isWinner = () => {
    const queue = [twoRngStates[0]];
    const visited = new Set();

    while (queue.length) {
      const node = queue.shift();
      visited.add(node.name);

      console.log(node.name)
      if (node.name === twoRngStates[1].name) {
        return true;
      }

      for (let neighbor of node.neighbors) {
        if (!visited.has(graph[neighbor].name) && 
          (selStates.find(state => state.name === graph[neighbor].name) || 
          graph[neighbor].name === twoRngStates[1].name)) {
          console.log(`${graph[neighbor]} pushed to queue`)
          queue.push(graph[neighbor]);
        }
      }
    }

    return false
  };

  return (
    <section>
      <div className="fixed w-60 top-19 ml-0 mr-auto h-full bg-[#9394a5] px-4 py-2 flex flex-col dark:bg-zinc-700">
        <p className="font-bold text-lg text-neutral-700 shrink-0 dark:text-stone-200">States Already Selected</p>
        <ul className="overflow-y-auto h-[88%]">
          {selStates.map((state, i) => {
            if (optimalStates.has(state.name)) {
              return (
                <li className="flex pl-2 align-middle border border-stone-300 rounded-lg mb-2">
                  <div className="my-2 h-7 w-7 mr-4 bg-green-300 rounded border"></div>
                  <p className="text-[#E4E4D0] font-bold dark:text-stone-300" key={i}>
                    {state.name}
                  </p>
                </li>
              );
            }
            return (
              <li className="flex pl-2 align-middle border border-stone-300 rounded-lg mb-2">
                <div className="my-2 h-7 w-7 mr-4 bg-red-400 rounded border"></div>
                <p className="text-[#E4E4D0] font-bold dark:text-stone-300" key={i}>
                  {state.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="justify-center w-6/12 mx-auto">
        <div className="flex">
        <div className="font-bold flex-initial text-2xl mx-auto w-120 text-neutral-700 text-center dark:text-slate-200">
          Go from {twoRngStates && twoRngStates[0].name} to{" "}
          {twoRngStates && twoRngStates[1].name}
        </div>
        <button onClick={() => setRefresh(!refresh)}
          className="bg-[#6c6f91] hover:bg-[#444766] p-2 text-stone-200 font-bold rounded-lg flex-initial dark:bg-stone-500 dark:hover:bg-stone-600"
        >Click to Refresh</button>
      </div>
        <Game
          className="flex-1"
          selStates={selStates}
          twoStates={twoRngStates}
          optimal={optimalStates}
        />
        <div className="h-10"></div>
        <SearchBar onAddState={handleSelStates} winner={twoRngStates && isWinner()} />
      </div>
    </section>
  );
};

export default Home;

const applyDarkMode = () => {
  
}