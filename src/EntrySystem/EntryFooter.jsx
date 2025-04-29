import React from "react";
import { FiLogOut } from "react-icons/fi";

const EntryFooter = ({ setCamActivated, darkMode }) => {
  return (
    <div className={`p-[32px] ${darkMode ? "bg-[#181818]" : "bg-slate-200"}`}>
      <button
        onClick={() => setCamActivated(false)}
        className={`flex flex-row items-center justify-center gap-[16px]   text-[20px] font-semibold py-[12px] rounded-[12px] w-full cursor-pointer transition ${
          darkMode
            ? "bg-[#2F2F2F] hover:bg-white text-white hover:text-[#2F2F2F]"
            : "bg-slate-300 hover:bg-[#2F2F2F] text-[#2F2F2F] hover:text-white"
        }`}
      >
        <FiLogOut className="text-[20px]" />
        Disconnect
      </button>
    </div>
  );
};

export default EntryFooter;
