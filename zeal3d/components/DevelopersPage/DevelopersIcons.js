import React from 'react';
import styles from '../../styles/Developers.module.css';

const DevelopersIcons = ({ projects }) => (
  <div className={styles.projectIconsContainer}>
    {projects.map((i, index) => (
      <img
        key={index}
        src={i.logoSrc}
        alt='Brand Logo'
        style={{ height: i.name === 'Lodha Group' ? 50 : 100 }}
      />
    ))}
  </div>
);

export default DevelopersIcons;
