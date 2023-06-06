import React from "react";

function NSSocialButton({ icon, title, className, style, onClick }) {
  return (
    <div className={`${className} w-full h-auto border border-slate-400 flex justify-between`}>
      <div className="bg-sky-100 flex justify-center items-center p-2 border-r-[1px] border-slate-400">{icon}</div>
      <h6 className=" px-4 py-1 flex justify-center items-center font-interRegular text-sm">{title}</h6>
    </div>
  );
}

export default NSSocialButton;
