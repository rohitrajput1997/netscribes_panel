import { Checkbox, Select, Tooltip } from "antd";
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
  defaultValue,
  isError = false,
  errorMessage,
  onSelect,
}) {
  return (
    <div>
      {title && (
        <p className="font-interMedium text-[.8rem] mb-2 mt-2">{title}</p>
      )}
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
        defaultValue={defaultValue}
        onSelect={onSelect}
      >
        {options?.map((item, index) => {
          return (
            <Option
              key={item.id}
              className="flex items-center"
              value={item?.value}
            >
              <Tooltip title={item?.label} placement="left">
                <div className="flex items-center">
                  {optionsWithCheckbox && <Checkbox />}
                  <p className="ml-2">{item?.label}</p>
                </div>
              </Tooltip>
            </Option>
          );
        })}
      </Select>

      {isError && (
        <p className="text-red-500 font-montMedium mt-[-10px] mb-6">
          {errorMessage || "This field is required"}
        </p>
      )}
    </div>
  );
}

export default NSDropdown;
