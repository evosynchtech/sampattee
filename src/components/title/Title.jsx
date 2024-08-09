import React from "react";

function Title({title}) {
  return (
    <div class="choose-your-property">
      <div class="choose-your-property-title before:left-[250px] after:right-[250px] relative w-full px-10 py-10 flex justify-center items-center before:content-[''] before:absolute before:top-1/2 before:w-[200px] before:h-[2px] before:bg-black after:content-[''] after:absolute after:top-1/2 after:w-[200px] after:h-[2px] after:bg-black">
        <h1 className="font-bold text-4xl">{title}</h1>
      </div>
    </div>
  );
}

export default Title;
