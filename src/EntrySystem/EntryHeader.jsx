import React from "react";

const EntryHeader = ({ setEntries, darkMode }) => {
  const deleteAllEntriesFromLocalStorage = () => {
    localStorage.removeItem("entries");
    setEntries([]);
  };

  return (
    <div
      className={`flex flex-row items-center justify-between p-[32px] ${
        darkMode ? "bg-[#181818]" : "bg-slate-200"
      }`}
    >
      <h2
        className={`text-[24px] font-semibold ${
          darkMode ? "text-white" : "text-[#2F2F2F]"
        }`}
      >
        Detected Entries
      </h2>
      <button
        onClick={deleteAllEntriesFromLocalStorage}
        className={`text-[20px] font-semibold py-[12px] px-[20px] rounded-[12px] transition cursor-pointer ${
          darkMode
            ? "hover:bg-[#282828] text-white"
            : "hover:bg-slate-300 text-[#2F2F2F]"
        }`}
      >
        Clear all
      </button>
    </div>
  );
};

export default EntryHeader;
