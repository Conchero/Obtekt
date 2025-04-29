import React from "react";
import { MdInfoOutline, MdCheckCircleOutline } from "react-icons/md";

const DetectedEntryCard = ({
  prediction,
  setEntries,
  removePredictionToShow,
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
    <div className="container flex bg-[#1B1B1B]/75 backdrop-blur-md justify-between items-center px-[24px] py-[16px] rounded-xl">
      <div className="info__containter flex items-center gap-[16px]">
        <MdInfoOutline className="text-[#888888] text-[48px]" />
        <div className="flex-column">
          <span className="text-[#888888] text-[16px] font-semibold">
            Object detected
          </span>
          <h4 className="text-[#FFFFFF] text-[20px] font-bold">
            {prediction.objectName.charAt(0).toUpperCase() +
              prediction.objectName.slice(1)}{" "}
          </h4>
        </div>
      </div>
      <div className="user-choice__container flex gap-4">
        <button
          className="flex flex-row items-center text-[20px] font-semibold bg-[#00A158] hover:bg-white rounded-[12px] text-white  hover:text-[#00A150] gap-[12px] px-[12px] py-[4px] group cursor-pointer transition"
          onClick={saveEntryToLocalStorage}
        >
          <MdCheckCircleOutline className="group-hover:text-[#00A150] text-white text-[20px]" />
          Save it
        </button>
        <button
          className="text-[20px] font-semibold  bg-[#1B1B1B] rounded-[12px] hover:bg-white text-white  hover:text-[ hover:text-[#1B1B1B] transition p-2 cursor-pointer"
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
