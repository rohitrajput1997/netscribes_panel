import React from "react";
import SuggestedBrandUpdatesTile from "./SuggestedBrandUpdatesTile";

function HomeBrandUpdates() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 auto-cols-fr">
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
