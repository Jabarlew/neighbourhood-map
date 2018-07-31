import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './layout.scss';
import locations from '../locations';


const Sidebar = () => (
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
          <li key={location.name}>
            <FontAwesomeIcon className={styles.coffeeIcon} icon="coffee" />
            {location.name}
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);


export default Sidebar;
