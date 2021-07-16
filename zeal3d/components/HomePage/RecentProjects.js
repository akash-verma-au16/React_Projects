import React from 'react';
import styles from '../../styles/Home.module.css';

const RecentProjects = () => (
  <section className={styles.recentProjectSection}>
    <h2>Check Our Recent Project</h2>
    <p
      style={{
        lineHeight: 1.5,
        fontSize: 18,
        fontFamily: 'MontserratLight',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velita.
    </p>
    <img src='/assets/recent-project.png' />
  </section>
);

export default RecentProjects;
