import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
import MarathonCard from "../sharedComponents/MarathonCard";
import Loading from "../../components/Loader/Loading";
// import { MarathonSelectInput } from "../Dashboard/AddMarathon/Inputs";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

function Marathons() {
  // const marathons = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [marathons, setMarathons] = useState([]);

  const [sortedMarathons, setSortedMarathonns] = useState([]);
  const [sortedValue, setSortedValue] = useState("");

  const handleSorting = (e) => {
    const value = e.target.value;
    // console.log(value);
    setSortedValue(value);
    axios
      .get(
        `https://runnexus-server.vercel.app/sorted-marathons?sortValue=${value}`
      )
      .then((res) => {
        setSortedMarathonns(res.data);
      })
      .catch((error) => {
        // console.log(error);
        Swal.fire({
          title: "oops!",
          text: error.message,
          icon: "error",
        });
      });
  };

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/all-marathons?email=${user && user.email}`)
      .then((response) => {
        // console.log(response.data);
        setLoading(false);
        setMarathons(response.data);
      })
      .catch((err) => {
        // console.log(err);
        Swal.fire({
          title: "oops!",
          text: err.message,
          icon: "error",
        });
        setLoading(false);
      });
  }, [user, axiosSecure]);

  if (loading) {
    return <Loading />;
  }

  // if (!marathons) return <Loading />;
  // console.log(marathons);

  return (
    <div className="my-24">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
          Explore All Marathon Events
        </h1>
        <p className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded"></p>
        <p className="max-w-[800px] mx-auto text-sm lg:text-lg font-extralight text-gray-600 dark:text-gray-400 mt-5">
          Discover exciting marathon events happening across the country. From
          city runs to nature trails, find the perfect race to challenge
          yourself and stay fit. Register early to secure your spot!
        </p>
      </div>
      <div>
        <fieldset className="fieldset max-w-[220px] flex  bg-base-200 border-base-300 rounded-box w-full border p-4">
          <label className="label capitalize text-gray-800 dark:text-gray-400 text-base font-medium">
            sort by
          </label>
          <select
            name="sort"
            onChange={handleSorting}
            value={sortedValue}
            className="select py-1  w-full "
            required
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </fieldset>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 my-16 gap-x-20 gap-y-10 ">
        {sortedMarathons.length
          ? sortedMarathons.map((marathon) => (
              <MarathonCard key={marathon._id} marathon={marathon} />
            ))
          : marathons.length &&
            marathons.map((marathon) => (
              <MarathonCard key={marathon._id} marathon={marathon} />
            ))}
      </div>
    </div>
  );
}

export default Marathons;
