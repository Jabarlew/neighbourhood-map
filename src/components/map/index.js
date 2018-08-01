import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Loading from '../loading';
import locations from '../../locations';


const GMap = () => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 52.33697552, lng: 14.54754263 }}
  >
    {locations.map(location => (
      <Marker
        key={location.name}
        position={
          location.position
        }
      />
    ))}
    {/* <Marker

      position={{ lat: -34.397, lng: 150.644 }}
    /> */}
  </GoogleMap>
);

// wrapped component lol (Higher Order Component [HOC])
export default compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDPKkyWYaZAbfytTKMz87ImxdiF35-95o4&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <Loading />,
    containerElement: <div style={{ height: '100vh', width: '100vw' }} />,
    mapElement: <div style={{ height: '100vh', width: '100vw' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(GMap);
