import React from "react";

function FeaturedPropertySection({ children, city}) {
  return (
    <>
      {/* <div class="text-xl mt-5 mb-2 font-bold text-[#ff5a5f]">{city}</div> */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mx-10">
        {children}
      </div>
    </>
  );
}

export default FeaturedPropertySection;
