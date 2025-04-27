import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import DetectedEntryCard from "../Cards/DetectedEntryCard";
import { MathBackendCPU } from "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { MathBackendWebGL } from "@tensorflow/tfjs-backend-webgl";

const WebcamCapture = ({ entry, setEntry, setEntries }) => {
  const webcamRef = useRef(null);
  const [predictions, setPredictions] = useState([]);

  const getPrediction = async () => {
    const liveFeed = document.querySelector("video");
    const model = await cocoSsd.load();
    const preds = await model.detect(liveFeed);

    setPredictions(preds);
    console.log(preds);
  };

  /////////////////////////////////////////////////////////
  ////// Partie fictive pour faire marcher ma partie //////
  /////////////////////////////////////////////////////////
  const captureEntry = () => {
    if (predictions.length === 0) {
      alert("No prediction available");
      return;
    }

    // Récupération de l'image croppée
    const canvas = webcamRef.current.getCanvas();
    const firstPrediction = predictions[0]; // Par contre je prends que le premier objet détecté, si y en a plusieurs toz
    const { bbox, class: objectName, score } = firstPrediction;
    const [x, y, width, height] = bbox;
    const croppedCanvas = document.createElement("canvas");
    croppedCanvas.width = width;
    croppedCanvas.height = height;
    const ctx = croppedCanvas.getContext("2d");
    ctx.drawImage(canvas, x, y, width, height, 0, 0, width, height);

    const screenshot = croppedCanvas.toDataURL("image/jpeg");
    const id = Math.random().toString(36).slice(2, 11);
    const accuracyPercent = `${(score * 100).toFixed()}%`;

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
