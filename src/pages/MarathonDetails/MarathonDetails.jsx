import { Link, useLoaderData } from "react-router";
import {
  FaMapMarkerAlt,
  FaRunning,
  FaCalendarAlt,
  FaUserPlus,
  FaRegClock,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
} from "react-icons/fa";

function MarathonDetails() {
  const marathonDetails = useLoaderData();
  const {
    _id,
    image,
    title,
    description,
    location,
    distance,
    marathonDate,
    registrationStart,
    registrationEnd,
    totalRegistrationCount,
  } = marathonDetails;

  const startDate = new Date(registrationStart);
  const endDate = new Date(registrationEnd);
  const today = new Date();
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);
  today.setHours(0, 0, 0, 0);

  const isTodayWithinRange = today >= startDate && today <= endDate;

  let registrationMessage = "";
  if (today < startDate) {
    registrationMessage = (
      <span className="rounded-full px-2  text-yellow-500 mt-2 text-sm flex gap-x-2">
        <FaHourglassHalf className="text-lg" />
        Registration hasn't started yet.
      </span>
    );
  } else if (today > endDate) {
    registrationMessage = (
      <span className="rounded-full px-2  text-red-500 mt-2 text-sm flex gap-x-2">
        <FaHourglassHalf className="text-lg" />
        Registration period is over.
      </span>
    );
  } else {
    registrationMessage = (
      <span className="rounded-full px-2  text-green-600 mt-2 text-sm flex gap-x-2">
        <FaCheckCircle className="text-lg" />
        Registration is open.
      </span>
    );
  }
  // console.log(isTodayWithinRange);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-6 py-10 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400  md:text-base">
            {description}
          </p>

          <div className="text-sm md:text-base space-y-3 mt-4">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 font-light">
                <span className="font-medium text-[15px] text-gray-900 dark:text-gray-300 mr-2">
                  Location:
                </span>{" "}
                {location}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaRunning className="text-orange-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 font-light">
                <span className="font-medium text-[15px] text-gray-900 dark:text-gray-300 mr-2">
                  Distance:
                </span>{" "}
                {distance}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaCalendarAlt className="text-orange-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 font-light">
                <span className="font-medium text-[15px] text-gray-900 dark:text-gray-300 mr-2">
                  Marathon Date:
                </span>{" "}
                {marathonDate}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 font-light">
                <span className="font-medium text-[15px] text-gray-900 dark:text-gray-300 mr-2">
                  Registration:
                </span>{" "}
                {registrationStart} to {registrationEnd}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaUserPlus className="text-orange-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 font-light">
                <span className="font-medium text-[15px] text-gray-900 dark:text-gray-300 mr-2">
                  Total Registrations:
                </span>{" "}
                {totalRegistrationCount}
              </span>
            </p>
          </div>
          <div className=" flex flex-col gap-y-3">
            {registrationMessage}
            <Link to={`/registration-maration/${_id}`}>
              <button
                disabled={!isTodayWithinRange}
                className={` px-6 py-2 rounded-full font-medium transition duration-300 text-[15px] text-white  ${
                  isTodayWithinRange
                    ? "bg-orange-500 hover:bg-orange-600 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarathonDetails;
