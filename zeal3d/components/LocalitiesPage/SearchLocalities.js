import React from 'react';
import styles from '../../styles/Localities.module.css';
import { RiSearchLine } from 'react-icons/ri';

const SearchLocalities = () => (
  <div className={styles.searchLocalities}>
    <input
      className={styles.searchBarContainer}
      type='text'
      placeholder='Search Localities'
    />
    <div className={styles.searchCircleBtn}>
      <div className={styles.searchCircleBtnInnerCircle}>
        <RiSearchLine style={{ fontSize: 35, color: '#12B7B6' }} />
      </div>
    </div>
  </div>
);

export default SearchLocalities;
