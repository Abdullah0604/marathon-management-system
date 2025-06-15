import React from "react";
import { Link } from "react-router";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
function TableRow({ registration, index, removeRegistration }) {
  const { _id, title, location, firstName, lastName, startDate } = registration;

  const handleDeleteApplication = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/jobs/${id}`)
          .then((response) => {
            if (response.data.deletedCount) {
              removeRegistration(id);
              Swal.fire({
                title: "Deleted!",
                text: "Your application has been deleted.",
                icon: "success",
              });
            }
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };
  return (
    <tr className="text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">{index + 1}</td>

      <td className="py-6 px-8">{title}</td>
      <td className="py-6 px-8">{location}</td>
      <td className="py-6 px-2">{startDate}</td>
      <td className="py-6 px-2">{firstName}</td>
      <td className="py-6 px-2">{lastName}</td>

      <td className="py-6 px-4 flex gap-x-2 justify-center">
        <button>
          <Link className="font-medium text-teal-600 dark:text-teal-500 hover:underline">
            <FaRegEdit size={24} />
          </Link>
        </button>
        <button onClick={() => handleDeleteApplication(_id)}>
          <Link className="font-medium text-orange-500 dark:text-rose-600 hover:underline">
            <MdDeleteOutline size={24} />
          </Link>
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
