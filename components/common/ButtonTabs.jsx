import React from "react";

function ButtonTabs({
  arr,
  style,
  setFunc,
  selectedValue,
  selectedKey,
  disabled,
}) {
  return (
    <div className="flex">
      {arr?.map(({ label, value, key, index }) => (
        <button
          className={`${
            value === selectedValue
              ? "bg-[#005f86] text-white font-interMedium"
              : "bg-blue-200 text-gray-800 font-interRegular"
          } ${
            key === disabled ? "cursor-not-allowed" : "cursor-pointer"
          } delay-75 duration-500 ease-in-out w-[fit-content] px-4 py-2 ml-2 rounded-md flex justify-center items-center`}
          key={value}
          style={style}
          onClick={() => {
            setFunc(value);
            selectedKey && selectedKey(key);
          }}
          disabled={key === disabled}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ButtonTabs;
