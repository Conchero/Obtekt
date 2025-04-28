import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WebcamCapture from "./ObjectDetectionSystem/WebcamComponent";
import PageManager from "./Pages/PageManager";


function App() {
  const [count, setCount] = useState(0);

  console.log(Date.UTC());

  return (
    <PageManager />
  );
}

export default App;
