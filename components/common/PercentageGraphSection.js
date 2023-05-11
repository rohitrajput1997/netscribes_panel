import React from 'react'
import NSCard from './NSCard'
import { Progress } from 'antd'

function PercentageGraphSection() {
  return (
        <NSCard className="my-3 p-4 grid grid-cols-3" style={{backgroundColor: 'var(--bg-main)'}}>
          <div className="col-span-1 border-r-2 border-gray-400 p-2">
            <h1 className="font-interSemiBold mb-2">Revenue boosted</h1>
            <div className="flex">
              <p className="w-[50%] font-interRegular text-transparent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, quo!
              </p>
              <div className="w-[50%] flex justify-center items-center">
                <Progress
                  type="circle"
                  percent={75}
                  size={80}
                  strokeWidth={16}
                  strokeColor="#005f86"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 border-r-2 border-gray-400 p-2">
            <h1 className="font-MontBold mb-2 font-interSemiBold">
              Price Optimized Products
            </h1>
            <div className="flex">
              <p className="w-[50%] font-interRegular text-transparent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, quo!
              </p>
              <div className="w-[50%] flex justify-center items-center">
                <Progress
                  type="circle"
                  percent={75}
                  size={80}
                  strokeWidth={16}
                  strokeColor="#005f86"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 p-2">
            <h1 className="font-MontBold mb-2 font-interSemiBold">
              Products. at Optim Lim
            </h1>
            <div className="flex">
              <p className="w-[50%] font-interRegular text-transparent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, quo!
              </p>
              <div className="w-[50%] flex justify-center items-center">
                <Progress
                  type="circle"
                  percent={75}
                  size={80}
                  strokeWidth={16}
                  strokeColor="#005f86"
                />
              </div>
            </div>
          </div>
        </NSCard>
  )
}

export default PercentageGraphSection;
