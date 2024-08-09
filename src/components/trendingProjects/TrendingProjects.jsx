import React from "react";
import Title from "../title/Title";
import TrendingProjectsCarousel from "./TrendingProjectsCarousel";

function TrendingProjects() {
  return (
    <div className="flex w-full flex-col ">
      <Title title={"TrendingProjects"} />
      <TrendingProjectsCarousel />
    </div>
  );
}

export default TrendingProjects;
