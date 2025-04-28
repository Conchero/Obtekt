import React from "react";
import { FiLogOut } from "react-icons/fi";

const EntryFooter = ({ setCamActivated }) => {
  return (
    <div className="p-[32px] bg-[#181818]">
      <button
        onClick={() => setCamActivated(false)}
        className="flex flex-row items-center justify-center gap-[16px] bg-[#2F2F2F] hover:bg-white text-white hover:text-[#2F2F2F] text-[20px] font-semibold py-[12px] rounded-[12px] w-full cursor-pointer transition"
      >
        <FiLogOut className="text-[20px]" />
        Disconnect
      </button>
    </div>
  );
};

export default EntryFooter;
