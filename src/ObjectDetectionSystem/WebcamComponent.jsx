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

    _prediction.forEach(el => {

      const tempEntry = {
        id: Math.random().toString(36).slice(2, 11),
        objectName: el.class,
        accuracyPercent: el.score,
        screenshot: webcamRef.current.getScreenshot(),
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
    const id = Math.random().toString(36).slice(2, 11);
    const objectName = "Object";
    const accuracyPercent = "97%";
    const screenshot = webcamRef.current.getScreenshot();

    setEntry({ id, objectName, accuracyPercent, screenshot });
  };


  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureEntry}>Capture infos</button>
      {(predictionsToShow != null && predictionsToShow.length) > 0 ? predictionsToShow.map(el => <DetectedEntryCard key={el.id} prediction={el} setEntry={setEntry} removePredictionToShow={removePredictionToShow} />): <></> }
      <TimerComponent onTimerTriggerReached={SendRequestToPredictionManagement} requestPending={sendRequest} />
      <PredictionManagement onRequestTreated={RestartTimer} requestAsked={sendRequest} />
    </div>

  );
};

export default WebcamCapture;
