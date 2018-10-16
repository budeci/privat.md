// @flow

import React, { PureComponent } from 'react';
import Map from './map';

const MapContainer = props => (
  <Map
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDp9s0ogWAlenPHBgnPvuTElLJ7jFgam1c&v=3.exp`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={
      <div style={{ height: props.height, width: props.width }} />
    }
    mapElement={<div style={{ height: `100%` }} />}
  />
);
export default MapContainer;
