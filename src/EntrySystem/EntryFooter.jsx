import React from "react";

const EntryFooter = ({ setCamActivated }) => {
  return (
    <>
      <button onClick={() => setCamActivated(false)}>Barrez vous</button>
    </>
  );
};

export default EntryFooter;
