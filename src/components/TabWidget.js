import React, { useState } from 'react';
import styles from './styles/TabWidget.module.css';

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const renderContent = () => {
    switch (activeTab) {
      case 'About Me':
        return (
          <>
          <p>
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
          </p>
          <p>
          I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>
          </>
        );
      case 'Experiences':
        return <p>Experience content goes here...</p>;
      case 'Recommended':
        return <p>Recommended content goes here...</p>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.tabWidget}>
      <div className={styles.tabs}>
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? styles.activeTab : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default TabWidget;
