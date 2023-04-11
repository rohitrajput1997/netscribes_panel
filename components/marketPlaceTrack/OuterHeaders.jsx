const OuterHeaders = ({ tableData, header_keys, tileHeaders }) => {
  return (
    <>
      <div>
        <h1 className="text-orange-500 text-start flex items-center w-full text-[.8rem] font-interMedium mt-[2.1rem]">
          {tileHeaders?.one?.headerOne}
        </h1>
        {tableData?.[0]?.map((_, index) => (
          <div
            className="flex justify-between mb-1 font-interRegular mt-[10px]"
            key={index}
          >
            <h1 className="text-start w-full">
              {_?.[header_keys[0] || ""].replaceAll("_", " ")}
            </h1>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-orange-500 text-start flex items-center w-full text-[.8rem] font-interMedium mt-[.5rem]">
          {tileHeaders?.two?.headerOne}
        </h1>
        {tableData?.[1]?.map((_, index) => (
          <div
            className="flex justify-between mb-1 font-interRegular mt-[10px]"
            key={index}
          >
            <h1 className="text-start w-full">
              {_?.[header_keys[0] || ""].replaceAll("_", " ")}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default OuterHeaders;
