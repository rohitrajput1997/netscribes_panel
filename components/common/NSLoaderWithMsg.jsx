import { Spin } from "antd";
import React from "react";

function NSLoaderWithMsg() {
  return (
    <>
      <div className="text-center">
        <Spin size="large" />
        <p className="font-MontMedium mt-2">Please wait fetching data!</p>
      </div>
    </>
  );
}

export default NSLoaderWithMsg;
