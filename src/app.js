import React from 'react';
import Layout from './components/layout';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);

    // Do this for any function passed as a prop
    this.updateLocation = this.updateLocation.bind(this);

    this.state = {
      lat: 52.34714,
      lng: 14.55062,
    };
  }

  updateLocation(lat, lng) {
    // important thats how i change state
    this.setState({ lat, lng });
  }

  render() {
    console.log(this.state);
    return (
      <Layout updateLocation={this.updateLocation} {...this.state} />
    );
  }
}
