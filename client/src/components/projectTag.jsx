import React from "react";

const projectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-blue-500"
    : "text-[#ADB7BE] border-state-600 hover:border-white";
  return (
    <>
    {/* links */}
      <button
        className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </>
  );
};

export default projectTag;
