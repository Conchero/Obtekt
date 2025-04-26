import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { useEffect, useState } from "react";


const WebcamCapture = () => {

    useEffect(() => {
    }, [])


    const getPrecdition = async () => {
        const img = document.querySelector("video");
        console.log(img);
         const model = await cocoSsd.load();
         const prediction = await model.detect(img);

         console.log("Predictions: ");
         console.log(prediction);
    }

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  const webcamRef = useRef(null);
  const [entry, setEntry] = useState();
  const [entries, setEntries] = useState([]);

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
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            {imgSrc && (
                <img
                    src={imgSrc} className="live-img"
                />
            )}

            <button onClick={getPrecdition}>Detect Object</button>

        </>
    );
  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureEntry}>Capture infos</button>
      <button onClick={saveEntryToLocalStorage}>Save to LocalStorage</button>

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
