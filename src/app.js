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
    this.loadFoursquare = this.loadFoursquare.bind(this);

    this.state = {
      lat: 52.34714,
      lng: 14.55062,
      isOpen: false,
      search: '',
      tips: [],
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

  loadFoursquare() {
    locations.map((location) => {
      const clientId = 'GUEEPUM3XETDN2NNCGSXNK5CJWM1VSNRG4DLTW4OIBUHWS20';
      const clientSecret = 'U1NF0B1SIAPJEQFNY4F1FFFQUU5TOL1IJXDWLJ51MK155AGL';
      const url = `https://api.foursquare.com/v2/venues/${location.venueId}/tips?&client_id=${clientId}&client_secret=${clientSecret}&v=20180725`;

      fetch(url).then((res) => {
        res.json().then((resp) => {
          console.log(resp.tip);
          this.setState({ tips: resp.tip });
        });
      });
    });
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
        loadFoursquare={this.loadFoursquare}
        {...this.state}
        locations={filteredLocations}
      />
    );
  }
}
