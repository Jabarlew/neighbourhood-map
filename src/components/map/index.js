import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  // InfoWindow,
} from 'react-google-maps';
import Loading from '../loading';
import locations from '../../locations';


const GMap = ({ lat, lng }) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat, lng }}
    center={{ lat, lng }}
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

GMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};


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
