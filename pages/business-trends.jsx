import Image from "next/image";
import React from "react";
import NSCard from "../components/common/NSCard";
import NSLayout from "../components/common/NSLayout";
import BusinessTrendsJson from "../components/json/BusinessTrends.json";

const BusinessTrends = () => {
  return (
    <NSLayout>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-[1.1rem] my-3 font-interMedium">
            Search page ranking as on Dec 25, 2022
          </h1>
          <h6 className="text-blue-800 flex items-center font-interMedium">
            Refresh request{" "}
            <span className="ml-2">
              <Image
                src="./assets/refresh.svg"
                alt="refresh"
                width={15}
                height={15}
              />
            </span>
          </h6>
        </div>

        <NSCard style={{ padding: "15px" }}>
          <h1 className="text-gray-700 text-[1.2rem] font-interSemiBold">
            News
          </h1>

          {BusinessTrendsJson.map((news, index) => (
            <div
              className="w-[100%] px-6 my-6 flex justify-between"
              key={index}
            >
              <div className="w-[100%] border-b-2">
                {/* <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-600"></div>
                  <span className="ml-2 font-interMedium">CBS News</span>
                </div> */}
                <h1 className="text-blue-600 font-interMedium text-xl my-2 cursor-pointer">
                  {news.title}
                </h1>
                <div className="flex items-center">
                  <h5 className="text-base text-gray-500 pr-2 font-interMedium">
                    {news.subTitle}
                  </h5>
                </div>
                <h3 className="text-gray-900 text-[.9rem] font-interRegular my-2">
                  {news.content}
                </h3>
                <div className="flex items-center mt-3 mb-4">
                  <Image
                    src="/assets/facebook.svg"
                    width={25}
                    height={25}
                    alt="facebook"
                    className="mr-2"
                    />
                  <Image
                    src="/assets/twitter.png"
                    width={22}
                    height={22}
                    alt="twitter"
                    className="mr-2"
                  />
                  <h5 className="text-sm text-gray-400 font-interRegular ml-6">Flag as irrelevant</h5>
                </div>
                {/* <h3 className="text-gray-600 text-base font-interRegular my-2 text-[12px]">
                  2 days ago
                </h3> */}
              </div>
              {/* <div className="w-[13%] h-[150px] min-h-[13%] max-h-[13%] bg-gray-100 rounded-md overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1346129955/photo/making-her-laughing-daily.jpg?b=1&s=170667a&w=0&k=20&c=Dr98kKUgmz6uvdLBJnwXCGhPaJWSXqIp-TFuASpOUIs="
                  alt="news-image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div> */}
            </div>
          ))}
        </NSCard>
      </div>
    </NSLayout>
  );
};

export default BusinessTrends;
