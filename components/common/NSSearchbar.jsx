import React from "react";

function NSSearchbar({ placeholder, onChange, value, className, style }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        style={style}
      />
    </>
  );
}

export default NSSearchbar;
