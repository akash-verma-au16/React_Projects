import React from 'react';
import styles from '../../styles/Developers.module.css';

const ProjectsBanner = () => (
  <div className={styles.bannerContainer}>
    <img
      src='https://images.unsplash.com/photo-1519642918688-7e43b19245d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80'
      alt='..'
      style={{ height: '300px', width: '100%' }}
    />
    <div className={styles.bannerText}>
      <h1>Check your favourite properties selected only for you by Zeal</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias suscipit
        iure consequuntur nulla eveniet expedita molestiae officia, sed
        praesentium quis!
      </p>
    </div>
  </div>
);

export default ProjectsBanner;
