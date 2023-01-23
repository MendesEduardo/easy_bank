import React from 'react';
import styles from './Buttons.module.scss';

function Buttons() {
  return (
    <div className={styles.Button}>
      <button type='button'>Request Invite</button>
    </div>
  );
};

export default Buttons;