import React from "react";
import { use } from "react";
import { useState } from "react";
import TableRow from "./TableRow";
import NoData from "../../sharedComponents/NoData";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

function MyApplyList({ registrationPromise }) {
  const { user } = useAuth();
  const registrationList = use(registrationPromise);
  const [allRegistrations, setAllRegistrations] = useState(registrationList);

  const [searchRegistraions, setSearchRegistrations] =
    useState(registrationList);

  const removeRegistration = (id) => {
    const remainingRegistrations = allRegistrations.filter(
      (registration) => registration._id !== id
    );
    const remainingRegistrationsInSearch = searchRegistraions.filter(
      (registration) => registration._id !== id
    );
    setAllRegistrations(remainingRegistrations);
    setSearchRegistrations(remainingRegistrationsInSearch);
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
    const updatedRegistrationsInSearch = searchRegistraions.map(
      (registration) => {
        if (registration._id === id) {
          return {
            ...registration,
            firstName: updatedInfo?.firstName,
            lastName: updatedInfo?.lastName,
            contactNumber: updatedInfo?.contactNumber,
          };
        }
        return registration;
      }
    );

    setAllRegistrations(updatedRegistrations);
    setSearchRegistrations(updatedRegistrationsInSearch);
  };

  const handleSearchValue = (e) => {
    e.preventDefault();
    const title = e.target.search.value;
    console.log(title);

    axios
      .get(
        `http://localhost:3000/search-registrations?title=${title}&email=${
          user && user.email
        }`
      )
      .then((response) => {
        console.log(response);
        if (!response.data.length) {
          setSearchRegistrations("not match");
        } else {
          setSearchRegistrations(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(allRegistrations);

  if (searchRegistraions === "not match") {
    return (
      <NoData
        title="No Matches Found"
        description="We couldn’t find any registrations matching your search. Try adjusting your keywords or check your spelling and try again."
        button={
          <button
            className="px-6 py-2 mt-5 text-slate-100 cursor-pointer bg-orange-500 rounded-full"
            onClick={() => {
              setSearchRegistrations(registrationList);
            }}
          >
            Explore All Registrations
          </button>
        }
      />
    );
  }
  if (!allRegistrations.length) {
    return (
      <NoData
        title="No Registrations Yet"
        description="You haven’t registered for any marathons yet. Once you do, your registration details will appear here. Stay motivated and keep running!"
      />
    );
  }
  return (
    <div className="max-w-[1100px]  relative overflow-x-auto shadow-md sm:rounded-lg my-16 ">
      <form
        onSubmit={handleSearchValue}
        className="my-7 px-2 md:px-4 flex items-center"
      >
        <input
          name="search"
          type="text"
          placeholder="search by marathon title...."
          className="input max-w-[300px] md:max-w-[400px] rounded-xl"
        />
        <button
          type="submit"
          className="bg-orange-500  px-4 py-2.5 text-white rounded-lg cursor-pointer "
        >
          <FaSearch size={20} />
        </button>
      </form>

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
          {searchRegistraions.length
            ? searchRegistraions.map((registration, i) => (
                <TableRow
                  key={registration._id}
                  registration={registration}
                  removeRegistration={removeRegistration}
                  updateRegistration={updateRegistration}
                  index={i}
                />
              ))
            : allRegistrations.map((registration, i) => (
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
