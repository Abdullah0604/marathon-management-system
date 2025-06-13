import React from "react";
import MarathonCard from "../../sharedComponents/MarathonCard";

const marathonsData = [
  {
    title: "Dhaka City Half Marathon",
    registrationStart: "2025-07-01",
    registrationEnd: "2025-07-10",
    marathonDate: "2025-07-12",
    location: "Dhaka, Bangladesh",
    distance: "21.1 KM",
    description:
      "Experience the vibrant streets of Dhaka with thousands of passionate runners.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    createdAt: "2025-06-13T00:00:00Z",
    totalRegistrationCount: 0,
  },
  {
    title: "Chattogram Urban Run",
    registrationStart: "2025-07-15",
    registrationEnd: "2025-08-01",
    marathonDate: "2025-08-10",
    location: "Chattogram, Bangladesh",
    distance: "10 KM",
    description:
      "Join the coastal city’s exciting urban marathon featuring a scenic route and great energy.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    createdAt: "2025-06-13T00:00:00Z",
    totalRegistrationCount: 0,
  },
  {
    title: "Rajshahi River Marathon",
    registrationStart: "2025-08-10",
    registrationEnd: "2025-08-25",
    marathonDate: "2025-09-05",
    location: "Rajshahi, Bangladesh",
    distance: "42.2 KM",
    description:
      "Run along the beautiful Padma River and enjoy Rajshahi’s natural charm in this full marathon.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc29b",
    createdAt: "2025-06-13T00:00:00Z",
    totalRegistrationCount: 0,
  },
  {
    title: "Sylhet Trail Run",
    registrationStart: "2025-09-20",
    registrationEnd: "2025-10-05",
    marathonDate: "2025-10-15",
    location: "Sylhet, Bangladesh",
    distance: "15 KM",
    description:
      "Breathe the fresh air of Sylhet's green hills and enjoy a unique trail running experience.",
    image: "https://images.unsplash.com/photo-1570641431989-8b3c981d9014",
    createdAt: "2025-06-13T00:00:00Z",
    totalRegistrationCount: 0,
  },
  {
    title: "Cox's Bazar Beach Marathon",
    registrationStart: "2025-10-15",
    registrationEnd: "2025-10-30",
    marathonDate: "2025-11-08",
    location: "Cox's Bazar, Bangladesh",
    distance: "5 KM",
    description:
      "Run along the world’s longest natural sea beach in this thrilling short-distance marathon.",
    image: "https://images.unsplash.com/photo-1520975869018-2510d6a4d8da",
    createdAt: "2025-06-13T00:00:00Z",
    totalRegistrationCount: 0,
  },
  {
    title: "Barishal Run for Health",
    registrationStart: "2025-11-20",
    registrationEnd: "2025-12-10",
    marathonDate: "2025-12-20",
    location: "Barishal, Bangladesh",
    distance: "10 KM",
    description:
      "Promoting health and wellness, this marathon welcomes runners of all ages in Barishal.",
    image: "https://images.unsplash.com/photo-1526401485004-2fda9fbb8854",
    createdAt: "2025-06-13T00:00:00Z",
    totalRegistrationCount: 0,
  },
];

function Marathons() {
  const marathons = marathonsData;
  console.log(marathons);
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
        {marathons.map((marathon, i) => (
          <MarathonCard key={i} marathon={marathon} />
        ))}
      </div>
    </div>
  );
}

export default Marathons;
