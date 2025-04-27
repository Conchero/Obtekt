import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import DetectedEntryCard from "../Cards/DetectedEntryCard";

import TimerComponent from "./TimerComponent";
import PredictionManagement from "./PredictionManagement";

const WebcamCapture = ({ entry, setEntry, setEntries }) => {
  const webcamRef = useRef(null);


  useEffect(() => {
  }, [])



 
  /////////////////////////////////////////////////////////
  ////// Partie fictive pour faire marcher ma partie //////
  /////////////////////////////////////////////////////////
  const captureEntry = () => {
    const id = Math.random().toString(36).slice(2, 11);
    const objectName = "Object";
    const accuracyPercent = "97%";
    const screenshot = webcamRef.current.getScreenshot();

    setEntry({ id, objectName, accuracyPercent, screenshot });
  };
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureEntry}>Capture infos</button>
      <DetectedEntryCard entry={entry} setEntries={setEntries} />
      <TimerComponent />
    </div>

  );
};

export default WebcamCapture;
