import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
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
      // <MarkerWithLabel
      //   key={location.name}
      //   position={
      //     location.position
      //   }
      //   labelAnchor={new google.maps.Point(0, 0)}
      //   labelStyle={{ backgroundColor: 'yellow', fontSize: '32px', padding: '16px' }}
      // >
      //   <div>
      //     {location.name}
      //   </div>
      // </MarkerWithLabel>
    ))}

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
