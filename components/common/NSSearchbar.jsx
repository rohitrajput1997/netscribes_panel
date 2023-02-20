import Image from "next/image";
import React from "react";

function NSSearchbar({
  placeholder,
  onChange,
  value,
  className,
  style,
  SearchiconPlaceOnTop,
  showSearchIcon = true,
}) {
  return (
    <>
      <div className="relative">
        {showSearchIcon && (
          <Image
            src="./assets/search.svg"
            alt=""
            width={15}
            height={15}
            className={`absolute ${
              SearchiconPlaceOnTop ? SearchiconPlaceOnTop : "top-3"
            } left-2`}
          />
        )}
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          style={style}
        />
      </div>
    </>
  );
}

export default NSSearchbar;
