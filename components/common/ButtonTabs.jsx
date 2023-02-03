import React from "react";

function ButtonTabs({ arr, style, setFunc, selectedValue, selectedKey }) {
  return (
    <div className="flex">
      {arr?.map(({ label, value, key, index }) => (
        <p
          className={`${value === selectedValue ? 'bg-[#005f86] text-white' : 'bg-blue-200 text-gray-800'} delay-75 duration-500 ease-in-out w-[fit-content] px-4 py-2 ml-2 rounded-md cursor-pointer flex justify-center items-center`}
          key={value}
          style={style}
          onClick={() => {setFunc(value); selectedKey(key);}}
        >
          {label}
        </p>
      ))}
    </div>
  );
}

export default ButtonTabs;
