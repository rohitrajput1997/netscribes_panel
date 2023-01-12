import React from "react";

function NSButton({
  title,
  className,
  isIconButton,
  icon,
  bgPrimary,
  bgBordered,
}) {
  const bgColors = bgPrimary
    ? "bg-yellow-500"
    : bgBordered
    ? "border border-gray-300 text-black px-2"
    : "bg-yellow-500";

  return (
    <div>
      <button
        className={`${className} ${bgColors} py-3 text-white flex justify-center items-center`}
      >
        <div className="mr-3">{icon}</div>
        {title}
      </button>
    </div>
  );
}

export default NSButton;
