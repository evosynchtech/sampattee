import React from "react";
import Title from "../title/Title";
import ChoosePropertyCard from "./ChoosePropertyCard";

function ChooseProperty() {
  return (
    <div className="my-10 mx-1 w-full bg-gray-300">
      <Title title={"Choose your property"} />
      <div className="px-15 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-10">
          <ChoosePropertyCard
            ImgUrl={
              "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
            }
            title={"Property title"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat libero nemo architecto laudantium eaque ullam molestiae! Nobis accusantium repellat esse eveniet. Ea, facilis saepe quod recusandae veniam praesentium voluptatem!"
            }
          />
          <ChoosePropertyCard
            ImgUrl={
              "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
            }
            title={"Property title"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat libero nemo architecto laudantium eaque ullam molestiae! Nobis accusantium repellat esse eveniet. Ea, facilis saepe quod recusandae veniam praesentium voluptatem!"
            }
          />
          <ChoosePropertyCard
            ImgUrl={
              "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
            }
            title={"Property title"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat libero nemo architecto laudantium eaque ullam molestiae! Nobis accusantium repellat esse eveniet. Ea, facilis saepe quod recusandae veniam praesentium voluptatem!"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseProperty;
