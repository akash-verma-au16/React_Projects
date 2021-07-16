import React from 'react';
import styles from '../styles/Home.module.css';
import { RiMenuFill } from 'react-icons/ri';

const Header = ({ navMenu, activeNav, setActiveNav }) => (
  <header className={styles.navSection}>
    <div>
      <img className={styles.navLogoImg} src='/assets/logo.png' alt='Logo' />
    </div>
    <div className={styles.navContainer}>
      {navMenu.map((i) => (
        <div
          onClick={() => setActiveNav(i)}
          className={`${styles.navItems} ${
            i === activeNav ? styles.navActiveBtn : styles.navNotActiveBtn
          }`}
          key={i}
        >
          <h5>{i}</h5>
        </div>
      ))}
      <div className={styles.navMenuBtn}>
        <RiMenuFill style={{ fontSize: 30 }} />
      </div>
    </div>
  </header>
);

export default Header;
