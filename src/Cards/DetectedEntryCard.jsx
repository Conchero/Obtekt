import React from "react";

const DetectedEntryCard = ({ entry, setEntries }) => {
  
  const saveEntryToLocalStorage = () => {
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = [entry, ...existingEntries];
    localStorage.setItem("entries", JSON.stringify(updatedEntries));

    setEntries(updatedEntries);
  };

  return (
    <>
      <p>DetectedEntryCard</p>
      <button onClick={saveEntryToLocalStorage}>Save to LocalStorage</button>
    </>
  );
};

export default DetectedEntryCard;


// import React from 'react';

// const DetectedEntryCard = ({ imageUrl, name, onSave, onDiscard }) => {
//   return (
//     <div className="bg-gray-800 rounded-lg p-4 flex flex-col gap-4 mb-4">

//       {/* Image + Texte */}
//       <div className="flex items-center gap-4">
        
//         {/* Image */}
//         <div className="w-16 h-16 rounded overflow-hidden">
//           <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
//         </div>

//         {/* Nom de l'objet détecté */}
//         <div className="flex flex-col">
//           <span className="text-gray-400 text-sm">Object detected</span>
//           <span className="text-white font-semibold">{name}</span>
//         </div>

//       </div>

//       {/* Boutons Save et Discard */}
//       <div className="flex justify-end gap-3">
//         <button
//           onClick={onSave}
//           className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Save it
//         </button>
//         <button
//           onClick={onDiscard}
//           className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
//         >
//           Discard
//         </button>
//       </div>

//     </div>
//   );
// };

// export default DetectedEntryCard;
