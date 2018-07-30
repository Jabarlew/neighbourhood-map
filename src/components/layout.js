import React from 'react';
import styles from './layout.scss';
import Map from './map';


const Layout = () => (
  <div className={styles.container}>
    <header>

    </header>

    <main>
      <Map />
    </main>
  </div>
);

export default Layout;
