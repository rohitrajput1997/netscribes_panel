import React from "react";

function NSGlobalSpinner({ isVisible }) {
  return (
    <div className="h-[100vh] w-[100vh]">
      {isVisible && (
        <div class="drawing" id="loading">
          <div class="loading-dot"></div>
        </div>
      )}
    </div>
  );
}

export default NSGlobalSpinner;
