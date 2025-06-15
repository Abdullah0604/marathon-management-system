import React from "react";
import MarathonTableRow from "./MarathonTableRow";
import { useState } from "react";
import NoData from "../../sharedComponents/NoData";

function MyMarathonList({ myMarathons }) {
  console.log(myMarathons);
  const [myAllMarathons, setMyAllMarathons] = useState(myMarathons);

  const removeMarathon = (id) => {
    const remainingMarathons = myAllMarathons.filter(
      (registration) => registration._id !== id
    );
    setMyAllMarathons(remainingMarathons);
    // console.log(id);
  };

  const updateMarathon = (id, updatedInfo) => {
    const updatedMarathons = myAllMarathons.map((marathon) => {
      if (marathon._id === id) {
        return {
          ...marathon,
          ...updatedInfo,
        };
      }
      return marathon;
    });

    setMyAllMarathons(updatedMarathons);
  };
  console.log(myMarathons);
  if (!myMarathons.length) {
    return (
      <NoData
        title="No Registrations Yet"
        description="You haven’t registered for any marathons yet. Once you do, your registration details will appear here. Stay motivated and keep running!"
      />
    );
  }
  return (
    <div className="max-w-[1100px]  relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <table className=" w-full text-sm text-left  text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              #
            </th>
            <th scope="col" className="px-6 py-3 text-left ">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left">
              Registration Start
            </th>
            <th scope="col" className="px-6 py-3 text-left">
              Registration End
            </th>
            <th scope="col" className="px-6 py-3 text-left">
              Marathon Start
            </th>
            <th scope="col" className="px-6 py-3 text-left">
              Location
            </th>

            <th scope="col" className="px-6 py-3 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {myAllMarathons.map((marathon, i) => (
            <MarathonTableRow
              key={marathon._id}
              marathon={marathon}
              removeMarathon={removeMarathon}
              updateMarathon={updateMarathon}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyMarathonList;
