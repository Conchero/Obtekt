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
