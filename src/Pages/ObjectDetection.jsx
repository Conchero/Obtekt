import { useState, useEffect } from "react";
import WebcamCapture from "../ObjectDetectionSystem/WebcamComponent";
import EntryManager from "../EntrySystem/EntryManager";
import EntryHeader from "../EntrySystem/EntryHeader";
import EntryFooter from "../EntrySystem/EntryFooter";
import { BsSun, BsMoon } from "react-icons/bs";

const ObjectDetection = ({ setCamActivated }) => {
  const [entries, setEntries] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <section
      className={` flex flex-col lg:flex-row w-screen h-screen  ${
        darkMode ? "bg-[#0C0C0C]" : "bg-slate-100"
      }`}
    >
      <div className="flex-[7] h-full relative">
        <div className="absolute top-[12px] left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={toggleTheme}
            className={`flex justify-center items-center w-[40px] h-[40px] transition mr-[16px] rounded-[8px] cursor-pointer ${
              darkMode
                ? "text-white hover:bg-[#2F2F2F]"
                : "text-[#2F2F2F] hover:bg-slate-300"
            }`}
          >
            {darkMode ? <BsMoon /> : <BsSun />}
          </button>
        </div>
        <WebcamCapture setEntries={setEntries} darkMode={darkMode} />
      </div>

      <div className="flex-[3] flex flex-col h-full">
        <EntryHeader setEntries={setEntries} darkMode={darkMode} />
        <div className="flex-1 overflow-y-auto">
          <EntryManager
            entries={entries}
            setEntries={setEntries}
            darkMode={darkMode}
          />
        </div>
        <EntryFooter setCamActivated={setCamActivated} darkMode={darkMode} />
      </div>
    </section>
  );
};

export default ObjectDetection;
