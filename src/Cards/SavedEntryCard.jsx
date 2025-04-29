import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { RiDownload2Line } from "react-icons/ri";

const SavedEntryCard = ({ entry, deleteEntryFromLocalStorage, darkMode }) => {
  return (
    <div
      className={`container flex rounded-[16px] overflow-hidden ${
        darkMode ? "bg-[#1B1B1B] text-[#888888]" : "bg-slate-200 text-[#888888]"
      }`}
    >
      <a
        href={entry.screenshot}
        download={`screenshot-${entry.id}.jpg`}
        className="group relative"
      >
        <div
          className={`absolute hidden group-hover:block group-hover:w-full group-hover:h-full group-hover:flex group-hover:justify-center group-hover:items-center ${
            darkMode ? "group-hover:bg-black/75" : "group-hover:bg-black/50"
          }`}
        >
          <RiDownload2Line className="text-[24px] text-white" />
        </div>
        <div
          className={`img__container bg-cover bg-center w-[72px] h-full`}
          style={{ backgroundImage: `url(${entry.screenshot})` }}
        ></div>
      </a>

      <div className="ux__container w-[100%] flex  items-center justify-between py-[16px]">
        <div className="info__container ml-[24px]">
          <h3 className="text-center rounded-2xl border-1 px-[8px] py-[2px] text-[12px] font-bold w-fit">{`${(
            entry.accuracyPercent * 100
          ).toFixed(0)}% accuracy`}</h3>
          <div className="flex gap-[8px] items-center">
            <h3
              className={`text-[20px] font-bold ${
                darkMode ? "text-white" : "text-[#2F2F2F]"
              }`}
            >
              {entry.objectName.charAt(0).toUpperCase() +
                entry.objectName.slice(1)}{" "}
            </h3>
            <h3 className="text-[16px] font-semibold">ID {entry.id}</h3>
          </div>
        </div>
        <div
          className={`group flex justify-center items-center w-[40px] h-[40px] transition mr-[16px] rounded-[8px] cursor-pointer ${
            darkMode ? "hover:bg-[#2F2F2F] " : "hover:bg-slate-300"
          }`}
        >
          <FiTrash2
            className="text-[24px] group-hover:text-[#DB0004] transition"
            onClick={() => deleteEntryFromLocalStorage(entry.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default SavedEntryCard;
