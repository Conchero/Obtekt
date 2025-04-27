import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import DetectedEntryCard from "../Cards/DetectedEntryCard";
import { MathBackendCPU } from "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { MathBackendWebGL } from "@tensorflow/tfjs-backend-webgl";

const WebcamCapture = ({ entry, setEntry, setEntries }) => {
  const webcamRef = useRef(null);

  const getPrediction = async () => {
    const liveFeed = document.querySelector("video");
    const model = await cocoSsd.load();
    const prediction = await model.detect(liveFeed);

    console.log("Prediction: ");
    console.log(prediction);
  };

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
      <button onClick={getPrediction}>Detect Objects</button>
      <button onClick={captureEntry}>Capture infos</button>
      <DetectedEntryCard entry={entry} setEntries={setEntries} />
    </div>
  );
};

export default WebcamCapture;
