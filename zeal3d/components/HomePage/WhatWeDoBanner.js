import React from 'react';
import styles from '../../styles/Home.module.css';

const WhatWeDoBanner = () => (
  <section style={{ paddingBottom: 130 }}>
    <div style={{ padding: '80px 77px 70px 77px' }}>
      <h2 style={{}}>What We Do</h2>
    </div>
    <div className={styles.wwdBoxesContainer}>
      {[1, 2, 3].map((i, index) => (
        <div className={styles.wwdBox} key={index}>
          <div className={styles.wwdOuterCircle}>
            <div className={styles.wwdInnerCircle}>
              <img src='/assets/wwd1.png' />
            </div>
          </div>
          <h4 style={{ margin: '40px 30px 30px 30px ' }}>3D Planning</h4>
          <p1 style={{ lineHeight: 1.5, fontSize: 18 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p1>
        </div>
      ))}
    </div>
  </section>
);

export default WhatWeDoBanner;
