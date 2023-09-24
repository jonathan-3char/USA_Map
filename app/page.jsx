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
  const [neighbors, setNeighbors] = useState(null);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const twoState = [...graph].sort(() => 0.5 - Math.random()).slice(0, 2);
    setTwoRngStates(twoState);
    const optimal = optimalPath(twoState);
    setOptimalStates(optimal);
    setSelStates([]);

    const neighbors = new Set();

    optimal.forEach(key => {
      const state = graph.find(state => state.name === key);
      state.neighbors.forEach(neighborId => {
        if (!optimal.has(graph[neighborId].name) && !twoState.includes(graph[neighborId])) {
          neighbors.add(graph[neighborId].name);
        }
      });
    });
   setNeighbors(neighbors); 


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

  const statesList = () => {
    return (
      <div>
      </div>
    )
  }

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

      if (node.name === twoRngStates[1].name) {
        return true;
      }

      for (let neighbor of node.neighbors) {
        if (!visited.has(graph[neighbor].name) && 
          (selStates.find(state => state.name === graph[neighbor].name) || 
          graph[neighbor].name === twoRngStates[1].name)) {
          queue.push(graph[neighbor]);
        }
      }
    }

    return false
  };

  return (
    <section>
        {showList && 
      <div className="fixed max-w-md top-19 ml-0 mr-auto h-full bg-[#9394a5] px-4 py-2 sm:flex flex-col dark:bg-zinc-700">
        <p className="font-bold text-mg text-neutral-700 shrink-0 dark:text-stone-200">States Selected</p>
        <ul className="overflow-y-auto h-[88%]">
          {selStates.map((state, i) => {
            if (optimalStates.has(state.name)) {
              return (
                <li className="flex pl-2 align-middle border border-stone-300 rounded-lg mb-2"
                    key={state.name}
                >
                  <div className="my-2 h-7 w-7 mr-4 bg-green-300 rounded border"></div>
                  <p className="text-[#E4E4D0] font-bold text-sm dark:text-stone-300" key={i}>
                    {state.name}
                  </p>
                </li>
              );
            } else if (neighbors.has(state.name)) {
              return (
                <li className="flex pl-2 align-middle border border-stone-300 rounded-lg mb-2"
                  key={state.name}
                >
                  <div className="my-2 h-7 w-7 mr-4 bg-orange-300 rounded border"></div>
                  <p className="text-[#E4E4D0] font-bold text-sm dark:text-stone-300" key={i}>
                    {state.name}
                  </p>
                </li>
              );
            }
            return (
              <li className="flex pl-2 align-middle border border-stone-300 rounded-lg mb-2"
                  key={state.name}
              >
                <div className="my-2 h-7 w-7 mr-4 bg-red-400 rounded border"></div>
                <p className="text-[#E4E4D0] font-bold text-sm dark:text-stone-300" key={i}>
                  {state.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
        } 
      <div className="fixed max-w-md top-19 ml-0 mr-auto h-full bg-[#9394a5] px-4 py-2 sm:flex hidden flex-col dark:bg-zinc-700">
        <p className="font-bold text-mg text-neutral-700 shrink-0 dark:text-stone-200">States Already Selected</p>
        <ul className="overflow-y-auto h-[88%]">
          {selStates.map((state, i) => {
            if (optimalStates.has(state.name)) {
              return (
                <li className="flex pl-2 align-middle border border-stone-300 rounded-lg mb-2"
                    key={state.name}
                >
                  <div className="my-2 h-7 w-7 mr-4 bg-green-300 rounded border"></div>
                  <p className="text-[#E4E4D0] font-bold dark:text-stone-300" key={i}>
                    {state.name}
                  </p>
                </li>
              );
            } else if (neighbors.has(state.name)) {
              return (
                <li className="flex pl-2 align-middle border border-stone-300 rounded-lg mb-2"
                  key={state.name}
                >
                  <div className="my-2 h-7 w-7 mr-4 bg-orange-300 rounded border"></div>
                  <p className="text-[#E4E4D0] font-bold dark:text-stone-300" key={i}>
                    {state.name}
                  </p>
                </li>
              );
            }
            return (
              <li className="flex pl-2 align-middle border border-stone-300 rounded-lg mb-2"
                  key={state.name}
              >
                <div className="my-2 h-7 w-7 mr-4 bg-red-400 rounded border"></div>
                <p className="text-[#E4E4D0] font-bold dark:text-stone-300" key={i}>
                  {state.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="justify-center w-10/12 mx-auto sm:w-6/12">
        <div className="flex">
        <div className="font-bold flex-initial text-2xl mx-auto w-120 text-neutral-700 text-center dark:text-slate-200">
          Go from {twoRngStates && 
            <p
              className="dark:text-yellow-700 text-yellow-300 inline-block" 
            >{twoRngStates[0].name}</p>} to{" "}
            <p
              className="dark:text-rose-800 text-rose-400 inline-block"
            >{twoRngStates && twoRngStates[1].name}</p>
        </div>
        <button onClick={() => setRefresh(!refresh)}
          className="bg-[#6c6f91] hover:bg-[#444766] text-sm sm:text-lg p-2 text-stone-200 font-bold rounded-lg flex-initial dark:bg-stone-500 dark:hover:bg-stone-600"
        >Click to Refresh</button>
      </div>
        <Game
          className="flex-1"
          selStates={selStates}
          twoStates={twoRngStates}
          optimal={optimalStates}
        />
    <button
      onClick={() => setShowList(!showList)}
      className="mt-3 flex sm:hidden bg-[#6c6f91] hover:bg-[#444766] text-sm text-stone-200 bottom-10 font-bold mx-auto rounded-full p-1 dark:bg-stone-500 dark:hover:bg-stone-600"
    >
    {showList ? "Close List" : "Show States"}
    </button>
        <div className="h-10"></div>
        <SearchBar onAddState={handleSelStates} winner={twoRngStates && isWinner()} />
      </div>
    </section>
  );
};

export default Home;

