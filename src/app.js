import React from 'react';
import Layout from './components/layout';
import locations from './locations';

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
      selectedVenueId: null,
    };
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
  }

  updateLocation(selectedVenueId) {
    const selectedLocation = locations
      .find(location => selectedVenueId === location.venueId);

    // important thats how i change state
    this.setState({
      selectedVenueId,
      lat: selectedLocation.position.lat,
      lng: selectedLocation.position.lng,
    });
  }

  toggleSidebar() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { search, selectedVenueId } = this.state;

    const filteredLocations = locations
      .filter(location => location.name
        .toLowerCase()
        .includes(search.toLowerCase()))
      .map(location => ({
        ...location,
        isActive: selectedVenueId === location.venueId,
      }));


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
