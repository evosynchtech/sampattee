import React, { useEffect } from "react";
import PropertyCarousel from "../components/carousel/property/PropertyCarousel";

function ShowProperty({ data, place }) {
  return (
    <div className="property-container w-full bg-black flex flex-col items-center justify-center">
      <div className="max-w-[1000px] bg-gray-950 rounded-xl px-6">
        <div className="w-full py-4">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
            Property Details
          </h1>
        </div>
        <div className="w-full rounded-xl overflow-hidden">
          <PropertyCarousel Imgs={data.Imgs} place={place} />
        </div>
        <div className="w-full py-4">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-bold text-white">
            {data.title}
          </h1>
        </div>
        <div className="w-full py-4">
          {data.sections.map((section) => (
            <>
              {section.heading && (
                <h1 className="mb-4 text-xl lg:text-2xl tracking-tight font-bold text-white">
                  {section.heading}
                </h1>
              )}
              {section.type == "paras" ? (
                <>
                  {section.para.map((para) => (
                    <p className="text-white font-light mb-4">{para}</p>
                  ))}
                </>
              ) : section.type == "dict" ? (
                <>
                  {Object.keys(section.values).map((value) => (
                    <div className="flex flex-row">
                      <p className="text-white capitalize font-light mb-4">
                        {value.split("_").join(" ")}
                      </p>
                      <span className="text-white mx-2">:</span>
                      <p className="text-white font-light mb-4">
                        {section.values[value]}
                      </p>
                    </div>
                  ))}
                </>
              ) : section.type == "list" ? (
                <>
                  {section.items.map((value) => (
                    <div className="flex flex-col">
                      <li className="text-white font-light mb-4">{value}</li>
                    </div>
                  ))}
                </>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowProperty;
