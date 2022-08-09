import React, { useState } from "react";
import styled from "styled-components";
import styles from "./MediaGallery.style";
import GalleryModal from "./GalleryModal";

const MediaGallery = (props) => {
  const { className } = props;
  const [currentIndex, setCurrentIndex] = useState(null);
  const imgUrls = [
    "https://source.unsplash.com/PC_lbSSxCZE/800x600",
    "https://source.unsplash.com/lVmR1YaBGG4/800x600",
    "https://source.unsplash.com/5KvPQc1Uklk/800x600",
    "https://source.unsplash.com/GtYFwFrFbMA/800x600",
    "https://source.unsplash.com/Igct8iZucFI/800x600",
    "https://source.unsplash.com/M01DfkOqz7I/800x600",
    "https://source.unsplash.com/MoI_cHNcSK8/800x600",
    "https://source.unsplash.com/M0WbGFRTXqU/800x600",
    "https://source.unsplash.com/s48nn4NtlZ4/800x600",
    "https://source.unsplash.com/E4944K_4SvI/800x600",
    "https://source.unsplash.com/F5Dxy9i8bxc/800x600",
    "https://source.unsplash.com/iPum7Ket2jo/800x600",
  ];

  const openModal = (e, index) => {
    setCurrentIndex(index);
  };
  const closeModal = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setCurrentIndex(null);
  };
  const findPrev = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    /* this.setState(prevState => ({
          currentIndex: prevState.currentIndex -1
        })); */
    setCurrentIndex((prevState) => prevState - 1);
  };
  const findNext = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setCurrentIndex((prevState) => prevState + 1);
  };

  const renderImageContent = (src, index) => (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={(e) => openModal(e, index)}
      onKeyDown={(e) => openModal(e, index)}
    >
      <img src={src} key={src} alt="" />
    </div>
  );

  return (
    <div className={`gallery-container ${className}`}>
      <h1> Simple Media MediaGallery </h1>
      <div className="gallery-grid">{imgUrls.map(renderImageContent)}</div>
      <GalleryModal
        closeModal={closeModal}
        findPrev={findPrev}
        findNext={findNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex + 1 < imgUrls.length}
        src={imgUrls[currentIndex]}
      />
    </div>
  );
};

export default styled(MediaGallery)`
  ${styles}
`;
