import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";

const ImageCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture} type="button">
        Capture photo
      </button>
      {imgSrc && <img src={imgSrc} alt="images" />}
    </>
  );
};

export default ImageCapture;
