import React from 'react';
import Layout from './components/layout';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <Layout />
    );
  }
}
