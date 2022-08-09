import React from "react";
import MemoizedFooter from "../../organism/Footer/Footer";
import MemoizedHeader from "../../organism/Header/Header";
import MediaGallery from "../../molecule/MediaGallery/MediaGallery";
import Carousel from "../../molecule/Carousel/Carousel";

const Media = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <MemoizedHeader />
      <MediaGallery />
      <Carousel />
      <MemoizedFooter />
    </div>
  );
};

export default Media;
