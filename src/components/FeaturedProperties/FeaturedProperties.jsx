import React from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import FeaturedPropertySection from "./FeaturedPropertySection";
import Title from "../title/Title";

function FeaturedProperties() {
  return (
    <div class="w-full mx-auto pb-10 px-5 bg-gray-300">
      <Title title={"Featured Properties"} />
      <FeaturedPropertySection city={"Zirakpur"}>
        <FeaturedPropertyCard
          description={
            "Developed by Harmony Colonizers Pvt Ltd, Imperial Apartments in Zirakpur are known for their high quality and affordability."
          }
          title={"Harmony Imperial Apartments: Luxury Lifestyle"}
          imgUrl={
            "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
          }
        />
        <FeaturedPropertyCard
          description={
            "Developed by Harmony Colonizers Pvt Ltd, Imperial Apartments in Zirakpur are known for their high quality and affordability."
          }
          title={"Harmony Imperial Apartments: Luxury Lifestyle"}
          imgUrl={
            "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
          }
        />
        <FeaturedPropertyCard
          description={
            "Developed by Harmony Colonizers Pvt Ltd, Imperial Apartments in Zirakpur are known for their high quality and affordability."
          }
          title={"Harmony Imperial Apartments: Luxury Lifestyle"}
          imgUrl={
            "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
          }
        />
      </FeaturedPropertySection>
    </div>
  );
}

export default FeaturedProperties;
