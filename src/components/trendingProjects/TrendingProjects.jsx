import React from "react";
import Title from "../title/Title";
import TrendingProjectsCarousel from "./TrendingProjectsCarousel";

function TrendingProjects() {
  return (
    <div className="flex w-full flex-col bg-black ">
      <Title title={"Trending Projects"} />
      <TrendingProjectsCarousel />
    </div>
  );
}

export default TrendingProjects;
