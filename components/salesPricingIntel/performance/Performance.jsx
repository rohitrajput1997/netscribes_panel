import { Progress, Switch } from "antd";
import React from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowUp } from "react-icons/md";
import NSCard from "../../common/NSCard";
import NSDropdown from "../../common/NSDropdown";
import NSInput from "../../common/NSInput";
import RepricingHighlightsTileOne from "./RepricingHighlightsTileOne";
import RepricingHighlightsTileTwo from "./RepricingHighlightsTileTwo";

const Performance = () => {
  return (
    <div>
      <h1 className="text-[1.4rem] font-bold">
        Your Persona Selection Settings
      </h1>

      <div>
        <NSCard className="my-3 p-4">
          <div className="grid grid-cols-3">
            <div className="col-span-1 min-h-[300px] h-auto border-r-2 border-b-2 p-2">
              <div className="flex">
                <div className="repricing-intervals h-[100%] border border-gray-300 rounded-md w-[70%] p-2 mb-2 mr-2">
                  <h2 className="font-bold">Repricing intervals</h2>
                  <div className="flex items-center justify-between">
                    <p className="text-[0.8rem]">New price should be</p>
                    <NSDropdown options={[]} className="w-[110px]" />
                  </div>
                  <div className="h-20 bg-[var(--bg-main)] mt-2"></div>
                  <p className="text-blue-600 text-[.7rem] font-bold mt-2">
                    Current Price - 5% and Current Price + 5%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mr-2">
                <div className="new-pricing border border-gray-300 rounded-md w-[70%] p-2">
                  <h2 className="font-bold truncate">
                    New Price should be higher than
                  </h2>
                  <div className="flex justify-between flex-wrap mt-3">
                    <NSDropdown options={[]} className="w-[80px]" />
                    <NSDropdown options={[]} className="w-[80px]" />
                    <NSDropdown options={[]} className="w-[80px]" />
                  </div>
                  <h2 className="font-bold truncate mt-2">
                    New Price should be lower than
                  </h2>
                  <div className="flex justify-between flex-wrap mt-3">
                    <NSDropdown options={[]} className="w-[80px]" />
                    <NSDropdown options={[]} className="w-[80px]" />
                    <NSDropdown options={[]} className="w-[80px]" />
                  </div>
                </div>
                <div className="max-items-amount new-pricing border border-gray-300 rounded-md w-[28%] p-2">
                  <Switch />
                  <h2 className="font-bold mt-2">
                    Maximum items amount for pricing
                  </h2>
                  <NSInput
                    type="text"
                    style={{ height: "30px" }}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1 min-h-[300px] h-auto border-r-2 border-b-2 p-2">
              <div class="grid grid-rows-3 grid-flow-col gap-2">
                <div class="row-end-3 row-span-2 border border-gray-300 rounded-md p-2 mb-2 mr-2">
                  <div>
                    <div className="flex items-center text-[.8rem]">
                      <MdOutlineKeyboardArrowUp className="bg-gray-200" />
                      <h1 className="ml-2 font-bold">
                        Samsung black Refregerator
                      </h1>
                    </div>
                    <div className="flex items-center text-[.8rem]">
                      <MdKeyboardArrowUp className="bg-gray-200" />
                      <h1 className="ml-2">SKU: 1234567890</h1>
                    </div>
                  </div>
                  <div className="h-14 bg-[var(--bg-main)] mt-2 flex justify-between items-center p-1 rounded-md">
                    <div>
                      <h6 className="text-[.9rem] font-semibold">29.00</h6>
                      <p className="text-[0.6rem]">Current Price</p>
                    </div>
                    <div>
                      <h6 className="text-[.9rem] font-semibold">29.00</h6>
                      <p className="text-[0.6rem]">New Price</p>
                    </div>
                    <div>
                      <h6 className="text-[.9rem] font-semibold">29.00</h6>
                      <p className="text-[0.6rem]">Diff</p>
                    </div>
                  </div>
                </div>

                <div class="row-start-2 row-span-2 border border-gray-300 rounded-md p-2 mb-2 mr-2">
                  <h1 className="font-bold">Hit Monthly revenue</h1>
                  <h1 className="font-semibold">992943 / 1000 000</h1>

                  <div className="my-2">
                    <Progress
                      strokeLinecap="butt"
                      percent={75}
                      strokeColor="orange"
                    />
                    <div className="flex items-center">
                      <h1 className="font-semibold">Hit probability</h1>
                      <h1 className="bg-orange-200 ml-3 px-4 text-orange-500 font-bold">
                        Medium
                      </h1>
                    </div>
                  </div>

                  <h1 className="font-bold">Clear Stocks</h1>
                  <h1 className="font-semibold">992943 / 1000 000</h1>

                  <div className="my-2">
                    <Progress
                      strokeLinecap="butt"
                      percent={75}
                      strokeColor="#005f86"
                    />
                    <div className="flex items-center">
                      <h1 className="font-semibold">Hit probability</h1>
                      <h1 className="bg-cyan-200 ml-3 px-4 text-[#005f86] font-bold">
                        High
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 min-h-[300px] h-auto border-b-2 p-2">
              <div className=" border border-gray-300 rounded-md p-2 mb-2 mr-2">
                <div className="flex items-center text-[.8rem]">
                  <MdOutlineKeyboardArrowUp className="bg-gray-200" />
                  <h1 className="ml-2 font-bold">Samsung black Refregerator</h1>
                </div>
                <div className="flex items-center text-[.8rem]">
                  <MdKeyboardArrowUp className="bg-gray-200" />
                  <h1 className="ml-2">
                    SKU: 1234567890{" "}
                    <span className="bg-orange-200 ml-3 px-4 text-orange-500 font-bold">
                      KVI
                    </span>
                  </h1>
                </div>
              </div>
              <div className="h-auto bg-[var(--bg-main)] mt-2 p-1 rounded-md">
                <h6 className="text-[.9rem] font-bold">Repricing Focus:</h6>
                {[0, 1].map((_) => (
                  <div className="flex mt-1 mb-1" key={_}>
                    <p className="w-[49%] font-semibold">Sales Items</p>
                    <p className="w-[49%] font-semibold">Grow</p>
                  </div>
                ))}
              </div>
              <div className="h-auto bg-[var(--bg-main)] mt-2 p-1 rounded-md">
                <h6 className="text-[.9rem] font-bold">Price Sensitivity</h6>
                {[0, 1].map((_) => (
                  <div className="flex mt-1 mb-1" key={_}>
                    <p className="w-[49%] font-semibold">Sales Items</p>
                    <p className="w-[49%] font-semibold">Grow</p>
                  </div>
                ))}
              </div>

              <div className=" border border-gray-300 rounded-md p-2 my-2 mr-2">
                {[0, 1, 2].map((_) => (
                  <div className="flex items-center mb-2" key={_}>
                    <div className="w-8 h-8 bg-gray-200"></div>
                    <div className="bg-[var(--bg-main)] w-full px-2 py-1 ml-[1px] font-MontSemiBold text-[1rem] rounded-md">
                      Start Pricing
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-1 min-h-[300px] h-auto border-r-2 p-2">
              <div class="grid grid-rows-3 grid-flow-col gap-2">
                <div class="row-end-3 row-span-2 border border-gray-300 rounded-md p-2 mb-2 mr-2">
                  <h1 className="font-bold">What is your focus?</h1>
                  <div className="mt-2">
                    <NSDropdown title="Matric to grow:" className="w-[100%]" />
                  </div>
                  <div className="mt-2">
                    <NSDropdown
                      title="Matric to maintain:"
                      className="w-[100%]"
                    />
                  </div>
                </div>

                <div class="row-start-2 row-span-2 border border-gray-300 rounded-md p-2 mb-2 mr-2">
                  <h1 className="font-bold">Repricing</h1>
                  {[0, 1, 2].map((_) => (
                    <div
                      key={_}
                      className="flex items-center bg-[var(--bg-main)] w-full px-2 py-1 ml-[1px] font-MontSemiBold text-[1rem] rounded-md my-2"
                    >
                      <div className="w-6 h-6 bg-gray-200"></div>
                      <div className="text-[0.8rem] ml-2">Start pricing</div>
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
                  <h1 className="font-bold bg-[var(--bg-main)] p-2">
                    Repricing
                  </h1>
                  <div className="p-2">
                    {[0, 1, 2].map((_) => (
                      <div className="mt-2" key={_}>
                        <h1 className="font-MontSemiBold text-[.8rem]">
                          49.99
                        </h1>
                        <p className="font-MontRegular text-[.7rem]">
                          Current Price
                        </p>
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
        </NSCard>
        <div>
          <h1 className="text-[1.4rem] font-bold mb-3">
            Your Persona Selection Settings
          </h1>
          <div className="grid grid-cols-3 gap-2">
            <RepricingHighlightsTileOne />
            <RepricingHighlightsTileTwo
              title="Our Price"
              subtitle="INR 4,232"
              showupDownArrow={false}
            />
            <RepricingHighlightsTileTwo title="SKU in Focus" showupDownArrow={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
