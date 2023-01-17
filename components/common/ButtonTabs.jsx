import React from "react";

function ButtonTabs({ arr, style }) {
  return (
    <div className="flex">
      {arr?.map(({ label, value, index }) => (
        <p
          className="bg-blue-200 w-[fit-content] px-4 py-2 text-gray-800 ml-2 rounded-md cursor-pointer flex justify-center items-center"
          key={value}
          style={style}
        >
          {label}
        </p>
      ))}
    </div>
  );
}

export default ButtonTabs;
