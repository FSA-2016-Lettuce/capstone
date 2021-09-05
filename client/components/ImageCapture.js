import React from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const ImageCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

  return (
    <>
      <Webcam
        audio={false}
        height={'300px'}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={'300px'}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default ImageCapture;
