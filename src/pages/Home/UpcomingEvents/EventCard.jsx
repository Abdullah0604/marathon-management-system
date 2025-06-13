import { MdLocationOn } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";

function EventCard({ event }) {
  const { image, title, location, description, date, distance, deadline } =
    event;
  return (
    <div className="bg-white dark:bg-gray-400/10 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-5">
        <img className="w-full rounded-lg h-60 object-cover" src={image} />
      </div>

      <div className="p-5">
        <div className="mb-5">
          <h3 className="text-lg font-bold text-purple-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm font-light text-gray-600 dark:text-gray-400 mb-2">
            {description}
          </p>
        </div>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <FaRunning className="text-orange-500 mr-2" />
          {distance}
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <MdLocationOn className="text-orange-500 mr-2" />
          Location: {location}
        </div>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <LuCalendarDays className="text-orange-500 mr-2" />
          Date: {date}
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
          <LuCalendarDays className="text-orange-500 mr-2" />
          Registration Deadline: {deadline}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
