import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { confirmationAlert, successAlert } from "../../sharedComponents/Toasts";
// import useAuth from "../../../hooks/useAuth";
import { RxCross2 } from "react-icons/rx";
import { MarathonInput, MarathonSelectInput } from "../AddMarathon/Inputs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MarathonTableRow({ marathon, removeMarathon, updateMarathon, index }) {
  //   const { user } = useAuth();
  const {
    _id,
    title,
    description,
    distance,
    email,
    image,
    location,
    marathonDate,
    registrationStart,
    registrationEnd,
  } = marathon;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [regisStartDate, setRegisStartDate] = useState(
    new Date(registrationStart)
  );
  const [regisEndDate, setRegisEndDate] = useState(new Date(registrationEnd));
  const [marathonStartDate, setMarathonStartDate] = useState(
    new Date(marathonDate)
  );
  const formattedRegisStartDate = regisStartDate.toISOString().split("T")[0];
  const formattedRegisEndDate = regisEndDate.toISOString().split("T")[0];
  const formattedMarathonDate = marathonStartDate.toISOString().split("T")[0];

  const handleDeleteMarathon = (id) => {
    confirmationAlert().then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/marathons/${_id}`)
          .then((response) => {
            if (response.data.deletedCount) {
              removeMarathon(id);
              successAlert("Deleted!", "Your marathon has been deleted");
            }
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  const handleUpdateMarathon = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const updatedMarathon = {
      ...data,
      registrationStart: formattedRegisStartDate,
      registrationEnd: formattedRegisEndDate,
      marathonDate: formattedMarathonDate,
    };
    const trimmedMarathon = Object.fromEntries(
      Object.entries(updatedMarathon).map(([key, value]) => [
        key,
        typeof value === "string" ? value.trim() : value,
      ])
    );

    confirmationAlert(
      "Do you want to update your marathon information?",
      "Yes, Update it"
    ).then((res) => {
      if (res.isConfirmed) {
        axios
          .put(`http://localhost:3000/update-marathon/${_id}`, trimmedMarathon)
          .then((response) => {
            if (response?.data?.modifiedCount) {
              updateMarathon(id, trimmedMarathon);
              successAlert("Updated!", "Your marathon has been updated");
              setIsOpenModal(false);
            }
            console.log(response);
          });
      }
    });

    console.log(trimmedMarathon);
  };
  return (
    <>
      {/* modal start */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60">
          <div className="relative w-full max-w-3xl mx-4 md:mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-h-[90vh] overflow-y-auto">
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

            <form onSubmit={(e) => handleUpdateMarathon(e, _id)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <MarathonInput
                  label="Marathon Title"
                  inputName="title"
                  inputType="text"
                  dValue={title}
                />
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <label className="label capitalize text-gray-800 dark:text-gray-400 text-base font-medium">
                    Registration Start Date:
                  </label>
                  <DatePicker
                    selected={regisStartDate}
                    onChange={(date) => setRegisStartDate(date)}
                    customInput={
                      <input
                        name="registrationStart"
                        className="input w-full rounded-full"
                        required
                      />
                    }
                  />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <label className="label capitalize text-gray-800 dark:text-gray-400 text-base font-medium">
                    Registration End Date:
                  </label>
                  <DatePicker
                    selected={regisEndDate}
                    onChange={(date) => setRegisEndDate(date)}
                    customInput={
                      <input
                        name="registrationEnd"
                        className="input w-full rounded-full"
                        required
                      />
                    }
                  />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <label className="label capitalize text-gray-800 dark:text-gray-400 text-base font-medium">
                    Marathon Start Date:
                  </label>
                  <DatePicker
                    selected={marathonStartDate}
                    onChange={(date) => setMarathonStartDate(date)}
                    customInput={
                      <input
                        name="marathonDate"
                        className="input w-full rounded-full"
                        required
                      />
                    }
                  />
                </fieldset>

                <MarathonInput
                  label="Location"
                  inputName="location"
                  inputType="text"
                  dValue={location}
                />
                <MarathonSelectInput
                  label="Running Distance"
                  inputName="distance"
                  dValue={distance}
                  selectValue={[
                    "5K",
                    "10K",
                    "15K",
                    "21.1K",
                    "30K",
                    "35K",
                    "42.2K",
                    "50K",
                    "100K",
                  ]}
                />
                <MarathonInput
                  label="Marathon Image URL"
                  inputName="image"
                  inputType="url"
                  dValue={image}
                />

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <label className="fieldset-legend label capitalize text-gray-800 dark:text-gray-400 text-base font-medium">
                    Marathon Description
                  </label>
                  <textarea
                    className="textarea h-24 w-full"
                    name="description"
                    defaultValue={description}
                  ></textarea>
                </fieldset>
              </div>

              <div className="mt-7">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <label className="label capitalize text-gray-800 dark:text-gray-400 text-base font-medium">
                    Organizer's Email :
                  </label>
                  <input
                    type="text"
                    className="input w-full rounded-full "
                    name="email"
                    defaultValue={email}
                    required
                  />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-7">
                  <input
                    type="submit"
                    className="btn rounded-full  bg-orange-400 text-slate-100 font-medium input-btn w-full"
                    value="Update Marathon"
                  />
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* modal end */}
      <tr className="text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">{index + 1}</td>
        <td className="py-6 px-8">{title}</td>
        <td className="py-6 px-2">{registrationStart}</td>
        <td className="py-6 px-2">{registrationEnd}</td>
        <td className="py-6 px-2">{marathonDate}</td>
        <td className="py-6 px-8">{location}</td>

        <td className="py-6 px-4 flex gap-x-2 justify-center">
          <button onClick={() => setIsOpenModal(true)}>
            <Link className="font-medium text-teal-600 dark:text-teal-500 hover:underline">
              <FaRegEdit size={24} />
            </Link>
          </button>
          <button onClick={() => handleDeleteMarathon(_id)}>
            <Link className="font-medium text-orange-500 dark:text-rose-600 hover:underline">
              <MdDeleteOutline size={24} />
            </Link>
          </button>
        </td>
      </tr>
    </>
  );
}

export default MarathonTableRow;
