import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 rounded-xl transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-10">
          What Our Runners Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md relative border-l-4 border-orange-500 transition-colors duration-300"
            >
              <FaQuoteLeft className="text-orange-500 absolute -top-3 -left-3 text-2xl bg-white dark:bg-gray-900 p-1 rounded-full" />
              <p className="text-gray-700 dark:text-gray-300">
                "Joining events through RunNexus was the smoothest experience
                I've had. Highly recommended!"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={`https://randomuser.me/api/portraits/women/${
                    i + 20
                  }.jpg`}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-orange-500"
                />
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  Runner {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
