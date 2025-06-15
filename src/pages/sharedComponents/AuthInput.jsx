import React from "react";

function AuthInput({ inputType, inputName, inputExample, dValue }) {
  return (
    <input
      type={inputType}
      name={inputName}
      id={inputName}
      defaultValue={dValue ? dValue : ""}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={inputExample}
      required
    />
  );
}

export default AuthInput;
