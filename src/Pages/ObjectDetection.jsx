import { useState, useEffect } from "react";
import WebcamCapture from "../ObjectDetectionSystem/WebcamComponent";
import EntryManager from "../EntrySystem/EntryManager";
import EntryHeader from "../EntrySystem/EntryHeader";
import EntryFooter from "../EntrySystem/EntryFooter";

const ObjectDetection = ({ setCamActivated }) => {
  const [entry, setEntry] = useState();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
  }, []);
  

  return (
    <section className="flex flex-row w-screen h-screen bg-[#0C0C0C]">
      <div className="flex-[7] h-full">
        <WebcamCapture
          setEntries={setEntries}
        />
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
