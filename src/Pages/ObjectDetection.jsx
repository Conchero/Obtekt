import { useState, useEffect } from "react";
import WebcamCapture from "../ObjectDetectionSystem/WebcamComponent";
import EntryManager from "../EntrySystem/EntryManager";
import EntryHeader from "../EntrySystem/EntryHeader";
import EntryFooter from "../EntrySystem/EntryFooter";

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
      className={`flex flex-row w-screen h-screen ${
        darkMode ? "bg-[#0C0C0C]" : "bg-[#F0F0F0]"
      }`}
    >
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600"
        >
          {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
        </button>
      </div>

      <div className="flex-[7] h-full">
        <WebcamCapture setEntries={setEntries} darkMode={darkMode} />
      </div>

      <div className="flex-[3] flex flex-col h-full">
        <EntryHeader setEntries={setEntries} />
        <div className="flex-1 overflow-y-auto">
          <EntryManager entries={entries} setEntries={setEntries} />
        </div>
        <EntryFooter setCamActivated={setCamActivated} />
      </div>
    </section>
  );
};

export default ObjectDetection;
