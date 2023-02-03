import React from "react";
import SuggestedBrandUpdatesTile from "./SuggestedBrandUpdatesTile";

function HomeBrandUpdates({ homeDetails }) {
  const { suggested_brands } = homeDetails;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 auto-cols-fr">
      {Object.keys(suggested_brands || {})?.map((item, index) => (
        <div key={index}>
          <SuggestedBrandUpdatesTile
            title={suggested_brands?.[item]?.[0]?.Brand}
            salesCount={suggested_brands?.[item]?.[0]?.[item]}
            subtitle={item}
          />
        </div>
      ))}
    </div>
  );
}

export default HomeBrandUpdates;
