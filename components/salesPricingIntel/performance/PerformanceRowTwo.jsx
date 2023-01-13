import Image from "next/image";
import React from "react";
import NSDropdown from "../../common/NSDropdown";
import PerformanceRepricingJson from "../../json/PerformanceRepricingJson";

function PerformanceRowTwo() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 min-h-[300px] h-auto border-r-2 p-2">
        <div class="grid grid-rows-3 grid-flow-col gap-2">
          <div class="row-end-3 row-span-2 border border-gray-300 rounded-md p-2 mb-2 mr-2">
            <h1 className="font-bold">What is your focus?</h1>
            <div className="mt-2">
              <NSDropdown title="Matric to grow:" className="w-[100%]" />
            </div>
            <div className="mt-2">
              <NSDropdown title="Matric to maintain:" className="w-[100%]" />
            </div>
          </div>

          <div class="row-start-2 row-span-2 border border-gray-300 rounded-md p-2 mb-2 mr-2">
            <h1 className="font-bold">Repricing</h1>
            {PerformanceRepricingJson.map((_, index) => (
              <div
                key={index}
                className="flex items-center bg-[var(--bg-main)] w-full px-2 py-1 ml-[1px] font-MontSemiBold text-[1rem] rounded-md my-2"
              >
                <Image src={_.icon} alt={_.label} width={20} height={20} />
                <div className="text-[0.8rem] ml-2">{_.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 min-h-[300px] h-auto p-2">
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-1 max-h-[300px] overflow-y-scroll">
            <div className="bg-[var(--secondary)] p-2 text-white rounded-md text-center">
              Compititor
            </div>
          </div>
          <div className="col-span-1 border max-h-[300px] border-gray-300 rounded-md mb-2 mr-2">
            <h1 className="font-bold bg-[var(--bg-main)] p-2">Repricing</h1>
            <div className="p-2">
              {[0, 1, 2].map((_) => (
                <div className="mt-2" key={_}>
                  <h1 className="font-MontSemiBold text-[.8rem]">49.99</h1>
                  <p className="font-MontRegular text-[.7rem]">Current Price</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 min-h-[300px] h-auto border border-gray-300 rounded-md mb-2 mr-2 p-2">
            <div className="flex justify-between my-2">
              <div className="w-7 h-7 bg-gray-100 mr-2 mt-2"></div>
              <p className="w-[95%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, assumenda.
              </p>
            </div>
            <div className="flex justify-between my-2">
              <div className="w-7 h-7 bg-gray-100 mr-2 mt-2"></div>
              <p className="w-[95%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceRowTwo;
