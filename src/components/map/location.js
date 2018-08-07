import React from 'react';
import PropTypes from 'prop-types';
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';

import { getLocation } from '../../foursquare-api';


const labelStyles = {
  backgroundColor: '#EBEEF2',
  fontSize: '12px',
  padding: '16px',
  width: '200px',
  borderRadius: '10px',
};


export default class MapLocation extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    venueId: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
    updateLocation: PropTypes.func.isRequired,
  };

  static defaultProps = { labelText: null };

  constructor(...args) {
    super(...args);
    this.labelAnchor = new google.maps.Point(0, 0);
    const { labelText } = this.props;
    this.state = {
      labelText,
    };
  }

  componentDidMount() {
    const { venueId } = this.props;
    getLocation(venueId)
      .then(({ text }) => {
        this.setState({ labelText: text });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ labelText: 'No data' });
        throw error;
      });
  }

  render() {
    const { labelText } = this.state;
    const {
      position,
      isActive,
      venueId,
      updateLocation,
    } = this.props;

    return (
      <MarkerWithLabel
        position={position}
        labelAnchor={this.labelAnchor}
        labelStyle={labelStyles}
        animation={isActive ? google.maps.Animation.BOUNCE : null}
        onClick={() => updateLocation(venueId)}
      >
        <div>
          {labelText}
          <br />
          powered by
          <a href="https://foursquare.com/">
            Foursquare
          </a>
        </div>
      </MarkerWithLabel>
    );
  }
}
