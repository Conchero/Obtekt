import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WebcamCapture from "./WebcamComponent";
import Home from "./Pages/Home";
import ObjectDetection from "./Pages/ObjectDetection";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/object-detection" element={<ObjectDetection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
