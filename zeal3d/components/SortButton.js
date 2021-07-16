import React from 'react';
import { CgSortAz } from 'react-icons/cg';

const SortButton = () => (
  <span
    style={{
      marginBottom: '45px',
      float: 'right',
      marginRight: '80px',
    }}
  >
    <CgSortAz
      style={{
        fontSize: '30px',
        marginBottom: '-8px',
        color: '#12B7B6',
      }}
    />
    <span style={{ marginLeft: '8px', fontWeight: '700' }}>Sort By</span>
  </span>
);

export default SortButton;
