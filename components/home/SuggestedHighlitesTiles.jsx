import Image from "next/image";
import React from "react";

function SuggestedHighlitesTiles({ image, title, content, bg, borderColor }) {
  return (
    <div className={`border ${borderColor} rounded-md p-2 mb-3`}>
      <div className={`flex items-center ${bg} w-fit py-1 px-2 rounded-full`}>
        <Image src={image} alt="" width={20} height={20} />
        <h4 className="ml-2">{title}</h4>
      </div>
      <p className="mt-2 min-h-[50px]">{content}</p>
    </div>
  );
}

export default SuggestedHighlitesTiles;
