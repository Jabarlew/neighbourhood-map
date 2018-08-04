import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './layout.scss';
import locations from '../locations';


const Sidebar = ({
  updateLocation,
  toggleSidebar,
}) => (
  <div>
    <aside className={styles.sidebar}>
      <div className={styles.inline}>
        <h2 className={styles.sidebarTitle}>
          Main Menu
        </h2>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => {
            toggleSidebar();
          }}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
      <nav>
        {/* Search */}
        <input
          type="text"
          className={styles.input}
          aria-label="Search"
          placeholder="Filter Locations"
        />
        <ul>
          {locations.map(location => (
            <li key={location.name}>
              <button
                type="button"
                onClick={() => {
                  updateLocation(location.position.lat, location.position.lng);
                }}
              >
                <FontAwesomeIcon className={styles.coffeeIcon} icon="coffee" />
                {location.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  </div>
);

Sidebar.propTypes = {
  updateLocation: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
