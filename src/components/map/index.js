import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
} from 'react-google-maps';
import Loading from '../loading';
import Location from './location';
//made using instructions from component site
const GMap = ({
  lat,
  lng,
  locations,
  updateLocation,
}) => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat, lng }}
    center={{ lat, lng }}
  >
    {locations.map(location => (
      <Location
        key={location.name}
        {...location}
        updateLocation={updateLocation}
      />
    ))}
  </GoogleMap>
);

GMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  updateLocation: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
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
