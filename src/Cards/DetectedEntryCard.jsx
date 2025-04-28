import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";


const DetectedEntryCard = ({ entry, setEntries }) => {
  
  const saveEntryToLocalStorage = () => {
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = [entry, ...existingEntries];
    localStorage.setItem("entries", JSON.stringify(updatedEntries));

    setEntries(updatedEntries);
  };

  return (
    <div className="container flex bg-[#1B1B1B] justify-between items-center px-4 py-2 rounded-xl">
      <div className="info__containter flex items-center gap-2">
      <FontAwesomeIcon className="text-[#888888]" icon={faCircleInfo} />
        <div className="flex-column">
          <span className="text-[#888888] text-[16px] font-semibold">Object detected</span>
          <h4 className="text-[#FFFFFF] text-[20px] font-bold">Lamp</h4>
        </div>
      </div>
      <div className="user-choice__container flex gap-4">
        <button className="text-[20px] font-semibold bg-stone-50 rounded-md text-[#1B1B1B]  hover:text-[#00A150] p-2 ">Save it</button>
        <button className="text-[20px] font-semibold  bg-stone-50 rounded-md text-[#1B1B1B]  hover:text-[ hover:text-[#353535] ]  p-2">Discard</button>
      </div>
    </div>
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
