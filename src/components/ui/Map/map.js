// @flow
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import Marker from './marker';

const Map = withScriptjs(
  withGoogleMap(() => {
    return (
      <GoogleMap defaultZoom={17} center={{ lat: 47.0189064, lng: 28.8303779 }}>
        <Marker marker={{ position: { lat: 47.0189064, lng: 28.8303779 } }} />
      </GoogleMap>
    );
  }),
);

export default Map;
