import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './layout.scss';
import locations from '../locations';

class Sidebar extends React.Component {
  constructor(...arg) {
    super(...arg);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { updateLocation } = this.props;
    return (
      <aside className={styles.sidebar}>
        <div className={styles.inline}>
          <h2 className={styles.sidebarTitle}>
            Main Menu
          </h2>
          <button type="button" className={styles.closeButton}>
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
        <nav>
          {/* Search */}
          <input type="text" className={styles.input} aria-label="Search" placeholder="Filter Locations" />
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
    );
  }
}

Sidebar.propTypes = {
  updateLocation: PropTypes.func.isRequired,
};

export default Sidebar;
