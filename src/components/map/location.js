import React from 'react';
import PropTypes from 'prop-types';
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';

import { getLocation } from '../../foursquare-api';


const labelStyles = {
  backgroundColor: '#EBEEF2',
  fontSize: '12px',
  padding: '16px',
};


export default class MapLocation extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    venueId: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  };

  static defaultProps = { labelText: null };

  constructor(...args) {
    super(...args);
    this.labelAnchor = new google.maps.Point(0, 0);

    this.state = { labelText: this.props.labelText };
  }

  componentDidMount() {
    getLocation(this.props.venueId)
      .then(({ text }) => {
        this.setState({ labelText: text });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ labelText: 'No data' })
        throw error;
      });
  }

  render() {
    const { labelText } = this.state;
    const { isSelected, position } = this.props;

    return (
      <MarkerWithLabel
        position={position}
        labelAnchor={this.labelAnchor}
        labelStyle={labelStyles}
        animation={isSelected ? google.maps.Animation.BOUNCE : null}
      >
        <div>
          {labelText}
        </div>
      </MarkerWithLabel>
    );
  }
}
