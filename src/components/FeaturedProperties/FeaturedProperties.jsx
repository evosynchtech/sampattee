import React from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import FeaturedPropertySection from "./FeaturedPropertySection";
import Title from "../title/Title";
import placeWise from "../../data/placeWise";

function FeaturedProperties() {
  return (
    <div class="w-full -mt-1 mx-auto py-10 px-5 bg-black">
      <Title title={"Featured Properties"} />
      <FeaturedPropertySection>
        {Object.keys(placeWise).map(
          (propertiesArray) =>
            placeWise[propertiesArray].length > 0 &&
            placeWise[propertiesArray].map(
              (properties, indx) =>
                indx < 3 && (
                  <>
                    {/* <h1 className="text-white bg-red-950">{indx}</h1> */}
                    <FeaturedPropertyCard
                      description={properties.description}
                      title={properties.title}
                      imgUrl={`assets/places/${properties.imgUrl}`}
                    />
                  </>
                )
            )
        )}
      </FeaturedPropertySection>
    </div>
  );
}

export default FeaturedProperties;
