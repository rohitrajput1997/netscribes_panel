import { Checkbox, Select } from "antd";
import React from "react";
const { Option } = Select;

function NSDropdown({
  options,
  onChange,
  value,
  placeholder,
  className,
  title,
  style,
  dropdownRender,
  optionsWithCheckbox,
  isMultiple,
}) {
  return (
    <div>
      {title && <p className="font-MontRegular text-[.8rem]">{title}</p>}
      <Select
        dropdownRender={(menu) => (
          <>
            {dropdownRender}
            {menu}
          </>
        )}
        mode={isMultiple && "multiple"}
        // options={options}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={className}
        style={style}
        tagRender={(props) => props?.label?.props?.children?.[1]}
      >
        {options?.map((item, index) => {
          return (
            <Option
              key={index}
              className="flex items-center"
              value={item?.value}
            >
              <div className="flex items-center">
                {optionsWithCheckbox && <Checkbox />}
                <p className="ml-2">{item?.label}</p>
              </div>
            </Option>
          );
        })}
      </Select>
    </div>
  );
}

export default NSDropdown;
