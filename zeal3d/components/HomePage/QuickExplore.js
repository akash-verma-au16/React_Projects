import React from 'react';
import styles from '../../styles/Home.module.css';

const QuickExplore = () => (
  <section className={styles.quickExploreSection}>
    <div style={{ flex: 0.47, display: 'flex', fontSize: '1vw' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <img src='/assets/quick-explore-1.png' style={{ height: '100%' }} />
        <div
          className={styles.transBlack}
          style={{
            opacity: 0.75,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              position: 'absolute',
              bottom: '8%',
              zIndex: 2,
              fontWeight: 'bold',
              fontSize: 22,
              fontFamily: 'MontserratBold',
              letterSpacing: 1,
            }}
          >
            Ashiyana
          </p>
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <img src='/assets/quick-explore-2.png' style={{ height: '100%' }} />
        <div
          className={styles.transBlack}
          style={{
            opacity: 0.85,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              position: 'absolute',
              bottom: '8%',
              zIndex: 2,
              fontWeight: 'bold',
              fontSize: 22,
              fontFamily: 'MontserratBold',
              letterSpacing: 1,
            }}
          >
            Lodha Miracles
          </p>
        </div>
      </div>
    </div>
    <div
      style={{
        flex: 1,
        background: 'blue',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img src='/assets/quick-explore.png' style={{ width: '100%' }} />
      <div className={styles.transBlack} style={{ opacity: 0.4 }}>
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '10%',
            zIndex: 2,
          }}
        >
          <h3 style={{ margin: 0 }}>Lodha Miracles</h3>
          <p style={{ fontSize: 17, margin: 0, marginTop: 10 }}>
            Andheri East, Mumbai
          </p>
          <p style={{ fontSize: 17, margin: 0, marginTop: 10 }}>
            ₹ 450K - 680K
          </p>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <div className={styles.bhkBox}>1BHK</div>
            <div className={styles.bhkBox}>2BHK</div>
            <div className={styles.bhkBox}>Rental</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default QuickExplore;
