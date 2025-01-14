
import React from 'react';
import styles from '../app/Loading.module.css'; 

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
