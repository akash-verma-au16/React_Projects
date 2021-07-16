import React from 'react';
import styles from '../../styles/Home.module.css';

const LocalitiesBanner = () => (
  <section>
    <div style={{ padding: '70px 77px 0px 77px' }}>
      <h2>Localities</h2>
      <p style={{ lineHeight: 1.5, fontSize: 18 }}>
        Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod{' '}
        <br></br>tempor incididunt ut labore et.
      </p>
    </div>
    <div className={styles.localitiesContainer}>
      <div className={styles.localitiesBox} style={{ marginLeft: -50 }}>
        <div
          className={styles.localitiesInsideBox}
          style={{ height: '96%', width: '96%', borderRadius: 28 }}
        >
          <img
            src='/assets/localities.png'
            style={{ height: '100%', width: '100%' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              color: 'white',
              left: 30,
              zIndex: 2,
            }}
          >
            <h3 style={{ fontSize: 30, margin: 0 }}>Bandra</h3>
            <p style={{ margin: 0, marginTop: 5, fontSize: 17 }}>
              Sea-facing, spacious
            </p>
          </div>
          <div className={styles.transBlack}></div>
        </div>
      </div>
      <div
        className={styles.localitiesBox}
        style={{ height: 420, width: 550, margin: 50 }}
      >
        <div className={styles.localitiesInsideBox}>
          <img src='/assets/localities.png' style={{ height: '100%' }} />
          <div
            style={{
              position: 'absolute',
              bottom: 30,
              color: 'white',
              left: 30,
              zIndex: 2,
            }}
          >
            <h3 style={{ fontSize: 35, margin: 0 }}>Bandra</h3>
            <p style={{ margin: 0, marginTop: 5, fontSize: 18 }}>
              Sea-facing, spacious
            </p>
          </div>
          <div className={styles.transBlack}></div>
        </div>
      </div>
      <div className={styles.localitiesBox} style={{ marginRight: -50 }}>
        <div
          className={styles.localitiesInsideBox}
          style={{ height: '96%', width: '96%', borderRadius: 28 }}
        >
          <img
            src='/assets/localities.png'
            style={{ height: '100%', width: '100%' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              color: 'white',
              left: 30,
              zIndex: 2,
            }}
          >
            <h3 style={{ fontSize: 30, margin: 0 }}>Bandra</h3>
            <p style={{ margin: 0, marginTop: 5, fontSize: 17 }}>
              Sea-facing, spacious
            </p>
          </div>
          <div className={styles.transBlack}></div>
        </div>
      </div>
    </div>
  </section>
);

export default LocalitiesBanner;
