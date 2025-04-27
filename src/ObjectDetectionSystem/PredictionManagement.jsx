import React from "react"
import { MathBackendCPU } from "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { MathBackendWebGL } from "@tensorflow/tfjs-backend-webgl";
import { useEffect } from "react";

const PredictionManagement = (props) => {

  useEffect(()=>{
    if (props.requestAsked)
    {
      getPrediction();
    }
  },[props.requestAsked])

  const getPrediction = async () => {
    const liveFeed = document.querySelector("video");
    const model = await cocoSsd.load();
    const prediction = await model.detect(liveFeed);

    if (prediction.length > 0) {
      const predictionWithoutPerson = prediction.filter((el) => el.class != "person");
      props.onRequestTreated();
      return await predictionWithoutPerson;
    }
    else {
      props.onRequestTreated();
      return null;
    }
  }

  return (
    <>

    </>
  )
};

export default PredictionManagement;


