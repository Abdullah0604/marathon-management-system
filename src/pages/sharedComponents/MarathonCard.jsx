import { MdLocationOn } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";
import { Link } from "react-router";

function MarathonCard({ marathon }) {
  const {
    _id,
    image,
    title,

    location,
    registrationStart,
    registrationEnd,
  } = marathon;
  console.log(marathon);
  return (
    <div className="bg-white dark:bg-gray-400/10 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-5">
        <img className="w-full rounded-lg h-60 object-cover" src={image} />
      </div>

      <div className=" p-5">
        <div className="mb-5">
          <h3 className="text-lg font-bold text-purple-800 dark:text-white mb-2">
            {title}
          </h3>
        </div>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <MdLocationOn className="text-orange-500 mr-2" />
          Location: {location}
        </div>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 ">
          <LuCalendarDays className="text-orange-500 mr-2" />
          Registration : {registrationStart}{" "}
          <span className="text-orange-500 mx-2 inline-block font-bold">
            To
          </span>{" "}
          {registrationEnd}
        </div>

        <div>
          <Link to={`/marathon-details/${_id}`}>
            <button className="w-full block text-center py-2 mt-7 bg-orange-400 rounded-lg cursor-pointer text-slate-100 font-medium">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MarathonCard;
