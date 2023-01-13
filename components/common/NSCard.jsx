import React from "react";

function NSCard({ children, className }) {
  return (
    <div
      className={`${className} bg-white p-2 shadow-[var(--light-shadow)] rounded-md h-auto`}
    >
      {children}
    </div>
  );
}

export default NSCard;
