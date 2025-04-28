import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SavedEntryCard = ({ entry, deleteEntryFromLocalStorage }) => {
  return (
    // <div>
    //   <a href={entry.screenshot} download={`screenshot-${entry.id}.jpg`}>
    //     <img src={entry.screenshot} alt="screenshot" />
    //   </a>
    //   <div>ID : {entry.id}</div>
    //   <div>NAME : {entry.objectName}</div>
    //   <div>ACCURACY : {entry.accuracyPercent}</div>
    //   <button onClick={() => deleteEntryFromLocalStorage(entry.id)}>
    //     Delete
    //   </button>
    // </div>

    <div className="container flex bg-[#1B1B1B] text-[#888888] border">
      <a href={entry.screenshot} download={`screenshot-${entry.id}.jpg`}>
        <div className={` border-red img__container bg-cover bg-center w-25 h-25 bg-stone-50`} style={{ backgroundImage: `url(${entry.screenshot})` }}>
        </div>
      </a>
      <div className=" px-4 ux__container w-[100%] border flex  items-center justify-between">
        <div className="info__container">
          <h3 className=" text-center rounded-2xl border-2 px-2 py-1 text-[12px]">{`${(entry.accuracyPercent * 100).toFixed(0)}% accuracy`}</h3>
          <div className="flex gap-2 items-center justify-evenly">
            <h3 className="text-[#FFFFFF] text-[20px] font-bold">{entry.objectName}</h3>
            <h3 className="text-[16px] font-semibold">{entry.id}</h3>
          </div>
        </div>
        <FontAwesomeIcon className="hover:text-[#DB0004]" icon={faTrash} />
      </div>

    </div>
  );
};

export default SavedEntryCard;
