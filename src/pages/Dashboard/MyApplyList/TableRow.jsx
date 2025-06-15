import React, { useState } from "react";
import { Link } from "react-router";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { confirmationAlert, successAlert } from "../../sharedComponents/Toasts";
import useAuth from "../../../hooks/useAuth";
import AuthInput from "../../sharedComponents/AuthInput";
import { RxCross2 } from "react-icons/rx";

function TableRow({
  registration,
  index,
  removeRegistration,
  updateRegistration,
}) {
  const { user } = useAuth();
  const {
    _id,
    title,
    location,
    firstName,
    lastName,
    startDate,
    marathonId,
    contactNumber,
  } = registration;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleDeleteRegistration = (id) => {
    confirmationAlert().then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/registrations/${_id}`)
          .then((response) => {
            if (response.data.deletedCount) {
              removeRegistration(id);
              successAlert("Deleted!", "Your registration has been deleted");
              axios.patch(
                `http://localhost:3000/update-registration-count?decForThisMarathon=${marathonId}`
              );
            }
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  const handleUpdateRegistration = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const contactNumber = form.contactNumber.value;
    const updatedInfo = {
      firstName,
      lastName,
      contactNumber,
      registrationId: id,
    };

    confirmationAlert(
      "Do you want to update your registration information?",
      "Yes, Update it"
    ).then((res) => {
      if (res.isConfirmed) {
        axios
          .put(`http://localhost:3000/update-registration`, updatedInfo)
          .then((response) => {
            if (response?.data?.matchedCount) {
              updateRegistration(id, updatedInfo);
              successAlert("Updated!", "Your registration has been updated");
              setIsOpenModal(false);
            }
            console.log(response);
          });
      }
    });

    console.log(updatedInfo, id);
  };
  return (
    <>
      {/* modal start */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60">
          <div className="relative w-full max-w-xl mx-4 md:mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-h-[90vh] overflow-y-auto">
            {/* Cross Button */}
            <button
              onClick={() => setIsOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-500 transition"
            >
              <RxCross2 size={22} />
            </button>

            {/* Header */}
            <header className="py-10 text-center">
              <h1 className="text-3xl md:text-4xl font-bold">
                Update Your{" "}
                <span className="text-orange-500">Registered Marathon</span>
              </h1>
            </header>

            {/* Form */}
            <form
              onSubmit={(e) => handleUpdateRegistration(e, _id)}
              className="space-y-4 md:space-y-6"
            >
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <AuthInput
                  inputType="text"
                  inputName="firstName"
                  inputExample="abdur..."
                  dValue={firstName}
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <AuthInput
                  inputType="text"
                  inputName="lastName"
                  inputExample="rohim..."
                  dValue={lastName}
                />
              </div>

              {/* Contact */}
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contact Number
                </label>
                <AuthInput
                  inputType="text"
                  inputName="contactNumber"
                  inputExample="01867xxxx..."
                  dValue={contactNumber}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5 dark:p-3 dark:bg-gray-700 focus:outline-0 dark:border-none dark:text-white"
                  value={user?.email}
                  required
                  readOnly
                />
              </div>

              {/* Marathon Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Marathon Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5 dark:p-3 dark:bg-gray-700 focus:outline-0 dark:text-white dark:border-none"
                  value={title}
                  required
                  readOnly
                />
              </div>

              {/* Start Date */}
              <div>
                <label
                  htmlFor="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Marathon Start Date
                </label>
                <input
                  type="text"
                  name="startDate"
                  id="startDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5 dark:p-3 dark:bg-gray-700 focus:outline-0 dark:border-none dark:text-white"
                  value={startDate}
                  required
                  readOnly
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800  cursor-pointer"
              >
                Update Here
              </button>
            </form>
          </div>
        </div>
      )}
      {/* modal end */}
      <tr className="text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">{index + 1}</td>
        <td className="py-6 px-8">{title}</td>
        <td className="py-6 px-2">{startDate}</td>
        <td className="py-6 px-8">{location}</td>
        <td className="py-6 px-2">{firstName}</td>
        <td className="py-6 px-2">{lastName}</td>

        <td className="py-6 px-4 flex gap-x-2 justify-center">
          <button
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            <Link className="font-medium text-teal-600 dark:text-teal-500 hover:underline">
              <FaRegEdit size={24} />
            </Link>
          </button>
          <button onClick={() => handleDeleteRegistration(_id)}>
            <Link className="font-medium text-orange-500 dark:text-rose-600 hover:underline">
              <MdDeleteOutline size={24} />
            </Link>
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableRow;
