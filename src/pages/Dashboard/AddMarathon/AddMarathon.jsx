import Swal from "sweetalert2";
import { MarathonInput, MarathonSelectInput } from "./Inputs";
// import axios from "axios";
import Header from "../../sharedComponents/Header";
import useAuth from "../../../hooks/useAuth";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function AddMarathon() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [regisStartDate, setRegisStartDate] = useState(new Date());
  const [regisEndDate, setRegisEndDate] = useState(new Date());
  const [marathonDate, setMarathonDate] = useState(new Date());
  const formattedRegisStartDate = regisStartDate.toISOString().split("T")[0];
  const formattedRegisEndDate = regisEndDate.toISOString().split("T")[0];
  const formattedMarathonDate = marathonDate.toISOString().split("T")[0];

  const handleAddMarathon = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const todday = new Date();
    const formatedToday = todday.toISOString();
    const newMarathon = {
      ...data,
      createdAt: formatedToday,
      registrationStart: formattedRegisStartDate,
      registrationEnd: formattedRegisEndDate,
      marathonDate: formattedMarathonDate,
      totalRegistrationCount: 0,
    };
    const trimmedMarathon = Object.fromEntries(
      Object.entries(newMarathon).map(([key, value]) => [
        key,
        typeof value === "string" ? value.trim() : value,
      ])
    );
    axiosSecure
      .post(`/new-marathon?email=${user.email}`, trimmedMarathon)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You have posted new marathon successfully!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "oops!",
          text: error.message,
          icon: "error",
        });
        // console.log(error);
      });
    // console.log(trimmedMarathon);
  };
  return (
    <div className="">
      <Header
        title="Host a Marathon – Inspire Runners Across the Country"
        desc="Ready to organize a thrilling marathon event? Share your marathon details and reach thousands of passionate runners. Fill out the form below to get started and make your event a success!"
        width="max-w-4xl"
      />

      <div className="max-w-4xl mx-auto mt-16">
        <form onSubmit={handleAddMarathon}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <MarathonInput
              label="Marathon Title"
              inputName="title"
              inputType="text"
              inputExample="Dhaka City Half Marathon"
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
                selected={marathonDate}
                onChange={(date) => setMarathonDate(date)}
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
              inputExample="hatirjil, dhaka, Bangladesh"
            />
            <MarathonSelectInput
              label="Running Distance"
              inputName="distance"
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
              inputExample="http://imbb.com..."
            />

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="fieldset-legend label capitalize text-gray-800 dark:text-gray-400 text-base font-medium">
                Job Description
              </label>
              <textarea
                className="textarea h-24 w-full"
                name="description"
                placeholder="Write your job description"
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
                className="input w-full rounded-full focus:outline-none focus:border-1 focus:border-gray-300"
                name="email"
                defaultValue={user?.email}
                readOnly
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-7">
              <input
                type="submit"
                className="btn rounded-full  bg-orange-400 text-slate-100 font-medium input-btn w-full"
                value="Add Marathon"
              />
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMarathon;
