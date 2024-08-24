import React, { useEffect } from "react";
import PropertyCarousel from "../components/carousel/property/PropertyCarousel";
import { GrLocation } from "react-icons/gr";
import { TbToolsKitchen3 } from "react-icons/tb";
import { LiaBedSolid } from "react-icons/lia";
import { MdBedroomBaby } from "react-icons/md";
import { useParams } from "react-router-dom";

function ShowProperty() {
  const name = useParams();
  useEffect(() => {
    console.log(name.id);
  }, []);

  return (
    <div className="property-container w-full bg-black flex flex-col items-center justify-center">
      <div className="max-w-[1000px] bg-gray-950 rounded-xl px-6">
        <div className="w-full py-4">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Property Details
          </h1>
        </div>
        <div className="w-full rounded-xl overflow-hidden">
          <PropertyCarousel />
        </div>
        <div className="w-full py-4">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Property Title
          </h1>
          <h2 className="text-white -mt-2 gap-2 font-bold text-lg flex flex-row items-center">
            <GrLocation />
            <span>2464 Royal Ln. Mesa, New Jersey</span>
          </h2>
          <div className="bhk-container flex flex-row gap-2 py-4 justify-start">
            <div className="text-white px-2 py-1 bg-slate-800 rounded-full gap-2 text-sm flex flex-row items-center">
              <LiaBedSolid />
              <span>3 Beds</span>
            </div>
            <div className="text-white px-2 py-1 bg-slate-800 rounded-full gap-2 text-sm flex flex-row items-center">
              <MdBedroomBaby />
              <span>1 Hall</span>
            </div>
            <div className="text-white px-2 py-1 bg-slate-800 rounded-full gap-2 text-sm flex flex-row items-center">
              <TbToolsKitchen3 />
              <span>2 Kitchens</span>
            </div>
          </div>
        </div>
        <div className="w-full py-4">
          <h1 className="mb-4 text-xl lg:text-2xl tracking-tight font-bold text-gray-900 dark:text-white">
            Property Description
          </h1>
          <p className="text-white font-light ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            doloremque, odit nemo necessitatibus velit laudantium, illo in rerum
            quam ad nisi officiis rem perspiciatis minima ex fugit. Blanditiis
            tenetur alias recusandae mollitia laborum fugiat explicabo repellat
            quis laboriosam, expedita et quos exercitationem repudiandae
            accusantium accusamus saepe non consectetur itaque obcaecati
            corrupti. Alias adipisci culpa iste delectus iusto nulla maxime
            sequi soluta ratione. Error provident eligendi quaerat cum
            laboriosam modi quae quidem cumque maxime, facilis atque alias
            expedita vero voluptatum qui doloremque? Praesentium soluta eaque
            aliquam ullam perspiciatis dignissimos inventore tempora in, sunt,
            commodi vel aperiam quia nemo, non earum reiciendis?
          </p>
        </div>
        <div className="w-full py-4">
          <h1 className="mb-4 text-xl lg:text-2xl tracking-tight font-bold text-gray-900 dark:text-white">
            Lifestyle Features
          </h1>
          <p className="text-white font-light ">
            <ul className="list-disc pl-4">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                neque? Voluptas eaque culpa, laudantium sequi dicta cum suscipit
                tempore quasi?
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                neque? Voluptas eaque culpa, laudantium sequi dicta cum suscipit
                tempore quasi?
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                neque? Voluptas eaque culpa, laudantium sequi dicta cum suscipit
                tempore quasi?
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                neque? Voluptas eaque culpa, laudantium sequi dicta cum suscipit
                tempore quasi?
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowProperty;
