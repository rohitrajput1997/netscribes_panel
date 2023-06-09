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
              : key === disabled
              ? "cursor-not-allowed bg-[#cccccc] text-[#666666]"
              : "bg-blue-200 text-gray-800 font-interRegular"
          }delay-75 duration-500 ease-in-out w-[fit-content] px-4 py-2 ml-2 rounded-full flex justify-center items-center`}
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
