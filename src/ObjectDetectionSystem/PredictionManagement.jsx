import React from "react"

const PredictionManagement = (props) => {
  return (
    <>
      
    </>
  )
};

export default PredictionManagement;



// import React from "react";
// import DetectedEntryCard from "../cards/DetectedEntryCard";

// const PredictionManagement = ({ entry, setEntries }) => {
//   if (!entry) return null; // S'il n'y a pas de prédiction, on ne montre rien

//   const handleSaveEntry = () => {
//     const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
//     const updatedEntries = [...existingEntries, entry];
//     localStorage.setItem("entries", JSON.stringify(updatedEntries));
//     setEntries(updatedEntries);
//   };

//   return (
//     <div className="bg-slate-700 p-4 rounded-lg shadow-md">
//       {/* Titre de la section */}
//       <h2 className="text-white text-xl font-semibold mb-4">
//         Detected Prediction
//       </h2>

//       {/* Carte pour la détection actuelle */}
//       <DetectedEntryCard entry={entry} />

//       {/* Bouton pour sauvegarder la prédiction */}
//       <div className="mt-4 flex justify-end">
//         <button
//           onClick={handleSaveEntry}
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition"
//         >
//           Save Detection
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PredictionManagement;
