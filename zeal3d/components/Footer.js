import React from 'react';
import styles from '../styles/Home.module.css';
import { BsArrowRight } from 'react-icons/bs';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerLeft}>
      <img src='/assets/footer-image.png' />
    </div>
    <div className={styles.footerRight}>
      <img src='/assets/footer-logo.png' />
      <p
        style={{
          color: '#a8a8a8',
          lineHeight: 2,
          fontSize: 17,
          letterSpacing: 0.5,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
        tempor incididunt ut labore et.
      </p>
      <input type='text' placeholder='Your Name' />
      <input
        type='text'
        placeholder='yourmailaddressplease@mail.com'
        style={{ marginTop: 25 }}
      />
      <div className={styles.footerBtn}>
        <h4>Get in Touch With Us </h4>
        <BsArrowRight style={{ fontSize: 35, marginLeft: 15 }} />
      </div>
    </div>
  </footer>
);

export default Footer;
