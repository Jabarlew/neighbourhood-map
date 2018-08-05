import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './layout.scss';
import Map from './map';
import Sidebar from './sidebar';


const Layout = ({
  handleSearchChange,
  updateLocation,
  toggleSidebar,
  isOpen,
  lat,
  lng,
  locations,
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
      handleSearchChange={handleSearchChange}
      updateLocation={updateLocation}
      toggleSidebar={toggleSidebar}
      locations={locations}
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
  handleSearchChange: PropTypes.func.isRequired,
  updateLocation: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};


library.add(faTimes, faCoffee, faBars);
export default Layout;
