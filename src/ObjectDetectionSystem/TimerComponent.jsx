
import { useRef, useState, useEffect } from "react";
import PredictionManagement from "./PredictionManagement";


const TimerComponent = (props) => {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    let detectionTimer = 0.0;
    const detectionTriggerValue = 4.0;

    const objectDetectionObject = new PredictionManagement();

    useEffect(() => {
        startDetectionTimer();
    }, [])

    const startDetectionTimer = () => {
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => { setNow(Date.now) }, 10);
        detectionTimer = 0;
    }

    const timerUpdate = async () => {
        if (startTime != null && now != null) {
            // if ((now - startTime) / 1000 < parseFloat(detectionTriggerValue))
            // {
            //     detectionTimer = (now - startTime) / 1000;
            // }
            if (objectDetectionObject.GetNbPromisePending() == 0) {
                if ((now - startTime) / 1000 >= detectionTriggerValue) {
                    startDetectionTimer();
                    objectDetectionObject.HandleNewPrediction(await PredictionManagement.getPrediction(objectDetectionObject));

                }
            }
        }
    }


    timerUpdate();
    return (
        <>
            <h3>{detectionTimer}</h3>
        </>
    )
};

export default TimerComponent;
