import { geoPath } from "d3";

const path = geoPath();

const Marks = ({ data, selStates, twoStates, optimal }) => {
  const colorStates = data.features.filter(
    (feature) =>
      selStates.find(s => s.name === feature.properties.name) ||
      twoStates.map((s) => s.name).includes(feature.properties.name)
  );
  return (
    <g className="marks">
      {colorStates.filter(f => f.properties.name != "Alaska" || f.properties.name != "Hawaii").map((feature) => {
        if (twoStates[0].name === feature.properties.name) {
          return (
            <path
              stroke="#000"
              key={feature.id}
              d={path(feature)}
              className="dark:fill-yellow-700 fill-yellow-300"
            />
          );
        }
        if (twoStates[1].name === feature.properties.name) {
          return (
            <path
              stroke="#000"
              key={feature.id}
              d={path(feature)}
              className="dark:fill-rose-800 fill-rose-400"
            />
          );
        }
        if (selStates.find(s => s.name === feature.properties.name)) {
          return (
            <path
              stroke="#000"
              key={feature.id}
              className="dark:fill-indigo-700 fill-indigo-300"
              d={path(feature)}
            />
          );
        }
        return (
          <path
            className="path"
            fill-opacity="0.0"
            key={feature.id}
            d={path(feature)}
          />
        );
      })}
    </g>
  );
};

export default Marks;
