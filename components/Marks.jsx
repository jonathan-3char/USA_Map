import { geoPath } from 'd3';

const path = geoPath()


const Marks = ({ data, selStates, twoStates, optimal }) => {

  console.log(data);
  return (<g className="marks">
    {data.features.map(feature => {
      if (twoStates.map(s => s.name).includes(feature.properties.name)) {
        return <path stroke="#000" key={feature.id} fill="green" d={path(feature)}/>
      }
      if (optimal.has(feature.properties.name) && selStates.includes(feature.properties.name)){
        return <path stroke="#000" key={feature.id} fill="blue" d={path(feature)}/>
      }
      if (selStates.includes(feature.properties.name)){
        return <path stroke="#000" key={feature.id} fill="purple" d={path(feature)}/>
      }
      return <path className="path" stroke={"#000"} key={feature.id} d={path(feature)}/>
    })}
  </g>)
} 

export default Marks;
