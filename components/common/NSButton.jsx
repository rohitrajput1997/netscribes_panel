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
}) {
  const bgColors = bgPrimary
    ? "bg-yellow-500 text-white"
    : bgBordered
    ? "border border-gray-300 text-black px-2"
    : "bg-yellow-500";

  return (
    <div>
      {loader ? (
        <NSLoaderWithMsg style={{margin: '1rem 0'}} />
      ) : (
        <button
          className={`${className} ${bgColors} py-3 text-center font-interMedium ${
            icon ? "flex justify-center items-center" : ""
          } rounded-full min-w-[100px]`}
          style={style}
          onClick={onClick}
        >
          {icon && <div className="mr-3">{icon}</div>}
          {title}
        </button>
      )}
    </div>
  );
}

export default NSButton;
