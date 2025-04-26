import React from "react";
import Webcam from "react-webcam";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { useEffect, useState } from "react";


const WebcamCapture = () => {

    useEffect(() => {
    }, [])


    const getPrecdition = async () => {
        const img = document.querySelector("video");
        console.log(img);
         const model = await cocoSsd.load();
         const prediction = await model.detect(img);

         console.log("Predictions: ");
         console.log(prediction);
    }

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            {imgSrc && (
                <img
                    src={imgSrc} className="live-img"
                />
            )}

            <button onClick={getPrecdition}>Detect Object</button>

        </>
    );
};


export default WebcamCapture;

