import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './layout.scss';
import Map from './map';
import Sidebar from './sidebar';

class Layout extends React.Component {
  constructor(...args) {
    super(...args);

    this.toggleSidebar = this.toggleSidebar.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  toggleSidebar() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { lat, lng, updateLocation } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={`${styles.container} ${isOpen ? null : styles.on}`}>

        <header className={styles.header}>
          <button type="button" onClick={this.toggleSidebar}>
            <FontAwesomeIcon className={styles.menuIcon} icon="bars" />
          </button>
          <h1>
            Neighbourhood Map
          </h1>
        </header>

        <Sidebar
          updateLocation={updateLocation}
          turnOnSidebar={this.turnOnSidebar}
          {...this.state}
        />

        <main>
          <Map lat={lat} lng={lng} />
        </main>
      </div>
    );
  }
}


Layout.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  updateLocation: PropTypes.func.isRequired,
};

library.add(faTimes, faCoffee, faBars);
export default Layout;
