import { useRef, useState } from "react";
import Webcam from "react-webcam";
import DetectedEntryCard from "../Cards/DetectedEntryCard";
import TimerComponent from "./TimerComponent";
import PredictionManagement from "./PredictionManagement";

const WebcamCapture = ({ setEntries, darkMode }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null); // 🔵 canvas pour les cadres
  const [sendRequest, setSendRequest] = useState(false);
  const [predictionsToShow, setPredictionsToShow] = useState([]);

  const fillNewEntry = (_prediction) => {
    const newEntries = [];

    _prediction.forEach((el) => {
      const date = new Date(Date.now());
      const yearID = date.getFullYear().toString().slice(-2);
      const id = `D-${yearID}-${date.getMonth()}-${date.getHours()}${date.getMinutes()}${date.getSeconds() + date.getMilliseconds()}`;

      const tempEntry = {
        id: id,
        objectName: el.class,
        accuracyPercent: el.score,
        screenshot: webcamRef.current.getScreenshot(),
      };

      console.log("tempEntry", tempEntry);  

      newEntries.push(tempEntry);
    });

    setPredictionsToShow(newEntries);
    return newEntries;
  };

  const drawCanvas = (predictions) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = webcamRef.current.video;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    predictions.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox;
      ctx.strokeStyle = darkMode ? "#00FF00" : "#2563EB";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      ctx.font = "16px Arial";
      ctx.fillStyle = darkMode ? "#00FF00" : "#2563EB";
      ctx.fillText(prediction.class, x, y > 10 ? y - 5 : 10);
    });
  };

  const SendRequestToPredictionManagement = () => {
    setSendRequest(true);
  };

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
      drawCanvas(_currentPrediction);
    } else {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const removePredictionToShow = (id) => {
    setPredictionsToShow(predictionsToShow.filter((el) => el.id !== id));
  };

  return (
    <div className="relative flex flex-col h-full items-center">
      <div className="h-full w-full">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          disablePictureInPicture
          className="w-full h-full object-cover"
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      </div>

      <div className="absolute flex flex-col gap-[24px] bottom-[96px] w-full px-[96px]">
        {predictionsToShow.map((el) => (
          <DetectedEntryCard
            key={el.id}
            prediction={el}
            setEntries={setEntries}
            removePredictionToShow={removePredictionToShow}
          />
        ))}

        <div className="hidden">
          <TimerComponent
            onTimerTriggerReached={SendRequestToPredictionManagement}
            requestPending={sendRequest}
          />
          <PredictionManagement
            onRequestTreated={RestartTimer}
            requestAsked={sendRequest}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;
