import React from 'react';
import TabWidget from './TabWidget';
import GalleryWidget from './GalleryWidget';
import styles from './styles/MainContainer.module.css';

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.rightSide}>
        <TabWidget />
        <GalleryWidget />
      </div>
    </div>
  );
};

export default MainContainer;
