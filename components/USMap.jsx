"use client";

import * as d3 from 'd3';
import { feature } from 'topojson';
import { useEffect, useState } from 'react';

const jsonUrl = "https://d3js.org/us-10m.v2.json";

export const USMap = () => {
  const [data, setData] = useState(null);

  
  const handleJSONData = async () => {
    const data = await d3.json(jsonUrl);
    setData(feature(data, data.objects.states));
  }

  useEffect(() => {
    handleJSONData();
  }, []);

  return data;
}