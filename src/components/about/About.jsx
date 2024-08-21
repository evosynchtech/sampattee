import React from "react";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section class="bg-black">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Us
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            SAMPATTEE (सम्पति) catering to the Tricity Real Estate! We are a
            team of experienced and dedicated real estate professionals who are
            committed to helping you buy, sell, or rent properties in Tricity
          </p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <AboutCard
            category={"Article"}
            days={"15 days ago"}
            title={"Lorem ipsum dolor sit amet consectetur, adipisicing elit"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus dolorum veniam itaque molestiae inventore, quisquam aperiam ea repudiandae, repellendus quas, necessitatibus blanditiis aliquid."
            }
          />
          <AboutCard
            category={"Article"}
            days={"15 days ago"}
            title={"Lorem ipsum dolor sit amet consectetur, adipisicing elit"}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus dolorum veniam itaque molestiae inventore, quisquam aperiam ea repudiandae, repellendus quas, necessitatibus blanditiis aliquid."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default About;
