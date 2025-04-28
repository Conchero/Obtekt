import React from "react";
import { FiTrash2 } from "react-icons/fi";

const SavedEntryCard = ({ entry, deleteEntryFromLocalStorage }) => {
  return (
    <div className="bg-gray-800 p-3 rounded-lg flex items-center gap-4 mb-4">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-14 h-14">
          <img
            src={entry.screenshot}
            alt={entry.objectName}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-green-400 text-sm">
            {entry.accuracyPercent}% accuracy
          </span>
          <span className="text-white font-semibold">{entry.objectName}</span>
          <span className="text-gray-400 text-xs">ID {entry.id}</span>
        </div>
      </div>

      <button
        onClick={deleteEntryFromLocalStorage}
        className="text-red-500 hover:text-red-700"
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  );
};

export default SavedEntryCard;
