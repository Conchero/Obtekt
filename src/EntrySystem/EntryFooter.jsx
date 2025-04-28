import React from "react";
import { FiLogOut } from "react-icons/fi";

const EntryFooter = ({ setCamActivated }) => {
  return (
    <div className="p-4 border-t border-gray-700 flex items-center justify-center">
      <button
        onClick={() => setCamActivated(false)}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition"
      >
        <FiLogOut className="text-xl" />
        Disconnect
      </button>
    </div>
  );
};

export default EntryFooter;
