import React from 'react';
import styles from '../../styles/Home.module.css';
import { RiArrowDownSLine } from 'react-icons/ri';

const ProjectBanner = () => {
  const projects = [
    {
      logoSrc: '/assets/lodha.png',
      name: 'Lodha Group',
      experience: '35+ years of experience',
      done: '140+ Projects Done',
    },
    {
      logoSrc: '/assets/prestige.png',
      name: 'Prestige Group',
      experience: '35+ years of experience',
      done: '140+ Projects Done',
    },
    {
      logoSrc: '/assets/brigade.png',
      name: 'Brigade Group',
      experience: '35+ years of experience',
      done: '140+ Projects Done',
    },
    {
      logoSrc: '/assets/brigade.png',
      name: 'Brigade Group',
      experience: '35+ years of experience',
      done: '140+ Projects Done',
    },
  ];

  return (
    <div className={styles.projectContainer}>
      {projects.map((i, index) => (
        <div key={index} className={styles.projectBox}>
          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={i.logoSrc}
              alt='Brand Logo'
              style={{ height: i.name === 'Lodha Group' ? 90 : 172 }}
            />
          </div>
          <div style={{ flex: 1, padding: '5px 30px 20px 30px' }}>
            <h4 style={{ margin: 0 }}>{i.name}</h4>
            <p
              style={{
                fontFamily: 'MontserratRegular',
                fontSize: 19,
                margin: 0,
                marginTop: 10,
                letterSpacing: 0.4,
              }}
            >
              {i.experience}
            </p>
            <h5 style={{ margin: 0, marginTop: 15, color: '#12B7B6' }}>
              {i.done}
            </h5>
            <div className={styles.checkProfileBtn}>
              <h5>Check profile</h5>
              <div className={styles.checkProfileCircleBtn}>
                <RiArrowDownSLine />{' '}
                <RiArrowDownSLine style={{ marginTop: -20 }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectBanner;
