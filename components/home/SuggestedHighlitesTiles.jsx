import Image from "next/image";
import React from "react";
import NSLoaderWithMsg from "../common/NSLoaderWithMsg";
import { Progress } from "antd";

function SuggestedHighlitesTiles({
  image,
  title,
  content,
  bg,
  borderColor,
  textColor,
  loader,
  showProgress = false,
  count,
}) {
  return (
    <div
      className={`border ${borderColor} rounded-[15px] p-2 mb-3 flex justify-between items-center`}
    >
      <div className={showProgress && `w-[70%]`}>
        <div className={`flex items-center ${bg} w-fit py-1 px-2 rounded-full`}>
          <Image src={image} alt="" width={20} height={20} />
          <h4 className={`ml-2 font-interMedium ${textColor}`}>{title}</h4>
        </div>
        <p className="mt-2 min-h-[50px] font-interRegular">{content}</p>
      </div>
      {showProgress && (
        <div className="">
          <Progress
            type="circle"
            percent={count}
            size={20}
            strokeWidth={18}
            width={80}
            strokeColor="#005f86"
            className="custom-progress"
          ></Progress>
        </div>
      )}
    </div>
  );
}

export default SuggestedHighlitesTiles;
