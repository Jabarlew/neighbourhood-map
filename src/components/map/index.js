import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
} from 'react-google-maps';
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import Loading from '../loading';
import Location from './location';

const GMap = ({ selectedVenuId locations, toggleSidebar }) => {
  const position = locations
    .find(location => location.venueId === selectedVenuId);

  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={position}
      center={position}
      onClick={toggleSidebar}
    >
      {locations.map(location => (
        <Location
          key={location.name}
          isSelected={selectedVenuId === location.venueId}
          {...location}
        />
      ))}
    </GoogleMap>
  );
};

GMap.propTypes = {
  selectedVenuId: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
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
