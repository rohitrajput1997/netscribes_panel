import React from "react";

function NSButton({
  title,
  className,
  isIconButton,
  icon,
  bgPrimary,
  bgBordered,
  style,
}) {
  const bgColors = bgPrimary
    ? "bg-yellow-500 text-white"
    : bgBordered
    ? "border border-gray-300 text-black px-2"
    : "bg-yellow-500";

  return (
    <div>
      <button
        className={`${className} ${bgColors} py-3 text-center ${
          icon ? "flex justify-center items-center" : ""
        } rounded-full min-w-[100px]`}
        style={style}
      >
        {icon && <div className="mr-3">{icon}</div>}
        {title}
      </button>
    </div>
  );
}

export default NSButton;
