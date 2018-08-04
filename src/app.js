import React from 'react';
import Layout from './components/layout';

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

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  }

  updateLocation(lat, lng) {
    // important thats how i change state
    this.setState({ lat, lng });
  }

  toggleSidebar() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }


  render() {
    return (
      <Layout
        handleSearchChange={this.handleSearchChange}
        updateLocation={this.updateLocation}
        toggleSidebar={this.toggleSidebar}
        {...this.state}
      />
    );
  }
}
