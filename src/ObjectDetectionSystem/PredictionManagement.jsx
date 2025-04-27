import React from "react"
import { MathBackendCPU } from "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { MathBackendWebGL } from "@tensorflow/tfjs-backend-webgl";


class PredictionManagement {

  #nbPromisePending = 0;
  #currentPrediction = null;
  #previousPrediction = null;


  HandleNewPrediction(_prediction) {
    if (this.#previousPrediction == null) {
    }
    else {

    }


    this.#previousPrediction = this.#currentPrediction;
    this.#currentPrediction = _prediction;
    console.log("PreviousPrediction = ", this.#previousPrediction);
    console.log("CurrentPrediction = ", this.#currentPrediction);
  }

  SetNbPromisePending(_v) {
    this.#nbPromisePending = _v;
  }

  GetNbPromisePending() {
    return this.#nbPromisePending;
  }


  static getPrediction = async (_detectionObject) => {

    if (_detectionObject.GetNbPromisePending() < 2) {
      _detectionObject.SetNbPromisePending(_detectionObject.GetNbPromisePending() + 1);
      const liveFeed = document.querySelector("video");
      const model = await cocoSsd.load();
      const prediction = await model.detect(liveFeed);
      _detectionObject.SetNbPromisePending(_detectionObject.GetNbPromisePending() + 1);

      if (prediction.length > 0) {
        const predictionWithoutPerson = prediction.filter((el) => el.class != "person");
        return await predictionWithoutPerson;
      }
      else {
        return null;
      }

    }
  };


};

export default PredictionManagement;
