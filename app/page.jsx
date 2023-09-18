"use client";

import { useEffect, useState } from 'react';
import Game from '@/components/Game';
import SearchBar from '@/components/SearchBar';
import { states, graph } from '@/utils/states';

const Home = () => {
  const [selStates, setSelStates] = useState([]);
  const [twoRngStates, setTwoRngStates] = useState(null); 
  const handleSelStates = (state) => {
    if (!selStates.includes(state) && !twoRngStates.find(elt => elt.name === state)) {
      setSelStates([...selStates, state]);
      return true;
    }
    else
      return false;
  }
  const [optimalStates, setOptimalStates] = useState(null);


  useEffect(() => {
    const twoState = [...graph].sort(() => 0.5 - Math.random()).slice(0, 2);
    setTwoRngStates(twoState);
    setOptimalStates(optimalPath(twoState));
  }, [])

  const optimalPath = ([ start, end ]) => {
    const queue = [start];
    const visited = Array(48).fill(null);
    visited[start.id] = {parent: null, distance: 0};

    while (queue.length) {
      const node = queue.shift();

      if (node === end) {
        break;
      }

      for (let neighbor of node.neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = {
            parent: node,
            distance: visited[node.id].distance + 1
          } 
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
        if (visited[neighbor] && visited[neighbor].distance === visited[node.id].distance - 1) {
          optimal.add(graph[neighbor].name);
          path.push(graph[neighbor]);
        }
      }
    }

    optimal.delete(start.name);
    return optimal;
  }



  return (
    <section className="">
    <div className="fixed w-60 top-19 left-0 h-full bg-[#9394a5] px-4 py-2">
    <p className="font-bold text-lg">States Already Selected</p>
    {selStates.map((state, i) =><div className="flex align-middle outline rounded-lg mb-2"> 
      <div className="my-2 h-7 w-7 mr-4 bg-green-200 rounded outline"></div> 
      <p className="text-[#E4E4D0] font-bold" key={i}>{state}</p>
      </div>)}
    </div>
    <div className="justify-center w-6/12 mx-auto">
    <div className="font-bold text-2xl mx-auto w-120 text-center">    
    Go from {twoRngStates && twoRngStates[0].name} to {twoRngStates && twoRngStates[1].name}
    </div>
    <Game selStates={selStates} twoStates={twoRngStates} optimal={optimalStates} />
    <div className="h-10"></div>
    <SearchBar onAddState={handleSelStates}/>
    </div>
    </section>
  );
}


export default Home;
