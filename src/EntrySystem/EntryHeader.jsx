import React from "react";

const EntryHeader = ({ setEntries }) => {
  const deleteAllEntriesFromLocalStorage = () => {
    localStorage.removeItem("entries");
    setEntries([]);
  };

  return (
    <div className="flex flex-row items-center justify-between border-gray-700 p-[32px] bg-[#181818]">
      <h2 className="text-[24px] font-semibold text-white">Detected Entries</h2>
      <button
        onClick={deleteAllEntriesFromLocalStorage}
        className="hover:bg-[#282828] text-white text-[20px] font-semibold py-[12px] px-[20px] rounded-[12px] transition cursor-pointer"
      >
        Clear all
      </button>
    </div>
  );
};

export default EntryHeader;
