import React from "react";
import NSCard from "../../common/NSCard";
import NSTable from "../../common/NSTable";
import {
  columnsOne,
  columnsTwo,
  columnsThree,
} from "./ProductListingTablesColumns";
import { Collapse } from "antd";
const { Panel } = Collapse;
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

function OSProductListing() {
  const dataSource = [
    {
      metrics: "Revenue",
      period: "",
      current: "111,111,111,111",
      target: "",
    },
    {
      metrics: "Revenue",
      period: "",
      current: "111,111,111,111",
      target: "",
    },
  ];
  const CollapsibleHeader = ({ title, subTitle, icon }) => (
    <div className="flex justify-between items-center text-[12px]">
      <h3>{title}</h3>
      <div className="flex items-center">
        <p className="mr-1">{subTitle}</p>
        {icon}
      </div>
    </div>
  );
  return (
    <div>
      <div className="grid grid-cols-10 gap-2">
        <div className="col-span-6">
          <NSCard className="OSP border border-2-[var(--bg-main)]">
            <NSTable
              dataSource={dataSource || []}
              columns={columnsOne}
              isPagination={false}
            />
          </NSCard>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <NSCard className="col-span-1 border border-2-[var(--bg-main)]">
              <NSTable
                dataSource={[
                  {
                    productName: "Samsung 550 Ltr. sku 704492",
                    optStatus: "Not Started",
                    lastRepricing: "12 min ago",
                  },
                ]}
                columns={columnsTwo}
                rowSelection
                isPagination={false}
              />
            </NSCard>
            <NSCard className="col-span-1 border border-2-[var(--bg-main)]">
              <NSTable dataSource={[]} columns={columnsThree} />
            </NSCard>
          </div>
        </div>
        <div className="col-span-2">
          <NSCard className="col-span-1 min-h-[216px] border border-2-[var(--bg-main)]">
            <div className="p-2">
              <h1 className="text-[14px] font-interSemiBold mb-3">
                Average shelf price
              </h1>
              <Collapse accordion className="bg-[#e4e3e3]">
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

          <NSCard className="col-span-1 mt-2 h-[216px] border border-2-[var(--bg-main)]">
            <div className="p-2">
              <h1 className="text-[14px] font-interSemiBold mb-3">
                Goal Performance
              </h1>
            </div>
          </NSCard>
        </div>
        <NSCard className="col-span-2 h-[500px] overflow-y-scroll border border-2-[var(--bg-main)]">
          <div className="p-2">
            <h1 className="text-[14px] font-interSemiBold mb-3">
              Forecast for target Metrics
            </h1>
            <Collapse accordion className="bg-[#e4e3e3]">
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

          <div className="mt-2 p-2">
            <h1 className="text-[14px] font-interSemiBold mb-3">
              Forecast for additional Metrics
            </h1>
            <Collapse accordion className="bg-[#e4e3e3]">
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
