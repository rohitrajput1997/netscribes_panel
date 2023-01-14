import Image from "next/image";
import React from "react";
import NSCard from "../common/NSCard";

function SuggestedBrandUpdatesTile({ title, content }) {
  return (
    <NSCard className="col-span-1 mt-3 min-h-[210px]" style={{padding: '10px 1rem'}}>
      <Image
        src="./assets/star (1).svg"
        alt=""
        width={20}
        height={20}
        className="float-right"
      />
      <div className="mt-3">
        <h1 className="text-[1.3rem]">{title}</h1>
        <hr className="border-b-2 border-cyan-100 my-1" />
        <p className="leading-8 text-[1rem]">{content}</p>
      </div>
    </NSCard>
  );
}

export default SuggestedBrandUpdatesTile;
