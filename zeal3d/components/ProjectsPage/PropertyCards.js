import React from 'react';
import styles from '../../styles/Projects.module.css';
import { RiArrowDownSLine, RiShapeLine } from 'react-icons/ri';

const PropertyCards = ({ properties, bedrooms, setBedrooms }) => (
  <div className={styles.propertyContainer}>
    {properties.map((i, index) => (
      <div key={index}>
        <div className={styles.propertyBox}>
          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={i.imgSrc}
              alt='Property Image'
              className={styles.propertyImg}
            />
          </div>
          <div style={{ flex: 1, padding: '5px 30px 20px 30px' }}>
            <h4 style={{ margin: 0, color: '#12B7B6' }}>{i.developerName}</h4>
            <h3 style={{ margin: 0, marginTop: 12 }}>{i.propertyName}</h3>
            <h6 style={{ margin: 0, marginTop: 10 }}>{i.address}</h6>
            <div style={{ marginTop: 30 }}>
              <span style={{ color: '#12B7B6', marginRight: 10 }}>₹</span>
              <span
                style={{ fontWeight: 600 }}
              >{`${i.lowerRange}K - ${i.upperRange}K`}</span>
            </div>
            <div style={{ marginTop: 10 }}>
              <RiShapeLine style={{ color: '#12B7B6', marginRight: 10 }} />
              <span
                style={{ fontWeight: 600 }}
              >{`${i.lowerRange} Sq. Ft.`}</span>
            </div>
            <div className={styles.BHKToggle} style={{ marginTop: 20 }}>
              <h6
                style={{
                  color: bedrooms === 1 ? '#12B7B6' : '',
                  border: bedrooms === 1 ? '2px solid #12B7B6' : '',
                }}
                className={styles.toggleElement}
                onClick={() => setBedrooms(1)}
              >
                1BHK
              </h6>
              <h6
                style={{
                  color: bedrooms === 2 ? '#12B7B6' : '',
                  border: bedrooms === 2 ? '2px solid #12B7B6' : '',
                }}
                className={styles.toggleElement}
                onClick={() => setBedrooms(2)}
              >
                2BHK
              </h6>
              <h6
                style={{
                  color: bedrooms === 3 ? '#12B7B6' : '',
                  border: bedrooms === 3 ? '2px solid #12B7B6' : '',
                }}
                className={styles.toggleElement}
                onClick={() => setBedrooms(3)}
              >
                Rental
              </h6>
            </div>
            <div className={styles.checkPropertyBtn}>
              <h5>Contact Developer</h5>
              <div className={styles.checkPropertyCircleBtn}>
                <RiArrowDownSLine />{' '}
                <RiArrowDownSLine style={{ marginTop: -20 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default PropertyCards;
