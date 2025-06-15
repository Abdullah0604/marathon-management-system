import React from "react";
import { use } from "react";
import { useState } from "react";
import TableRow from "./TableRow";
import NoData from "../../sharedComponents/NoData";

function MyApplyList({ registrationPromise }) {
  const registrationList = use(registrationPromise);
  const [allRegistrations, setAllRegistrations] = useState(registrationList);

  const removeRegistration = (id) => {
    const remainingRegistrations = allRegistrations.filter(
      (registration) => registration._id !== id
    );
    setAllRegistrations(remainingRegistrations);
    // console.log(id);
  };

  const updateRegistration = (id, updatedInfo) => {
    const updatedRegistrations = allRegistrations.map((registration) => {
      if (registration._id === id) {
        return {
          ...registration,
          firstName: updatedInfo?.firstName,
          lastName: updatedInfo?.lastName,
          contactNumber: updatedInfo?.contactNumber,
        };
      }
      return registration;
    });

    setAllRegistrations(updatedRegistrations);
  };
  console.log(allRegistrations);
  if (!allRegistrations.length) {
    return (
      <NoData
        title="No Registrations Yet"
        description="You haven’t registered for any marathons yet. Once you do, your registration details will appear here. Stay motivated and keep running!"
      />
    );
  }
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
              updateRegistration={updateRegistration}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyApplyList;
