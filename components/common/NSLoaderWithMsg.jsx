import { Spin } from "antd";
import React from "react";

function NSLoaderWithMsg({ style, withMessage }) {
  return (
    <>
      <div className="text-center" style={style}>
        <Spin size="large" />
        {withMessage && (
          <p className="font-MontMedium mt-2">Please wait fetching data!</p>
        )}
      </div>
    </>
  );
}

export default NSLoaderWithMsg;
