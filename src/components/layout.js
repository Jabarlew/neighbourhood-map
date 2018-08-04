import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './layout.scss';
import Map from './map';
import Sidebar from './sidebar';


const Layout = ({
  updateLocation,
  toggleSidebar,
  isOpen,
  lat,
  lng,
}) => (
  <div className={`${styles.container} ${isOpen ? null : styles.on}`}>
    <header className={styles.header}>
      <button
        className={styles.openButton}
        type="button"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon className={styles.menuIcon} icon="bars" />
      </button>
      <h1>
        Neighbourhood Map
      </h1>
    </header>

    <Sidebar
      updateLocation={updateLocation}
      toggleSidebar={toggleSidebar}
    />

    <main>
      <Map lat={lat} lng={lng} />
    </main>
  </div>
);


Layout.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  updateLocation: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

library.add(faTimes, faCoffee, faBars);
export default Layout;
