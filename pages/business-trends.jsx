import React from "react";
import NSCard from "../components/common/NSCard";
import NSLayout from "../components/common/NSLayout";

const BusinessTrends = () => {
  return (
    <NSLayout>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-[1.1rem] my-3">
            Search page ranking as on Dec 25, 2022
          </h1>
          <h6 className="text-blue-800">Refresh request</h6>
        </div>

        <NSCard style={{ padding: "15px" }}>
          <h1 className="text-gray-700 text-[1.2rem]">News</h1>

          {[0, 1, 2, 3, 4, 5].map((news, index) => (
            <div
              className="w-[100%] px-6 my-6 flex justify-between"
              key={index}
            >
              <div className="w-[85%]">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-600"></div>
                  <span className="ml-2">CBS News</span>
                </div>
                <h1 className="text-blue-800 font-semibold text-xl my-2 cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero quibusdam assumenda earum commodi unde quaerat vitae
                  sed ullam ipsa doloremque?
                </h1>
                <h3 className="text-gray-600 text-base font-normal my-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis, sequi ut! Enim eius quia, nulla quas commodi corporis
                  exercitationem dignissimos quod, aspernatur quis excepturi
                  doloremque!
                </h3>
                <h3 className="text-gray-600 text-base font-normal my-2">
                  2 days ago
                </h3>
              </div>
              <div className="w-[13%] h-[150px] min-h-[13%] max-h-[13%] bg-gray-100 rounded-md overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://media.istockphoto.com/id/1346129955/photo/making-her-laughing-daily.jpg?b=1&s=170667a&w=0&k=20&c=Dr98kKUgmz6uvdLBJnwXCGhPaJWSXqIp-TFuASpOUIs=" alt='news-image' style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
            </div>
          ))}
        </NSCard>
      </div>
    </NSLayout>
  );
};

export default BusinessTrends;
