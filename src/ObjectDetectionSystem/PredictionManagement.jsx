import React from "react"
import { MathBackendCPU } from "@tensorflow/tfjs-backend-cpu";
import { MathBackendWebGL } from "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { useEffect } from "react";
import { useState } from "react";

const PredictionManagement = (props) => {

  const [previousPrediction, setPreviousPrediction] = useState(null);
  const [currentPrediction, setCurrentPrediction] = useState(null);

  useEffect(() => {
    if (props.requestAsked) {
      getPrediction();
    }
    console.log("oui");
  }, [props.requestAsked])


  //Object Detection
  const getPrediction = async () => {
    try {
      const liveFeed = document.querySelector("video");
      const model = await cocoSsd.load();
      const prediction = await model.detect(liveFeed);

      let predictionToReturn = null;

      //Filter personn class so the presentator won't be recognized
      if (prediction.length > 0) {
        const predictionWithoutPerson = prediction.filter((el) => el.class != "person");
        if (predictionWithoutPerson.length > 0)
          predictionToReturn = predictionWithoutPerson;
      }


      setPreviousPrediction(currentPrediction);
      setCurrentPrediction(predictionToReturn);

      props.onRequestTreated(getDetectionState(), currentPrediction);
      return predictionToReturn;
    } catch (error) {
    }

  }

  //Used for detected card Refresh
  const getDetectionState = () => {
    let state = "";
    if (!currentPrediction && !previousPrediction) {
      state = "DEFAULT"
    }
    else if (currentPrediction && !previousPrediction) {
      state = "OBJECT_ENTERED_DETECTION"
    }
    else if (!currentPrediction && previousPrediction) {
      state = "OBJECT_LEAVED_DETECTION"
    }
    else if (currentPrediction && previousPrediction) {
      let subState = "";
      if (currentPrediction.length === previousPrediction.length) {
        currentPrediction.forEach((el, i) => {
          if (el.class !== previousPrediction[i].class) {
            subState = "DIFFERENT_DETECTION";
            return;
          }
          subState = "SAME_DETECTION"
        })
      }
      else {
        subState = "DIFFERENT_DETECTION";
      }
      state = subState;
    }
    return state;
  }


  return (
    <>

    </>
  )
};

export default PredictionManagement;

