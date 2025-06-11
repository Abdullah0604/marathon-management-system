import LoadingIcon from "./LoadingIcon";

function Loading() {
  return (
    <div className="w-full min-h-[calc(100vh-110px)] flex items-center justify-center">
      <button
        disabled
        type="button"
        className="py-2.5 px-6 text-base  md:text-lg md:py-3 md:px-8 me-2  font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
      >
        <LoadingIcon />
        Loading....
      </button>
    </div>
  );
}

export default Loading;
