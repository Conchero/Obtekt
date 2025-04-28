import React from "react";

const SavedEntryCard = ({ entry, deleteEntryFromLocalStorage }) => {
  return (
    <div>
      <a href={entry.screenshot} download={`screenshot-${entry.id}.jpg`}>
        <img src={entry.screenshot} alt="screenshot" />
      </a>
      <div>ID : {entry.id}</div>
      <div>NAME : {entry.objectName}</div>
      <div>ACCURACY : {entry.accuracyPercent}</div>
      <button onClick={() => deleteEntryFromLocalStorage(entry.id)}>
        Delete
      </button>
    </div>
  );
};

export default SavedEntryCard;





// import React from 'react';
// import { FiTrash2 } from 'react-icons/fi'; // icône poubelle

// const SavedEntryCard = ({ imageUrl, accuracy, name, id, onDelete }) => {
//   return (
//     <div className="bg-gray-800 p-3 rounded-lg flex items-center gap-4 mb-4">

//       {/* Gauche : Image + Textes */}
//       <div className="flex items-center gap-3 flex-1">
        
//         {/* Image */}
//         <div className="w-14 h-14">
//           <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded" />
//         </div>

//         {/* Infos Texte */}
//         <div className="flex flex-col">
//           <span className="text-green-400 text-sm">{accuracy}% accuracy</span>
//           <span className="text-white font-semibold">{name}</span>
//           <span className="text-gray-400 text-xs">ID {id}</span>
//         </div>

//       </div>

//       {/* Droite : bouton delete */}
//       <button onClick={onDelete} className="text-red-500 hover:text-red-700">
//         <FiTrash2 size={20} />
//       </button>

//     </div>
//   );
// };

// export default SavedEntryCard;