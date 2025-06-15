import { FaRegFrownOpen } from "react-icons/fa";

function NoData({
  title = "No Data Found",
  description = "Looks like there's nothing to show here yet.",
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20 text-gray-600 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-700 rounded-xl shadow-sm my-16">
      <FaRegFrownOpen size={50} className="mb-4 text-orange-400" />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="max-w-md text-sm md:text-base">{description}</p>
    </div>
  );
}

export default NoData;
