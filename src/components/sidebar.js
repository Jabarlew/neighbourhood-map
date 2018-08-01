import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './layout.scss';
import locations from '../locations';


const Sidebar = ({ updateLocation }) => (
  <aside className={styles.sidebar}>
    <div className={styles.inline}>
      <h2 className={styles.sidebarTitle}>
        Main Menu
      </h2>
      <FontAwesomeIcon className={styles.closeButton} icon="times" />
    </div>
    <nav>
      {/* Search */}
      <input type="text" className={styles.input} aria-label="Search" placeholder="Filter Locations" />
      <ul>
        {locations.map(location => (
          <li
            key={location.name}
            onClick={() => updateLocation(location.position.lat, location.position.lng)}
          >
            <FontAwesomeIcon className={styles.coffeeIcon} icon="coffee" />
            {location.name}
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

Sidebar.propTypes = {
  updateLocation: PropTypes.func.isRequired,
}

export default Sidebar;
