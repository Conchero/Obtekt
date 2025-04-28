import React from "react";

const DetectedEntryCard = ({prediction, removePredictionToShow, setEntry}) => {
  
  const saveEntryToLocalStorage = () => {
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    console.log(existingEntries)
    const updatedEntries = existingEntries.length > 0 ? [prediction,...existingEntries] : [prediction];
    console.log(updatedEntries);
    // const updatedEntries = [entry, ...existingEntries];
     localStorage.setItem("entries", JSON.stringify(updatedEntries));
     removePredictionToShow(prediction.id);
    setEntry(prediction);

     //setEntries(updatedEntries);
  };

  return (
    <>
    <h2>{`${prediction.objectName}-${prediction.id}`}</h2>
    <button onClick={saveEntryToLocalStorage}>Save</button>
    <button onClick={(e) => {removePredictionToShow(prediction.id)}}>Discard</button>
    </>
  );
};

export default DetectedEntryCard;
