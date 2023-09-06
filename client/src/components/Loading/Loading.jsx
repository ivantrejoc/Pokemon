import React from "react";
import pikachu from "../../assets/pikachu-running.gif";
import Background from "../../assets/background2.jpg";

const Loading = () => {
  return (
    <div class="flex flex-col justify-center items-center bg-center bg-scroll absolute top-0 bottom-0 left-0 right-0 w-screen md:h-screen bg-no-repeat"
    style={{ backgroundImage: `url(${Background})` }}>
      <div class="block space-y-4 md:flex md:space-y-0 md:space-x-4 md:mt-48 md:mb-auto flex-col justify-center items-center w-full max-w-md h-3/4 ">
    <h1 class="text-4xl font-lato font-bold tracking-tight text-blue-800 dark:text-white">Loading...</h1>
    <img class="p-8 rounded-t-lg w-3/4 h-3/4 mb-2" src={pikachu} alt="pikachu"/>
  </div>

    </div>
  
  )
};

export default Loading;
