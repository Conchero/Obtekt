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




// import { useRef, useState, useEffect } from "react";
// import Webcam from "react-webcam";
// import DetectedEntryCard from "../Cards/DetectedEntryCard";
// import * as cocoSsd from "@tensorflow-models/coco-ssd";

// const WebcamCapture = ({ entry, setEntry, setEntries }) => {
//   const webcamRef = useRef(null);

//   const getPrediction = async () => {
//     const liveFeed = document.querySelector("video");
//     const model = await cocoSsd.load();
//     const predictions = await model.detect(liveFeed);

//     console.log("Predictions: ", predictions);
//     // Tu pourras ici extraire info du premier objet détecté par exemple si besoin.
//   };

//   /////////////////////////////////////////////////////////
//   ////// Partie fictive pour faire marcher ma partie //////
//   /////////////////////////////////////////////////////////
//   const captureEntry = () => {
//     const id = Math.random().toString(36).slice(2, 11);
//     const objectName = "Object";
//     const accuracyPercent = "97%";
//     const screenshot = webcamRef.current.getScreenshot();

//     setEntry({ id, objectName, accuracyPercent, screenshot });
//   };
//   /////////////////////////////////////////////////////////

//   return (
//     <div className="flex flex-col items-center gap-6">
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         className="rounded-lg border-4 border-green-400 w-full max-w-md"
//       />

//       <div className="flex gap-4">
//         <button
//           onClick={getPrediction}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
//         >
//           Detect Objects
//         </button>

//         <button
//           onClick={captureEntry}
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
//         >
//           Capture infos
//         </button>
//       </div>

//       <DetectedEntryCard entry={entry} setEntries={setEntries} />
//     </div>
//   );
// };

// export default WebcamCapture;

