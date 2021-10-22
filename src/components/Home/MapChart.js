/* eslint-disable max-len */
import React from 'react';
import {
  ComposableMap, Geographies, Geography, ZoomableGroup,
} from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = () => (
  <div>
    <ComposableMap>
      <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>{({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}</Geographies>
      </ZoomableGroup>
    </ComposableMap>
  </div>
);

export default MapChart;
