import React from "react";
import { use } from "react";
import { useState } from "react";
import TableRow from "./TableRow";

function MyApplyList({ registrationPromise }) {
  const registrationList = use(registrationPromise);
  const [allRegistrations, setAllRegistrations] = useState(registrationList);

  const removeRegistration = (id) => {
    console.log(id);
  };
  console.log(allRegistrations);
  return (
    <div className="max-w-[1100px]  relative overflow-x-auto shadow-md sm:rounded-lg my-16">
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
              Start Date
            </th>
            <th scope="col" className="px-6 py-3 text-left">
              Location
            </th>
            <th scope="col" className="px-6 py-3 text-left">
              First Name
            </th>
            <th scope="col" className="px-6 py-3 text-left">
              Last Name
            </th>

            <th scope="col" className="px-6 py-3 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allRegistrations.map((registration, i) => (
            <TableRow
              key={registration._id}
              registration={registration}
              removeRegistration={removeRegistration}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyApplyList;
