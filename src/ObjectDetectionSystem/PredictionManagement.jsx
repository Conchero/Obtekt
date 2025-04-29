import { useEffect, useState } from "react";
import { MathBackendCPU } from "@tensorflow/tfjs-backend-cpu";
import { MathBackendWebGL } from "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const PredictionManagement = ({ requestAsked, onRequestTreated }) => {
  const [previousPrediction, setPreviousPrediction] = useState(null);
  const [currentPrediction, setCurrentPrediction] = useState(null);

  useEffect(() => {
    if (requestAsked) {
      getPrediction();
    }
  }, [requestAsked]);

  const getPrediction = async () => {
    try {
      const liveFeed = document.querySelector("video");
      const model = await cocoSsd.load();
      const prediction = await model.detect(liveFeed);

      let predictionToReturn = null;
      if (prediction.length > 0) {
        const predictionWithoutPerson = prediction.filter((el) => el.class !== "person");
        if (predictionWithoutPerson.length > 0) {
          predictionToReturn = predictionWithoutPerson;
        }
      }

      setPreviousPrediction(currentPrediction);
      setCurrentPrediction(predictionToReturn);

      onRequestTreated(getDetectionState(), predictionToReturn);
      return predictionToReturn;
    } catch (error) {
      console.error("Erreur pendant la prédiction :", error);
    }
  };

  const getDetectionState = () => {
    let state = "DEFAULT";
    if (!currentPrediction && previousPrediction) {
      state = "OBJECT_LEAVED_DETECTION";
    } else if (currentPrediction && !previousPrediction) {
      state = "OBJECT_ENTERED_DETECTION";
    } else if (currentPrediction && previousPrediction) {
      const sameLength = currentPrediction.length === previousPrediction.length;
      const sameContent = currentPrediction.every(
        (el, i) => el.class === previousPrediction[i]?.class
      );
      state = sameLength && sameContent ? "SAME_DETECTION" : "DIFFERENT_DETECTION";
    }
    return state;
  };

  return null;
};

export default PredictionManagement;
