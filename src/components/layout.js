import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCoffee } from '@fortawesome/free-solid-svg-icons';
import styles from './layout.scss';
import Map from './map';
import Sidebar from './sidebar';

const Layout = ({ lat, lng, updateLocation }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1>
        Neighbourhood Map
      </h1>
    </header>

    <Sidebar updateLocation={updateLocation} />

    <main>
      <Map lat={lat} lng={lng} />
    </main>
  </div>
);

Layout.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  updateLocation: PropTypes.func.isRequired,
};

library.add(faTimes, faCoffee);
export default Layout;
