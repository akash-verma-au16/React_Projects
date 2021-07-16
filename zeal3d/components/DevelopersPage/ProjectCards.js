import React from 'react';
import styles from '../../styles/Developers.module.css';
import ProjectCard from './ProjectCard';
import SortButton from '../SortButton';

const ProjectCards = ({ projects }) => (
  <div className={styles.projectContainer}>
    {projects.map((i, index) =>
      index === 1 ? (
        <div key={index} style={{ margin: 0 }}>
          <SortButton />
          <ProjectCard i={i} />
        </div>
      ) : (
        <div key={index}>
          <br />
          <ProjectCard i={i} />
        </div>
      )
    )}
  </div>
);

export default ProjectCards;
