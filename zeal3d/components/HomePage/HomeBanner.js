import React from 'react';
import styles from '../../styles/Home.module.css';
import { RiSearchLine } from 'react-icons/ri';

const HomeBanner = () => (
  <div className={styles.banner}>
    <div className={styles.bannerLeft}>
      <img className={styles.logoImg} src='/assets/logo.png' alt='Logo' />
      <h1>
        We Help You <br></br>
        Building The Dreams <br></br>& Bring More Than <br></br> You Expect
      </h1>
      <div className={styles.searchBtn}>
        <h4>Search Properties</h4>{' '}
        <RiSearchLine style={{ marginLeft: 15, fontSize: 22 }} />
      </div>
    </div>
    <div>
      <img className={styles.bannerImg} src='/assets/banner.png' alt='Banner' />
    </div>
  </div>
);

export default HomeBanner;
