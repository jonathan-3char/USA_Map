"use client";

import { useEffect, useState } from 'react';
import Game from '@/components/Game';
import SearchBar from '@/components/SearchBar';
import { states, graph } from '@/utils/states';

const Home = () => {
  const [selStates, setSelStates] = useState([]);
  const [twoRngStates, setTwoRngStates] = useState(null); 
  const handleSelStates = (state) => {
    if (!selStates.includes(state))
      setSelStates([...selStates, state]);
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
    <section className="justify-center w-6/12 mx-auto">
    <div>    
    {twoRngStates && twoRngStates[0].name}{twoRngStates && twoRngStates[1].name}
    </div>
    <Game selStates={selStates} twoStates={twoRngStates} optimal={optimalStates} />
    {selStates.map((state, i) => <p key={i}>{state}</p>)}
    <SearchBar onAddState={handleSelStates}/>
    </section>
  );
}


export default Home;
