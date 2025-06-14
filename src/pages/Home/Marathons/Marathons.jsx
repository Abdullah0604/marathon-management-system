import React from "react";
import MarathonCard from "../../sharedComponents/MarathonCard";
import { use } from "react";

function Marathons({ marathonPromise }) {
  const marathonsData = use(marathonPromise);

  console.log(marathonsData);
  return (
    <div className="my-24">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
          Upcoming Marathons & Programs
        </h1>
        <p className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded"></p>
        <p className="max-w-[800px] mx-auto text-sm lg:text-lg font-extralight text-gray-600 dark:text-gray-400 mt-5">
          Discover marathons with ongoing registration. Explore key details like
          dates, locations, and distances to gear up for your next big run.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 my-16 gap-x-20 gap-y-10 ">
        {marathonsData.map((marathon) => (
          <MarathonCard key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
}

export default Marathons;
