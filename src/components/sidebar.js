import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './layout.scss';


const Sidebar = ({
  handleSearchChange,
  updateLocation,
  toggleSidebar,
  search,
  locations,
}) => (
  <div>
    <aside className={styles.sidebar}>
      <div className={styles.inline}>
        <h2 className={styles.sidebarTitle}>
          Main Menu
        </h2>
        <button
          type="button"
          aria-label="Open"
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
          role="textbox"
          tabIndex="0"
          placeholder="Filter Locations"
          value={search}
          onChange={handleSearchChange}
        />
        <ul>
          {locations.map(location => (
            <li
              key={location.name}
              tabIndex="2"
              role="button"
            >
              <button
                type="button"
                onClick={() => updateLocation(location.venueId)}
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
  handleSearchChange: PropTypes.func.isRequired,
  updateLocation: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
    venueId: PropTypes.string.isRequired,
  })).isRequired,
};

export default Sidebar;
