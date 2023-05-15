import Image from "next/image";
import React from "react";
import NSLoaderWithMsg from "../../common/NSLoaderWithMsg";
import CommaSeperator from "../../../utils/commaSeperator";

function QuaterResults({ header, childs, last_quarter_result, loader }) {
  const QuaterResultsChilds = () => {
    return childs?.map((item, index) => {
      return (
        <div className="flex items-center mb-3" key={index}>
          <Image src={item?.icon} alt={item?.subTitle} width={50} height={50} />
          {loader ? (
            <NSLoaderWithMsg />
          ) : (
            <div className="ml-3">
              <h2 className="text-xl font-interRegular leading-4">
                {index === 2 ? <p>{item?.count}%</p> : <p>INR {CommaSeperator(item?.count)}</p>}
              </h2>
              <p className="text-gray-500 font-interRegular">
                {item?.subTitle}
              </p>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <h2 className="mb-6 mt-5 text-[.9rem] font-interMedium capitalize">
        {header}
      </h2>
      <QuaterResultsChilds />
    </div>
  );
}

export default QuaterResults;
