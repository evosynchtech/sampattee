import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroCarousel from "../components/carousel/HeroCarousel";
import ChooseProperty from "../components/chooseProperty/ChooseProperty";
import ChooseBudget from "../components/chooseBudget/ChooseBudget";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties";
import TrendingProjects from "../components/trendingProjects/TrendingProjectsCarousel";

function Home() {
  return (
    <>
      <HeroCarousel />
      <ChooseProperty />
      <ChooseBudget />
      <FeaturedProperties />
      <TrendingProjects />
    </>
  );
}

export default Home;
