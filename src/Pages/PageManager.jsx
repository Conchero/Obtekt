import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import ObjectDetection from "./ObjectDetection";
import WelcomePage from "./WelcomePage";

const PageManager = () => {

    const [camActivated, setCamActivated] = useState(false);


  

    if (!camActivated) {
        return <WelcomePage setCamActivated={setCamActivated} />
    }
    else{
        return <ObjectDetection setCamActivated={setCamActivated} />
    }
}


export default PageManager;