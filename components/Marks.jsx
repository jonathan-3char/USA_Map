import { geoPath } from "d3";

const path = geoPath();

const Marks = ({ data, selStates, twoStates, optimal }) => {
  console.log(data);
  const colorStates = data.features.filter(
    (feature) =>
      selStates.find(s => s.name === feature.properties.name) ||
      twoStates.map((s) => s.name).includes(feature.properties.name)
  );
  return (
    <g className="marks">
      {colorStates.map((feature) => {
        if (twoStates.map((s) => s.name).includes(feature.properties.name)) {
          return (
            <path
              stroke="#000"
              key={feature.id}
              fill="green"
              d={path(feature)}
            />
          );
        }
        if (selStates.find(s => s.name === feature.properties.name)) {
          return (
            <path
              stroke="#000"
              key={feature.id}
              fill="purple"
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
