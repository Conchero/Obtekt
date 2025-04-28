import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import DetectedEntryCard from "../Cards/DetectedEntryCard";


import TimerComponent from "./TimerComponent";
import PredictionManagement from "./PredictionManagement";

const WebcamCapture = ({ entry, setEntry, setEntries }) => {
  const webcamRef = useRef(null);


  const [sendRequest, setSendRequest] = useState(false);

  const [predictionsToShow, setPredictionsToShow] = useState([]);


  const fillNewEntry = (_prediction) => {
    const newEntries = [];

    // Récupération de l'image croppée
    
    
    _prediction.forEach(el => {
      
      const canvas = webcamRef.current.getCanvas();
      const { bbox } = el;
      const [x, y, width, height] = bbox;
      const croppedCanvas = document.createElement("canvas");
      croppedCanvas.width = width;
      croppedCanvas.height = height;
      const ctx = croppedCanvas.getContext("2d");
      ctx.drawImage(canvas, x, y, width, height, 0, 0, width, height);
  
      const croppedScreenshot = croppedCanvas.toDataURL("image/jpeg")
      
      const tempEntry = {
        id: Math.random().toString(36).slice(2, 11),
        objectName: el.class,
        accuracyPercent: el.score,
        screenshot: croppedScreenshot,
      };

      newEntries.push(tempEntry);
    })

    setPredictionsToShow(newEntries);

    return tempEntry;
  }

  useEffect(() => {
  }, [])


  const SendRequestToPredictionManagement = () => {
    setSendRequest(true);
  }

  const RestartTimer = (_detectionState, _currentPrediction) => {
    setSendRequest(false);

    if (_currentPrediction != null) {

      switch (_detectionState) {
        case "SAME_DETECTION":
          break;
        case "OBJECT_ENTERED_DETECTION":
        case "DIFFERENT_DETECTION":
          fillNewEntry(_currentPrediction);
          break;
        default:
          break;
      }
    }
  }


  const removePredictionToShow = (id) => {
    setPredictionsToShow(predictionsToShow.filter(el => el.id != id))
  }


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

      {(predictionsToShow != null && predictionsToShow.length) > 0 ? predictionsToShow.map(el => <DetectedEntryCard key={el.id} prediction={el} setEntry={setEntry} removePredictionToShow={removePredictionToShow} />): <></> }
      <TimerComponent onTimerTriggerReached={SendRequestToPredictionManagement} requestPending={sendRequest} />
      <PredictionManagement onRequestTreated={RestartTimer} requestAsked={sendRequest} />

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

      </div>
{/* =======


  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureEntry}>Capture infos</button>
      {(predictionsToShow != null && predictionsToShow.length) > 0 ? predictionsToShow.map(el => <DetectedEntryCard key={el.id} prediction={el} setEntry={setEntry} removePredictionToShow={removePredictionToShow} />): <></> }
      <TimerComponent onTimerTriggerReached={SendRequestToPredictionManagement} requestPending={sendRequest} />
      <PredictionManagement onRequestTreated={RestartTimer} requestAsked={sendRequest} />
>>>>>>> testnpm */}
    </div>

  );
};

export default WebcamCapture;
