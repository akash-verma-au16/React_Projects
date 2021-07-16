import React from 'react';
import styles from '../../styles/Home.module.css';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const AboutUsBanner = () => (
  <section className={styles.aboutUsSection}>
    <div className={styles.aboutUsLeft}>
      <h2>About Us</h2>
      <h2 style={{ fontSize: 25, marginTop: 95 }}>Key Points About Company</h2>
      <h2 style={{ lineHeight: 1.5, fontSize: 17, marginTop: 30 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </h2>
      <div style={{ background: 'transparent', width: 300, height: 250 }}></div>
      <div
        style={{
          display: 'flex',
          width: 260,
          justifyContent: 'space-between',
          marginTop: 100,
          fontSize: 26,
        }}
      >
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
        <RiSendPlaneFill />
      </div>
    </div>
    <div style={{ flex: 0.5, padding: 100 }}></div>
  </section>
);

export default AboutUsBanner;
