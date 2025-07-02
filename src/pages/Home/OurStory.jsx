// import { FaAward, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";
import { FaUsers, FaHeartbeat, FaTrophy, FaChartLine } from "react-icons/fa";
import storyImg from "../../assets/story/marathon-story.jpg";

const features = [
  {
    icon: <FaUsers />,
    title: "Community Spirit",
    description:
      "RunNexus connects runners from all walks of life to build a vibrant fitness community.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health & Fitness",
    description:
      "Promoting an active lifestyle through marathons, training events, and health awareness.",
  },
  {
    icon: <FaTrophy />,
    title: "Personal Challenge",
    description:
      "Push your limits, track your goals, and experience the thrill of achievement.",
  },
  {
    icon: <FaChartLine />,
    title: "Sustainable Growth",
    description:
      "Empowering runners and events to grow together with purpose and passion.",
  },
];

export default function OurStory() {
  return (
    <section
      id="story"
      className="w-full bg-white dark:bg-base-100/40 shadow-sm rounded-2xl border-1 border-gray-300 dark:border-gray-700 py-12 px-4 md:px-12 my-32"
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Image */}
        <div className="w-full  lg:w-2/5">
          <img
            src={storyImg}
            alt="our story"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center lg:text-left">
            <span>Our Story</span>
            <span className="w-18 h-1 mt-2 block bg-orange-400 mx-auto lg:mx-0"></span>
          </h2>
          <p className="text-[15px] text-gray-700 dark:text-gray-300 my-6">
            Since 2010, RunNexus has been at the forefront of organizing
            inclusive and impactful marathon events across the country. Our
            mission is to inspire a healthier lifestyle, foster a passionate
            runner community, and create experiences that go beyond the finish
            line. With a commitment to innovation, we empower individuals to
            challenge themselves, connect with others, and grow together through
            the power of running.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-gray-900 hover:bg-orange-100 dark:hover:bg-transparent dark:hover:outline-2 dark:hover:outline-orange-400 p-5 rounded-lg shadow hover:shadow-lg transition duration-300 "
              >
                <span className="text-orange-400 text-2xl ">{item.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
