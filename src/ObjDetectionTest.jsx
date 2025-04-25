import { MathBackendCPU } from "@tensorflow/tfjs-backend-cpu";
import { MathBackendWebGL } from "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { useEffect, useState } from "react";

// require('@tensorflow/tfjs-backend-cpu');
// require('@tensorflow/tfjs-backend-webgl');
// const cocoSsd = require('@tensorflow-models/coco-ssd');


const ObjectDetectionTest = () => {
    //[prediction, setPredictions] = useState(null);
    useEffect(() => {
        getPrecdition();
    },[])


    const getPrecdition = async () => {
        const img = document.querySelector(".img-test");
        console.log(img);   
        const model = await cocoSsd.load();
        const prediction = await model.detect(img);
        
        console.log("Predictions: ");
        console.log(prediction);
    }


    return <img src='/Image/PizzaBus.png'  className="img-test" ></img>

}   



export default ObjectDetectionTest;