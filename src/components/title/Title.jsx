import React from "react";

function Title({ title }) {
  return (
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
        {title}
      </h2>
      {/* <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis rem
            debitis atque veritatis delectus accusantium fugiat iure
          </p> */}
    </div>
  );
}

export default Title;
