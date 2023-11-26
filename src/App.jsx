import "./App.css";
import InputBar from "./components/InputBar";
import NavBar from "./components/NavBar";
import ResultGrid from "./components/ResultGrid";
import USAMap from "./components/USAMap";
import { stateNames, usGraph } from "./assets/allStates";
import { useState, useEffect } from "react";
import Popup from "./components/Popup";

// given two states, this function will return a set of states that
// are included in the optimal path
function calcOptimalPath(stateFrom, stateTo) {
  const visitedStates = new Set([stateFrom]);
  const bfsStack = [{ dist: 0, name: stateFrom }];
  const backTrackDist = new Map([[stateFrom, 0]]);
  const optimalPath = [];

  while (bfsStack.length > 0) {
    const { dist, name } = bfsStack.shift();
    // found the other state
    if (name === stateTo) {
      backTrackDist.set(name, dist);
      break;
    }

    const neighbors = usGraph.get(name);

    for (let neighbor of neighbors) {
      if (!visitedStates.has(neighbor)) {
        bfsStack.push({ dist: dist + 1, name: neighbor });
        backTrackDist.set(neighbor, dist + 1);
        visitedStates.add(neighbor);
      }
    }
  }

  const backTrackStack = [stateTo];
  const backTrackVisted = new Set(stateTo);

  while (backTrackStack.length > 0) {
    const stateName = backTrackStack.shift();

    // found starting state
    if (stateName === stateFrom) {
      break;
    }

    const neighbors = usGraph.get(stateName);
    const stateDist = backTrackDist.get(stateName);

    for (let neighbor of neighbors) {
      if (
        !backTrackVisted.has(neighbor) &&
        backTrackDist.has(neighbor) &&
        backTrackDist.get(neighbor) === stateDist - 1
      ) {
        backTrackVisted.add(neighbor);
        backTrackStack.push(neighbor);
        optimalPath.push(neighbor);
      }
    }
  }

  return optimalPath.filter((state) => state !== stateFrom);
}

function doStatesConnect(stateFrom, stateTo, resultList) {
  const stack = [stateFrom];
  const statesVisited = new Set(stateFrom);

  while (stack.length > 0) {
    const state = stack.pop();
    const neighbors = usGraph.get(state);

    for (let neighbor of neighbors) {
      if (neighbor === stateTo) {
        return true;
      }

      if (!statesVisited.has(neighbor) && resultList.indexOf(neighbor) !== -1) {
        stack.push(neighbor);
        statesVisited.add(neighbor);
      }
    }
  }

  return false;
}

function App() {
  const [resultList, setResultList] = useState([]);
  const [stateFrom, setStateFrom] = useState(
    stateNames[Math.floor(Math.random() * stateNames.length)],
  );
  const neighborStates = [...usGraph.get(stateFrom)];
  neighborStates.push(stateFrom);
  const filteredStates = stateNames.filter(
    (state) => neighborStates.indexOf(state) === -1,
  );
  const [stateTo, setStateTo] = useState(
    filteredStates[Math.floor(Math.random() * filteredStates.length)],
  );
  const [optimalPath, setOptimalPath] = useState(
    calcOptimalPath(stateFrom, stateTo),
  );
  const subOptimalPath = new Set();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const body = document.querySelector("body");
    if (localStorage.getItem("theme")) {
      body.setAttribute("data-theme", localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", theme);
      body.setAttribute("data-theme", theme);
    }

    console.log(localStorage.getItem("theme"));
    console.log(theme);
  }, [theme]);

  function handleToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  function handleMenuVisibility(isVisible) {
    setToggleMenu(isVisible);
  }

  optimalPath.forEach((state) =>
    usGraph.get(state).forEach((neighbor) => {
      if (
        optimalPath.indexOf(neighbor) === -1 &&
        (neighbor !== stateFrom || neighbor !== stateTo)
      ) {
        subOptimalPath.add(neighbor);
      }
    }),
  );

  function handleNewResult(result) {
    setResultList([...resultList, result]);
  }

  const isWinner = doStatesConnect(stateFrom, stateTo, resultList);

  return (
    <>
      <NavBar
        handlePopup={handleMenuVisibility}
        handleToggleTheme={handleToggleTheme}
      />
      {toggleMenu && <Popup handlePopup={handleMenuVisibility} />}
      <div className="container">
        <h1>
          <span className="textRed">{stateFrom}</span> {" to "}
          <span className="textBurgendy">{stateTo}</span>
        </h1>
        {isWinner && (
          <div className="winScreen">You won! Refresh to play again</div>
        )}
        <USAMap statesSelected={resultList} destStates={[stateTo, stateFrom]} />
        <InputBar
          onEnter={handleNewResult}
          resultList={resultList}
          stateTo={stateTo}
          stateFrom={stateFrom}
          isWinner={isWinner}
        />
        <ResultGrid
          resultList={resultList}
          optimalPath={optimalPath}
          subOptimalPath={subOptimalPath}
        />
      </div>
    </>
  );
}

export default App;
