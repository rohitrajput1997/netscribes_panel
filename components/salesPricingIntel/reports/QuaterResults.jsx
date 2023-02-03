import Image from "next/image";
import React from "react";

function QuaterResults({ header, childs }) {
  const QuaterResultsChilds = () => {
    return childs?.map((item, index) => {
      return (
        <div className="flex items-center mb-3" key={index}>
          <Image src={item?.icon} alt={item?.subTitle} width={50} height={50} />
          <div className="ml-3">
            <h2 className="text-xl font-MontMedium leading-4">{item?.count}</h2>
            <p className="text-gray-500 font-MontMedium">{item?.subTitle}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2 className="mb-6 mt-5 text-[.9rem] font-MontMedium">{header}</h2>
      <QuaterResultsChilds />
    </div>
  );
}

export default QuaterResults;