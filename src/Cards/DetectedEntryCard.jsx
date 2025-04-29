import React from "react";
import { MdInfoOutline, MdCheckCircleOutline } from "react-icons/md";

const DetectedEntryCard = ({
  prediction,
  setEntries,
  removePredictionToShow,
  darkMode,
}) => {
  const saveEntryToLocalStorage = () => {
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries =
      existingEntries.length > 0
        ? [prediction, ...existingEntries]
        : [prediction];
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
    removePredictionToShow(prediction.id);

    setEntries(updatedEntries);
  };

  return (
    <div
      className={`container flex lg:flex-row backdrop-blur-md justify-between items-center px-[24px] py-[16px] rounded-xl ${
        darkMode ? "bg-[#1B1B1B]/75" : "bg-slate-100/75"
      }`}
    >
      <div className="info__containter flex flex-col lg:flex-row items-left lg:items-center gap-[4px] lg:gap-[16px]">
        <MdInfoOutline className="text-[#888888] text-[48px]" />
        <div className="flex-column">
          <span className="text-[#888888] text-[16px] font-semibold">
            Object detected
          </span>
          <h4
            className={`text-[20px] font-bold ${
              darkMode ? "text-[#FFFFFF]" : "text-[#2F2F2F]"
            }`}
          >
            {prediction.objectName.charAt(0).toUpperCase() +
              prediction.objectName.slice(1)}{" "}
          </h4>
        </div>
      </div>
      <div className="user-choice__container flex flex-col lg:flex-row gap-[8px] lg:gap-4">
        <button
          className="flex flex-row items-center text-[20px] font-semibold bg-[#00A158] hover:bg-white rounded-[12px] text-white  hover:text-[#00A150] gap-[12px] px-[12px] py-[4px] group cursor-pointer transition"
          onClick={saveEntryToLocalStorage}
        >
          <MdCheckCircleOutline className="group-hover:text-[#00A150] text-white text-[20px]" />
          <p className="lg:text-[20px]">Save it</p>
        </button>
        <button
          className={`text-[20px] font-semibold rounded-[12px] transition p-2 cursor-pointer ${
            darkMode
              ? "bg-transparent hover:bg-white text-white hover:text-[#1B1B1B]"
              : "bg-transparent hover:bg-[#2F2F2F] text-[#2F2F2F] hover:text-slate-200"
          }`}
          onClick={(e) => {
            console.log("azeaze");
            removePredictionToShow(prediction.id);
          }}
        >
          Discard
        </button>
      </div>
    </div>
  );
};

export default DetectedEntryCard;
