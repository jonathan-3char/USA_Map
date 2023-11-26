import { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import { usGraph } from "../assets/allStates";

function USAMap({ statesSelected, destStates }) {
  const [stateGeometry, setStateGeometry] = useState(null);

  function statesReachStart(startState, selectedStates) {
    const queue = [startState];
    const statesVisited = new Set(startState);
    const connectingStates = new Set();

    while (queue.length > 0) {
      const state = queue.shift();
      const neighbors = usGraph.get(state);

      for (let neighbor of neighbors) {
        if (selectedStates.includes(neighbor) && !statesVisited.has(neighbor)) {
          connectingStates.add(neighbor);
          statesVisited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return connectingStates;
  }

  function createPath(key, d, className, stroke) {
    return <path key={key} d={d} className={className} stroke={stroke} />;
  }

  function renderChoices() {
    const path = d3.geoPath();
    const paths = [];
    const allStates = stateGeometry.objects.states.geometries;
    const highlightStates = statesReachStart(destStates[1], statesSelected);
    const choices = topojson.feature(
      stateGeometry,
      stateGeometry.objects.states,
    ).features;
    const selectedStatesBorder = stateGeometry.objects.states.geometries.filter(
      (state) =>
        statesSelected.includes(state.properties.name) ||
        destStates.includes(state.properties.name),
    );

    choices.forEach((feature) => {
      if (highlightStates.has(feature.properties.name)) {
        paths.push(
          createPath(feature.id, path(feature), "highlightState", "#fff"),
        );
      } else if (statesSelected.includes(feature.properties.name)) {
        paths.push(createPath(feature.id, path(feature), "states", "#fff"));
      } else if (destStates[0] === feature.properties.name) {
        paths.push(createPath(feature.id, path(feature), "toState", "#fff"));
      } else if (destStates[1] === feature.properties.name) {
        paths.push(createPath(feature.id, path(feature), "fromState", "#fff"));
      }
    });

    // have geometries only include highlighted states
    stateGeometry.objects.states.geometries = selectedStatesBorder;

    paths.push(
      <path
        key={"border"}
        className="stateBorder"
        d={path(
          topojson.mesh(
            stateGeometry,
            stateGeometry.objects.states,
            (a, b) => a !== b,
          ),
        )}
      />,
    );

    // reset geometries to include all states
    stateGeometry.objects.states.geometries = allStates;
    return paths;
  }

  async function renderMap(url) {
    try {
      const response = await fetch(url);
      const usaJson = await response.json();
      setStateGeometry(usaJson);
    } catch (err) {
      <div>Unable to load map</div>;
    }
  }

  useEffect(() => {
    renderMap("https://d3js.org/us-10m.v2.json", statesSelected, destStates);
  }, []);

  return (
    <div className="map">
      <svg className="mapLines">{stateGeometry && renderChoices()}</svg>
    </div>
  );
}

export default USAMap;
