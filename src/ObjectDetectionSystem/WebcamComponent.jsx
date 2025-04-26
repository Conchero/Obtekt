import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { MathBackendCPU } from "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { MathBackendWebGL } from "@tensorflow/tfjs-backend-webgl";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [entry, setEntry] = useState();
  const [entries, setEntries] = useState([]);

   
  const getPrediction = async () => {
    const liveFeed = document.querySelector("video");
    const model = await cocoSsd.load();
    const prediction  = await model.detect(liveFeed);

    console.log("Prediction: ")
    console.log(prediction);
  }
  // SIMULATION DE LA DETECTION DE L'OBJET
  // AVEC LES INFOS DE L'OBJET STOCKEES DANS UN OBJET ENTRY
  const captureEntry = () => {
    const objName = "Object";
    const id = Math.random().toString(36).slice(2, 11);
    const screenshot = webcamRef.current.getScreenshot();

    setEntry({ id, objName, screenshot });
  };

  // AJOUTER AU LOCALSTORAGE
  const saveEntryToLocalStorage = () => {
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = [entry, ...existingEntries];
    localStorage.setItem("entries", JSON.stringify(updatedEntries));

    setEntries(updatedEntries);
  };

  // SUPPRIMER DU LOCALSTORAGE
  const deleteEntryFromLocalStorage = (entryId) => {
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = existingEntries.filter(
      (entry) => entry.id !== entryId
    );
    localStorage.setItem("entries", JSON.stringify(updatedEntries));

    setEntries(updatedEntries);
  };

  useEffect(() => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];

    setEntries(entries);
  }, []);

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureEntry}>Capture infos</button>
      <button onClick={saveEntryToLocalStorage}>Save to LocalStorage</button>
      <button onClick={getPrediction}>Detect Objects</button>

      {entries.map((entry) => (
        <div>
          <div>ID : {entry.id}</div>
          <a href={entry.screenshot} download={`screenshot-${entry.id}.jpg`}>
            <img src={entry.screenshot} alt="screenshot" />
          </a>
          <div>NAME : {entry.objName}</div>
          <button onClick={() => deleteEntryFromLocalStorage(entry.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default WebcamCapture;
