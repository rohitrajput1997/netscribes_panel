import React from "react";
import NSLoaderWithMsg from "./NSLoaderWithMsg";

function NSButton({
  title,
  className,
  isIconButton,
  icon,
  bgPrimary,
  bgBordered,
  style,
  onClick,
  loader,
  isDisabled,
  small,
  isSecondary,
}) {
  const bgColors = bgPrimary
    ? "bg-yellow-500 text-white"
    : bgBordered
    ? "border border-gray-300 text-black px-2"
    : isDisabled
    ? "cursor-not-allowed bg-[#cccccc] text-[#666666]"
    : isSecondary
    ? "bg-slate-300 text-black"
    : "bg-yellow-500";
  const size = small ? "flex justify-center items-center h-[30px]" : "";

  return (
    <div>
      {loader ? (
        <NSLoaderWithMsg style={{ margin: "1rem 0" }} />
      ) : (
        <button
          className={`${className} ${bgColors} ${size} py-3 text-center font-interMedium ${
            icon ? "flex justify-center items-center" : ""
          } rounded-full min-w-[100px] ${
            isDisabled
              ? "cursor-not-allowed bg-[#cccccc] text-[#666666]"
              : "cursor-pointer"
          }`}
          style={style}
          onClick={onClick}
          disabled={isDisabled}
        >
          {icon && <div className="mr-3">{icon}</div>}
          {title}
        </button>
      )}
    </div>
  );
}

export default NSButton;
