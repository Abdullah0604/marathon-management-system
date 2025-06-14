import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import AuthInput from "../sharedComponents/AuthInput";
import useAuth from "../../hooks/useAuth";

function RegistrationMaration() {
  const { user } = useAuth();
  const marathon = useLoaderData();

  console.log(marathon);

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const contactNumber = form.contactNumber.value;
    const participentData = {
      firstName,
      lastName,
      contactNumber,
      email: user?.email,
      title: marathon?.title,
      startDate: marathon?.registrationStart,
      marathonId: marathon?._id,
      image: marathon?.image,
      location: marathon?.location,
    };

    console.log(participentData);

    // axios
    //   .post("http://localhost:3000/registration-marathon", participentData)
    //   .then((response) => {
    //     if (response.data.insertedId) {
    //       axios
    //         .patch("http://localhost:3000/update-registration-count", {
    //           marathonId: marathon?._id,
    //         })
    //         .then((response) => {
    //           console.log(response);
    //         });

    //       Swal.fire({
    //         title: "🎉 Registration Complete!",
    //         text: "You're officially registered for the marathon. Get ready to run!",
    //         icon: "success",
    //         confirmButtonText: "Awesome!",
    //       });
    //     }
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    axios
      .get(
        `http://localhost:3000/registration-marathon-query?email=${user.email}&marathonId=${marathon?._id}`
      )
      .then((response) => {
        if (response.data || response.data?.marathonId === marathon?._id) {
          Swal.fire({
            icon: "error",
            title: "🚫 Already Registered!",
            text: "You've already applied for this marathon. No need to apply again. Please Eplore others marathon",
            confirmButtonText: "Okay, got it!",
          });
        } else {
          axios
            .post(
              "http://localhost:3000/registration-marathon",
              participentData
            )
            .then((response) => {
              if (response.data.insertedId) {
                axios.patch("http://localhost:3000/update-registration-count", {
                  marathonId: marathon?._id,
                });

                Swal.fire({
                  title: "🎉 Registration Complete!",
                  text: "You're officially registered for the marathon. Get ready to run!",
                  icon: "success",
                  confirmButtonText: "Awesome!",
                });
              }
              console.log(response);
            })
            .catch((error) => {
              console.log(error.message);
            });
        }

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-[600px] shadow-md border border-gray-300 my-10 mx-auto px-3 md:px-6 dark:bg-gray-800/40 rounded-xl pb-16 ">
      <header className="py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Register for Your{" "}
          <span className="text-orange-500">Next Marathon</span>
        </h1>
        <p className="mt-2 text-base text-gray-500 md:text-lg">
          Fill out the form below to secure your spot in the race — get ready to
          run with passion!
        </p>
      </header>

      <form
        onSubmit={handleRegistrationSubmit}
        className="space-y-4 md:space-y-6"
      >
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
          />
        </div>
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
            inputExample="rohim... "
          />
        </div>
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
          />
        </div>

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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5 dark:p-3 dark:bg-gray-700 focus:outline-0 dark:border-none dark:text-white "
            value={user?.email}
            required
            readOnly
          />
        </div>

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
            value={marathon?.title}
            required
            readOnly
          />
        </div>

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
            value={marathon?.registrationStart}
            required
            readOnly
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
        >
          Registration
        </button>
      </form>
    </div>
  );
}

export default RegistrationMaration;
