import React from "react";

const DetectedEntryCard = ({ entry, setEntries }) => {
  const saveEntryToLocalStorage = () => {
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = [entry, ...existingEntries];
    localStorage.setItem("entries", JSON.stringify(updatedEntries));

    setEntries(updatedEntries);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-row justify-between gap-4 mb-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded overflow-hidden">
          <img
            // src={entry.screenshot}
            // alt={entry.objectName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-gray-400 text-sm">Object detected</span>
          {/* <span className="text-white font-semibold">{entry.objectName}</span> */}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={saveEntryToLocalStorage}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Save it
        </button>
        <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
          Discard
        </button>
      </div>
    </div>
  );
};

export default DetectedEntryCard;
