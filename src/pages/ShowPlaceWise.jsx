import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/buttons/Button";
import data from "../data/Data";
import placeWise from "../data/placeWise";

function ShowPlaceWise() {
  let [filteredData, setFilteredData] = useState([]);
  let [place, setPlace] = useState("");
  const param = useParams();
  let placeName = param.id;
  setPlace(placeName);
  useEffect(() => {
    setFilteredData(placeWise[placeName]);
  }, []);
  console.log(filteredData);
  placeName = placeName.split("_").join(" ");
  return (
    <div className="place-wise-property-container w-full bg-black flex flex-col items-center justify-center">
      <div className="max-w-[1000px] bg-gray-950 rounded-xl px-6">
        <div className="w-full my-4">
          <h1 className="mb-4 w-full capitalize text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {placeName}
          </h1>
        </div>
        {filteredData.length > 0 &&
          filteredData.map((data) => (
            <>
              <div className="w-full my-4 sm:my-8">
                <div class="p-4 bg-black rounded-xl border border-white">
                  <div class="h-full flex sm:flex-row flex-col sm:items-start items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                      src={`/assets/${placeName}/.jpg`}
                    />
                    <div class="flex flex-col gap-2 sm:pl-8">
                      <h2 class="title-font font-medium text-lg text-white">
                        {data.title}
                      </h2>
                      <p class="mb-4 text-slate-500 truncate-ellipsis">
                        {data.description}
                      </p>
                      <div class="inline-flex">
                        <Button width={30} title={"Read More"} marginX={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default ShowPlaceWise;