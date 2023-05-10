import React from "react";
import NSCard from "../../common/NSCard";
import NSTable from "../../common/NSTable";
import { columnsOne, columnsTwo, columnsThree } from "./ProductListingTablesColumns";
import { Collapse } from "antd";
const { Panel } = Collapse;
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

function OSProductListing() {
  const dataSource = [
    {
      matrics: "Revenue",
      period: "",
      current: "111,111,111,111",
      target: "",
    },
    {
      matrics: "Revenue",
      period: "",
      current: "111,111,111,111",
      target: "",
    },
    {
      matrics: "Revenue",
      period: "",
      current: "111,111,111,111",
      target: "",
    },
    {
      matrics: "Revenue",
      period: "",
      current: "111,111,111,111",
      target: "",
    },
    {
      matrics: "Revenue",
      period: "",
      current: "111,111,111,111",
      target: "",
    },
  ];
  const CollapsibleHeader = ({ title, subTitle, icon }) => (
    <div className="flex justify-between items-center">
      <h3>{title}</h3>
      <div className="flex items-center">
        <p className="mr-1">{subTitle}</p>
        {icon}
      </div>
    </div>
  );
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          <NSCard className='OSP'>
            <NSTable dataSource={dataSource || []} columns={columnsOne} />
          </NSCard>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <NSCard className="col-span-1">
              <NSTable dataSource={[
                {
                    productName: 'Samsung 550 Ltr. sku 704492',
                    optStatus: 'Not Started',
                    lastRepricing: '12 min ago',
                }
              ]} columns={columnsTwo} rowSelection />
            </NSCard>
            <NSCard className="col-span-1">
              <NSTable dataSource={[]} columns={columnsThree} />
            </NSCard>
          </div>
        </div>
        <div className="col-span-1">
          <NSCard className="col-span-1 h-[216px]">
            <div className="p-2">
              <h1 className="text-lg font-interSemiBold mb-3">
                Avarage shelf price
              </h1>
              <Collapse accordion>
                <Panel header={<CollapsibleHeader title="Revenue" />} key="1">
                  <div>
                    <h1 className="flex justify-between items-center text-[12px]">
                      <p>Current</p>
                      <p>63.48</p>
                    </h1>
                    <h1 className="flex justify-between items-center text-[12px] mt-2">
                      <p>After repricing</p>
                      <p>64.91</p>
                    </h1>
                  </div>
                </Panel>
              </Collapse>
            </div>
          </NSCard>

          <NSCard className="col-span-1 mt-4 h-[216px]">
            <div className="p-2">
              <h1 className="text-lg font-interSemiBold mb-3">
                Goal Performance
              </h1>
            </div>
          </NSCard>

        </div>
        <NSCard className="col-span-2 h-[500px] overflow-y-scroll">
          <div className="p-2">
            <h1 className="text-lg font-interSemiBold mb-3">
              ForeCadst for target matrics
            </h1>
            <Collapse accordion>
              <Panel
                header={
                  <CollapsibleHeader
                    title="Revenue"
                    subTitle="10.3%"
                    icon={<BsArrowUp />}
                  />
                }
                key="1"
              >
                <p>okay</p>
              </Panel>
              <Panel
                header={
                  <CollapsibleHeader
                    title="Revenue"
                    subTitle="10.3%"
                    icon={<BsArrowUp />}
                  />
                }
                key="2"
              >
                <p>okay</p>
              </Panel>
            </Collapse>
          </div>

          <div className="mt-4 p-2">
            <h1 className="text-lg font-interSemiBold mb-3">
              Forecadst for additional matrics
            </h1>
            <Collapse accordion>
              <Panel
                header={
                  <CollapsibleHeader
                    title="Profit"
                    subTitle="10.3%"
                    icon={<BsArrowUp />}
                  />
                }
                key="1"
              >
                <p>okay</p>
              </Panel>
              <Panel
                header={
                  <CollapsibleHeader
                    title="Sales items"
                    subTitle="10.3%"
                    icon={<BsArrowUp />}
                  />
                }
                key="2"
              >
                <div>
                  <h1 className="flex justify-between items-center text-[12px] mt-2">
                    <p className="font-interSemiBold">Prices</p>
                    <p className="font-interSemiBold">Forecast</p>
                  </h1>
                  <h1 className="flex justify-between items-center text-[12px] mt-2">
                    <p>Current</p>
                    <p>63.48</p>
                  </h1>
                  <h1 className="flex justify-between items-center text-[12px] mt-2">
                    <p>Optimized</p>
                    <p>64.91</p>
                  </h1>
                  <h1 className="flex justify-between items-center text-[12px] mt-2">
                    <p>Final</p>
                    <p>64.91</p>
                  </h1>
                </div>
              </Panel>
            </Collapse>
          </div>

        </NSCard>
      </div>
    </div>
  );
}

export default OSProductListing;
