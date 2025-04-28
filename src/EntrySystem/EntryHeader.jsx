import React from "react";

const EntryHeader = ({ setEntries }) => {
  const deleteAllEntriesFromLocalStorage = () => {
    localStorage.removeItem("entries");
    setEntries([]);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700">
      <h2 className="text-2xl font-bold text-white">Detected Entries</h2>
      <button
        onClick={deleteAllEntriesFromLocalStorage}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition"
      >
        Clear all
      </button>
    </div>
  );
};

export default EntryHeader;
