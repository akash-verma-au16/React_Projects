import React from 'react';
import styles from '../../styles/Localities.module.css';

const LocalitiesBanner = () => (
  <div className={styles.bannerContainer}>
    <img
      src='https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80'
      alt='..'
      style={{ height: '300px', width: '100%' }}
    />
    <div className={styles.bannerText}>
      <h1>Best deals Guranteed on your favourite localities by Zeal</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias suscipit
        iure consequuntur nulla eveniet expedita molestiae officia, sed
        praesentium quis!
      </p>
    </div>
  </div>
);

export default LocalitiesBanner;
