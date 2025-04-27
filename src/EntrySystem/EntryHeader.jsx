import React from "react";

const EntryHeader = ({ setEntries }) => {
  const deleteAllEntriesFromLocalStorage = () => {
    localStorage.removeItem("entries");
    setEntries([]);
  };

  return (
    <>
      <div>
        <h2>EntryHeader</h2>
        <button onClick={deleteAllEntriesFromLocalStorage}>Clear all</button>
      </div>
    </>
  );
};

export default EntryHeader;
