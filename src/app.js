import React from 'react';
import Layout from './components/layout';
import locations from './locations';
import { getLocation } from './foursquare-api';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);

    // Do this for any function passed as a prop
    this.updateLocation = this.updateLocation.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = {
      lat: 52.34714,
      lng: 14.55062,
      isOpen: false,
      search: '',
      locations,
    };
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
  }

  updateLocation(lat, lng) {
    // important thats how i change state
    this.setState({ lat, lng });
  }

  toggleSidebar() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { search } = this.state;
    const filteredLocations = locations
      .filter(location => location.name
        .toLowerCase()
        .includes(search.toLowerCase()));


    return (
      <Layout
        //  wtf is this shit
        handleSearchChange={this.handleSearchChange}
        updateLocation={this.updateLocation}
        toggleSidebar={this.toggleSidebar}
        {...this.state}
        locations={filteredLocations}
      />
    );
  }
}
