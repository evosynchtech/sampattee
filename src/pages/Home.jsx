import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroCarousel from "../components/carousel/HeroCarousel";
import ChooseProperty from "../components/chooseProperty/ChooseProperty";
import ChooseBudget from "../components/chooseBudget/ChooseBudget";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties";
import TrendingProjects from "../components/trendingProjects/TrendingProjects";
import About from "../components/about/About";

function Home() {
  return (
    <>
      <HeroCarousel />
      <About />
      <FeaturedProperties />
      <TrendingProjects />
    </>
  );
}

export default Home;
