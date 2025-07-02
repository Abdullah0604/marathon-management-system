import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-orange-500">Contact Us</h2>

      <div className="flex items-start gap-4">
        <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
        <div>
          <p className="text-gray-700 dark:text-gray-300 font-semibold">
            Address
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            123 Marathon Lane, Dhaka, Bangladesh
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
        <div>
          <p className="text-gray-700 dark:text-gray-300 font-semibold">
            Phone
          </p>
          <p className="text-gray-600 dark:text-gray-400">+880 1234-567890</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <FaEnvelope className="text-orange-500 text-xl mt-1" />
        <div>
          <p className="text-gray-700 dark:text-gray-300 font-semibold">
            Email
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            support@runnexus.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
