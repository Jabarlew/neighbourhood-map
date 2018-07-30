import React from 'react';
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

export default Layout;
