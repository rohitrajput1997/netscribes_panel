import React from "react";

function NSCard({ children, className, style }) {
  return (
    <div
      className={`${className} bg-white p-2 shadow-[var(--light-shadow)] rounded-md h-auto`}
      style={style}
    >
      {children}
    </div>
  );
}

export default NSCard;
