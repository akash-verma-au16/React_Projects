import React from 'react';
import styles from '../../styles/Developers.module.css';
import { RiArrowDownSLine } from 'react-icons/ri';

const ProjectCard = ({ i }) => (
  <div className={styles.projectBox}>
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
        style={{ height: i.name === 'Lodha Group' ? 70 : 140 }}
      />
    </div>
    <div style={{ flex: 1, padding: '5px 30px 20px 30px' }}>
      <h4 style={{ margin: 0 }}>{i.name}</h4>
      <p
        style={{
          fontFamily: 'MontserratRegular',
          fontSize: 21,
          margin: 0,
          marginTop: 10,
          letterSpacing: 0.4,
          color: '#12B7B6',
        }}
      >
        {i.experience}
      </p>
      <h5 style={{ margin: 0, marginTop: 35, color: '#12B7B6' }}>
        <span style={{ fontFamily: 'MontserratRegular', color: '#545454' }}>
          Completed Projects
        </span>
        <span style={{ float: 'right' }}>{i.completed}</span>
      </h5>
      <h5 style={{ margin: 0, marginTop: 16, color: '#12B7B6' }}>
        <span style={{ fontFamily: 'MontserratRegular', color: '#545454' }}>
          Ongoing Projects
        </span>
        <span style={{ float: 'right' }}>{i.ongoing}</span>
      </h5>
      <h5 style={{ margin: 0, marginTop: 16, color: '#12B7B6' }}>
        <span style={{ fontFamily: 'MontserratRegular', color: '#545454' }}>
          Upcoming Projects
        </span>
        <span style={{ float: 'right' }}>{i.upcoming}</span>
      </h5>
      <div className={styles.checkProfileBtn}>
        <h5>Check profile</h5>
        <div className={styles.checkProfileCircleBtn}>
          <RiArrowDownSLine /> <RiArrowDownSLine style={{ marginTop: -20 }} />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
