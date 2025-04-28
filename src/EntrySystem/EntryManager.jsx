import React from "react";
import SavedEntryCard from "../Cards/SavedEntryCard";

const EntryManager = ({ entries, setEntries }) => {
  const deleteEntryFromLocalStorage = (entryId) => {
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = existingEntries.filter(
      (entry) => entry.id !== entryId
    );
    localStorage.setItem("entries", JSON.stringify(updatedEntries));

    setEntries(updatedEntries);
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      {entries.length > 0 ? (
        entries.map((entry, index) => (
          <SavedEntryCard
            key={index}
            entry={entry}
            deleteEntryFromLocalStorage={deleteEntryFromLocalStorage}
          />
        ))
      ) : (
        <p className="text-center text-gray-400 mt-4">No entries saved yet.</p>
      )}
    </div>
  );
};

export default EntryManager;
