import { Link, useLoaderData } from "react-router";
import {
  FaMapMarkerAlt,
  FaRunning,
  FaCalendarAlt,
  FaUserPlus,
  FaRegClock,
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

          <Link to={`/registration-maration/${_id}`}>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full cursor-pointer font-medium transition duration-300 text-[15px]">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MarathonDetails;
