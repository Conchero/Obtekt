import { useState, useEffect } from "react";
import WebcamCapture from "../ObjectDetectionSystem/WebcamComponent";
import EntryManager from "../EntrySystem/EntryManager";
import EntryHeader from "../EntrySystem/EntryHeader";
import EntryFooter from "../EntrySystem/EntryFooter";

const ObjectDetection = ({ setCamActivated }) => {
  const phd = {
    title: "pizza",
    id: "3",
  };

  /////////////////////////////////////////////////////////
  ////// Partie fictive pour faire marcher ma partie //////
  /////////////////////////////////////////////////////////
  const [entry, setEntry] = useState();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];

    setEntries(entries);
  }, []);
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

  return (
    <>
      <h1>ObjectDetection</h1>
      <WebcamCapture
        entry={entry}
        setEntry={setEntry}
        setEntries={setEntries}
      />

      <div className="bg-slate-800">
        <h2>Entrie</h2>
        <div className="bg-red-500">
          <h3>{phd.title}</h3>
          <h3>{phd.id}</h3>
        </div>

        <div className="bg-red-500">
          <h3>{phd.title}</h3>
          <h3>{phd.id}</h3>
        </div>

        <div className="bg-red-500">
          <h3>{phd.title}</h3>
          <h3>{phd.id}</h3>
        </div>

        <div className="bg-red-500">
          <h3>{phd.title}</h3>
          <h3>{phd.id}</h3>
        </div>
      </div>

      <div>
        <EntryHeader setEntries={setEntries} />
        <EntryManager entries={entries} setEntries={setEntries} />
        <EntryFooter setCamActivated={setCamActivated} />
      </div>
    </>
  );
};

export default ObjectDetection;


