import React from 'react';
import styles from '../../styles/Developers.module.css';

const DevelopersBanner = () => (
  <div className={styles.bannerContainer}>
    <img
      src='https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      alt='..'
      style={{ height: '300px', width: '100%' }}
    />
    <div className={styles.bannerText}>
      <h1>Check India's biggest developers on board exclusive on Zeal</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias suscipit
        iure consequuntur nulla eveniet expedita molestiae officia, sed
        praesentium quis!
      </p>
    </div>
  </div>
);

export default DevelopersBanner;
