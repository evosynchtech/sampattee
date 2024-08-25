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
        {Object.values(placeWise).map(
          (place) =>
            place.length > 1 && (
              <FeaturedPropertyCard
                description={place[1].description}
                title={place[0].title}
                imgUrl={`assets/places/${place[0].imgUrl}`}
              />
            )
        )}
      </FeaturedPropertySection>
    </div>
  );
}

export default FeaturedProperties;
