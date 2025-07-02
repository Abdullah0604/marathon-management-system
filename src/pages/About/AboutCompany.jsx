import React from "react";

const AboutCompany = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 lg:px-0 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 space-y-4 order-2 lg:order-1">
          <h2 className="text-3xl font-bold text-orange-500">Who We Are</h2>
          <p className="text-gray-700 dark:text-gray-300">
            RunNexus is a complete marathon management platform designed to
            streamline event creation, participant registration, and post-event
            analytics.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            With intuitive dashboards and real-time updates, we empower both
            runners and organizers to stay connected and informed — before,
            during, and after the race.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
          alt="Platform overview"
          className="lg:w-1/2 rounded-xl shadow-lg order-1 lg:order-2"
        />
      </div>
    </section>
  );
};

export default AboutCompany;
