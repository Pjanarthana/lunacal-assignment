import React, { useState } from 'react';
import image from "../assets/Images.jpeg";
import styles from './styles/GalleryWidget.module.css';


const GalleryWidget = () => {
  const [images, setImages] = useState([true]);

  const handleAddImage = () => {
    const newImage = 'image';
    setImages([...images, newImage]);
  };

  return (
    <div className={styles.galleryWidget}>
      <div className={styles.header}>
        <button className={styles.addgallery}> Gallery</button>
        <button className={styles.addButton} onClick={handleAddImage}>+ ADD IMAGE</button>
        <div className={styles.navButtons}>
          <button className={styles.prevButton}>←</button>
          <button className={styles.nextButton}>→</button>
        </div>
      </div>
      <div className={styles.gallery}>
        {images.map((img, idx) => (
          <img key={idx} src={image} alt={`Gallery ${idx}`} />
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
