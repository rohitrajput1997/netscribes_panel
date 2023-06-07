import { Spin } from "antd";
import React from "react";

function NSLoaderWithMsg({ style, withMessage, loaderSize = "large" }) {
  return (
    <>
      <div className="text-center" style={style}>
        <Spin size={loaderSize} style={{ color: "var(--secondary)" }} />
        {withMessage && (
          <p className="font-interMedium mt-2">Please wait fetching data!</p>
        )}
      </div>
    </>
  );
}

export default NSLoaderWithMsg;
