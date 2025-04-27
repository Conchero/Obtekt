import React from "react";
import { useState, useEffect } from "react";
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
    <>
      <div>
        {entries.map((entry, index) => (
          <SavedEntryCard
            key={index}
            entry={entry}
            deleteEntryFromLocalStorage={deleteEntryFromLocalStorage}
          />
        ))}
      </div>
    </>
  );
};

export default EntryManager;
