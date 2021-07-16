import React from 'react';
import styles from '../../styles/Localities.module.css';

const LocalitiesResults = () => (
  <div className={styles.localitiesContainer}>
    <div className={styles.localitiesBox} style={{ marginLeft: 50 }}>
      <div
        className={styles.localitiesInsideBox}
        style={{ height: '96%', width: '96%' }}
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
    <div className={styles.localitiesBox} style={{ marginLeft: 50 }}>
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
    <div className={styles.localitiesBox} style={{ marginLeft: 50 }}>
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
    <div className={styles.localitiesBox} style={{ marginLeft: 50 }}>
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
);

export default LocalitiesResults;
