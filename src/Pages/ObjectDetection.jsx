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




// import { useState, useEffect } from "react";
// import WebcamCapture from "../ObjectDetectionSystem/WebcamComponent";
// import EntryManager from "../EntrySystem/EntryManager";
// import EntryHeader from "../EntrySystem/EntryHeader";
// import EntryFooter from "../EntrySystem/EntryFooter";

// const ObjectDetection = ({ setCamActivated }) => {
//   // States pour la capture et la gestion d'entrées
//   const [entry, setEntry] = useState();
//   const [entries, setEntries] = useState([]);

//   // Chargement des entrées depuis le localStorage au montage
//   useEffect(() => {
//     const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
//     setEntries(savedEntries);
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-900 flex flex-col">
//       {/* Webcam Capture */}
//       <div className="flex-1 p-4">
//         <WebcamCapture
//           entry={entry}
//           setEntry={setEntry}
//           setEntries={setEntries}
//         />
//       </div>

//       {/* Entries Section */}
//       <div className="bg-slate-800 rounded-t-3xl shadow-inner p-4 flex-1 overflow-y-auto">
//         {/* Header */}
//         <EntryHeader setEntries={setEntries} />

//         {/* Liste des entrées */}
//         <div className="mt-4">
//           <EntryManager entries={entries} setEntries={setEntries} />
//         </div>

//         {/* Footer */}
//         <EntryFooter setCamActivated={setCamActivated} />
//       </div>
//     </div>
//   );
// };

// export default ObjectDetection;



