import Image from "next/image";
import React from "react";
import NSCard from "../common/NSCard";
import CommaSeperator from "../../utils/commaSeperator";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Tooltip } from "antd";

function SuggestedBrandUpdatesTile({ title, salesCount, subtitle, setOpen }) {
  const showIcon = (title) => {
    switch (title) {
      case "Samsung":
        return (
          <Image
            src="/assets/samsung1.png"
            alt=""
            width={100}
            height={100}
            className="mt-[31px] mb-[13px]"
          />
        );
      case "Bosch":
        return (
          <Image
            src="/assets/bosch.png"
            alt=""
            width={100}
            height={100}
            className="mt-[28px] mb-[10px]"
          />
        );
      case "Haier":
        return (
          <Image
            src="/assets/haier.png"
            alt=""
            width={100}
            height={30}
            className="mt-[28px] mb-[10px]"
          />
        );
      case "Godrej":
        return (
          <Image
            src="/assets/godrej.png"
            alt=""
            width={100}
            height={100}
            className="mt-[28px] mb-[10px] object-fill"
            style={{ height: "23px" }}
          />
        );
      case "Samsung":
        return <p>{title}</p>;
    }
  };

  return (
    <NSCard
      className="col-span-1 mt-3 min-h-[190px]"
      style={{ padding: "10px 1rem" }}
    >
      <Image
        src="./assets/star (1).svg"
        alt=""
        width={20}
        height={20}
        className="float-right"
      />
      <div className="mt-3">
        <h1 className="text-[1.3rem] font-interSemiBold flex justify-between items-center">
          {showIcon(title)}
          {/* <Tooltip title={`Delete ${title}`}>
            <RiDeleteBin6Fill
              size={20}
              className="mt-4 mr-[-20px] cursor-pointer"
              color="#005f86"
              onClick={() => setOpen(true)}
            />
          </Tooltip> */}
        </h1>

        <hr className="border-b-2 border-cyan-100 mb-1" />
        <div className="mt-3">
          <p className="leading-8 text-[1rem] font-interMedium capitalize">
            {subtitle.split("_").join(" ")}
          </p>
          <h1 className="text-xl font-interRegular">
            {CommaSeperator(salesCount || 0) || 0}
          </h1>
        </div>
      </div>
    </NSCard>
  );
}

export default SuggestedBrandUpdatesTile;
