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
    };
  }

  // filteredPlaces()  {
  //   let name = location.name;

  // }

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
    // const filteredLocations = locations.filter(
    //   (location) => {
    //     return location.name.toLowerCase().indexOf(this.state.search) !== -1;
    //   }
    // );
    const { search } = this.state;
    const filteredLocations = locations
      .filter(location => location.name
        .toLowerCase()
        .includes(search));

    return (
      <Layout
        //  wtf is this shit
        locations={filteredLocations}
        handleSearchChange={this.handleSearchChange}
        updateLocation={this.updateLocation}
        toggleSidebar={this.toggleSidebar}
        {...this.state}
      />
    );
  }
}
