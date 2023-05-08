import Image from "next/image";
import React from "react";
import NSCard from "../common/NSCard";
import CommaSeperator from "../../utils/commaSeperator";

function SuggestedBrandUpdatesTile({ title, salesCount, subtitle }) {
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
        <h1 className="text-[1.3rem] font-interSemiBold">
          {title === "Samsung" ? (
            <Image
              src="/assets/samsung1.png"
              alt=""
              width={100}
              height={100}
              className="mt-[31px] mb-[13px]"
            />
          ) : title === "Bosch" ? (
            <Image
              src="/assets/bosch.png"
              alt=""
              width={100}
              height={100}
              className="mt-[28px] mb-[10px]"
            />
          ) : (
            title
          )}
        </h1>
        <hr className="border-b-2 border-cyan-100 mb-1" />
        <div className="mt-3">
          <p className="leading-8 text-[1rem] font-interMedium capitalize">
            {subtitle.split("_").join(" ")}
          </p>
          <h1 className="text-xl font-interRegular">{CommaSeperator(salesCount) || 0}</h1>
        </div>
      </div>
    </NSCard>
  );
}

export default SuggestedBrandUpdatesTile;
