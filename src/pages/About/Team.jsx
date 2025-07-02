import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Ayan Hossain",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Rima Akter",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Sakib Rahman",
    role: "Backend Engineer",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    github: "#",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <section className="bg-orange-500 text-white dark:bg-gray-800 rounded-xl py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center space-y-10 px-4">
        <h2 className="text-3xl dark:text-orange-500 font-bold">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-orange-500"
              />
              <h3 className="mt-4 font-bold text-xl">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
              <div className="flex justify-center gap-4 mt-3 text-orange-500 text-lg">
                <a href={member.github}>
                  <FaGithub />
                </a>
                <a href={member.linkedin}>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
