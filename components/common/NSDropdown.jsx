import { Checkbox, Select, Tag, Tooltip } from "antd";
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
  isTooltip = true,
}) {
  const DropdownTagging = (props) => {
    const { label, closable, onClose } = props;

    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    let title = "";
    if (typeof label === "string" || typeof label === "boolean") {
      // title = label;
    } else {
      title = label?.[1]
        ? String(label?.[1])
        : label?.props?.children?.[1]?.props.children
        ? String(label?.props?.children?.[1]?.props.children)
        : "";
    }

    if (!title) return;

    return (
      <Tag
        color={"lightGrey"}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          maxWidth: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "black",
        }}
        title={title}
        className="font-interMedium"
      >
        {title}
      </Tag>
    );
  };

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
        tagRender={
          (props) => DropdownTagging(props) //, props?.label?.props?.children?.[1]
        }
        defaultValue={defaultValue}
        onSelect={onSelect}
        tokenSeparators={[","]}
        allowClear
      >
        {options?.map((item, index) => {
          return (
            <Option
              key={item.id}
              className="flex items-center"
              value={item?.value}
            >
              <div className="flex items-center">
                {optionsWithCheckbox && <Checkbox />}
                {isTooltip ? (
                  <Tooltip title={item?.label} placement="left">
                    <p className="ml-2">{item?.label}</p>
                  </Tooltip>
                ) : (
                  <p className="ml-2">{item?.label}</p>
                )}
              </div>
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
