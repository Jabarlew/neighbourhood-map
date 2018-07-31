import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCoffee } from '@fortawesome/free-solid-svg-icons';
import styles from './layout.scss';
import Map from './map';
import Sidebar from './sidebar';


const Layout = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1>
        Neighbourhood Map
      </h1>
    </header>

    <Sidebar />

    <main>
      <Map />
    </main>
  </div>
);

library.add(faTimes, faCoffee);
export default Layout;
