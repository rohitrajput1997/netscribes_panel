import React from "react";

function NSGlobalSpinner({ isVisible }) {
  return (
    <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.3)] w-[100vw] h-[100vh] z-[10000]">
      <div className="h-[100vh] w-[100vh] flex justify-center items-center mx-auto my-auto">
        {isVisible && <span class="spinner spinner-large"></span>}
      </div>
    </div>
  );
}

export default NSGlobalSpinner;
