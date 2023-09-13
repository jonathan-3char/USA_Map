import { geoGraticule, geoAlbers, geoPath, geoEqualEarth } from 'd3';

const projection = geoAlbers();
const path = geoPath()

const graticule = geoGraticule();

const Marks = ({ data }) => {

  console.log(data);
  return (<g className="marks">
    {data.features.map(feature => {
      return <path stroke={"#000"} key={feature.id} d={path(feature)}/>
    })}
  </g>)
} 

export default Marks;