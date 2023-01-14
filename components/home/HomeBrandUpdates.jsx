import React from "react";
import SuggestedBrandUpdatesTile from "./SuggestedBrandUpdatesTile";

function HomeBrandUpdates() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <SuggestedBrandUpdatesTile
        title="SAMSUNG"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur."
      />
      <SuggestedBrandUpdatesTile
        title="SAMSUNG"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur."
      />
      <SuggestedBrandUpdatesTile
        title="SAMSUNG"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur."
      />
      <SuggestedBrandUpdatesTile
        title="SAMSUNG"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur."
      />
    </div>
  );
}

export default HomeBrandUpdates;
