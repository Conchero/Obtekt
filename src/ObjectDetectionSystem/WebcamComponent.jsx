import { useRef } from "react";
import Webcam from "react-webcam";
import DetectedEntryCard from "../Cards/DetectedEntryCard";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const WebcamCapture = ({ entry, setEntry, setEntries }) => {
  const webcamRef = useRef(null);

  const getPrediction = async () => {
    const liveFeed = document.querySelector("video");
    const model = await cocoSsd.load();
    const predictions = await model.detect(liveFeed);

    console.log("Predictions: ", predictions);
  };

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

  return (
    <div className="relative flex flex-col h-full items-center">
      <div className="absolute w-full h-full border-[64px] border-black/70"></div>
      <div className="h-full w-full">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          disablePictureInPicture
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[64px] right-[64px] w-[192px] h-[192px] border-t-[8px] border-r-[8px] border-[#00A150]"></div>
        <div className="absolute bottom-[64px] left-[64px] w-[192px] h-[192px] border-b-[8px] border-l-[8px] border-[#00A150]"></div>
        <div className="absolute top-[64px] left-[64px] w-[192px] h-[192px] border-t-[8px] border-l-[8px] border-[#00A150]"></div>
        <div className="absolute bottom-[64px] right-[64px] w-[192px] h-[192px] border-b-[8px] border-r-[8px] border-[#00A150]"></div>
      </div>

      <div className="absolute bottom-[96px]">
        {/* <button
          onClick={getPrediction}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Detect Objects
        </button>

        <button
          onClick={captureEntry}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Capture infos
        </button> */}

        <DetectedEntryCard entry={entry} setEntries={setEntries} className="" />
      </div>
    </div>
  );
};

export default WebcamCapture;
