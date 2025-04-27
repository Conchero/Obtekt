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
