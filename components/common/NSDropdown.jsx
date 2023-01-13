import { Select } from "antd";
import React from "react";

function NSDropdown({
  options,
  onChange,
  value,
  placeholder,
  className,
  title,
  style,
}) {
  return (
    <div>
      {title && <p className="font-MontRegular text-[.8rem]">{title}</p>}
      <Select
        options={options}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={className}
        style={style}
      />
    </div>
  );
}

export default NSDropdown;
