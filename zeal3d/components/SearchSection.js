import React from 'react';
import styles from '../styles/Home.module.css';
import { RiSearchLine } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsCheck, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const SearchSection = ({ setBedrooms, bedrooms }) => (
  <section className={styles.searchSection}>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className={styles.searchBarContainer}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <input
              type='text'
              placeholder='Search Property Name, Locality, Developer'
            />
            <h5 style={{ marginLeft: 30 }}>Bedrooms</h5>
            <div className={styles.bedroomBtnsContainer}>
              <div
                onClick={() => setBedrooms(bedrooms === 0 ? 0 : bedrooms - 1)}
                style={{ left: 3, cursor: 'pointer' }}
                className={styles.bedroomCircleBtn}
              >
                <AiOutlineMinus />
              </div>
              <p style={{ fontSize: 16, color: '#a8a8a8' }}>{bedrooms}</p>
              <div
                onClick={() => setBedrooms(bedrooms + 1)}
                style={{ right: 3, cursor: 'pointer' }}
                className={styles.bedroomCircleBtn}
              >
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              alignItems: 'center',
              display: 'flex',
              paddingTop: 25,
            }}
          >
            <h5>Price Segment</h5>
            <div className={styles.affordableBtnsContainer}>
              <div
                style={{ left: 3, fontSize: 38 }}
                className={styles.affordableCircleBtn}
              >
                <BsArrowLeftShort />
              </div>
              <p style={{ fontSize: 17 }}>Affordable</p>
              <div
                style={{ right: 3, fontSize: 38 }}
                className={styles.affordableCircleBtn}
              >
                <BsArrowRightShort />
              </div>
            </div>
            <h5 style={{ marginLeft: 54 }}>Ready to Move</h5>
            <div className={styles.toggleBtnContainer}>
              <div className={styles.toggleBtn}>
                <BsCheck style={{ fontSize: 35, color: '#CDCDCD' }} />
              </div>
            </div>
            <div className={styles.advanceFilterBtn}>
              <h5>Advance Filter</h5>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 0.1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className={styles.searchCircleBtn}>
            <div className={styles.searchCircleBtnInnerCircle}>
              <RiSearchLine style={{ fontSize: 35, color: '#12B7B6' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SearchSection;
