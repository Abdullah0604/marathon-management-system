import EventCard from "./EventCard";
import event01 from "../../../assets/events/event-01.jpg";
import event02 from "../../../assets/events/event-02.jpg";
import event03 from "../../../assets/events/event-03.jpg";
import event04 from "../../../assets/events/event-04.jpg";
import event05 from "../../../assets/events/event-05.jpg";
import event06 from "../../../assets/events/event-06.jpg";

const upcomingEvents = [
  {
    id: 1,
    title: "Dhaka City Half Marathon",
    date: "2025-07-12",
    location: "Dhaka, Bangladesh",
    distance: "21.1 KM",
    deadline: "2025-06-30",
    description:
      "Join the thrilling half marathon across Dhaka’s vibrant cityscape. Register before June 30th.",
    image: event01,
  },
  {
    id: 2,
    title: "Chattogram Urban Run",
    date: "2025-08-10",
    location: "Chattogram, Bangladesh",
    distance: "10 KM",
    deadline: "2025-07-25",
    description:
      "Experience Chattogram’s scenic routes in this exciting 10 KM urban run event.",
    image: event02,
  },
  {
    id: 3,
    title: "Rajshahi River Marathon",
    date: "2025-09-05",
    location: "Rajshahi, Bangladesh",
    distance: "42.2 KM",
    deadline: "2025-08-20",
    description:
      "Challenge yourself in the full marathon along the beautiful Rajshahi riverbanks.",
    image: event03,
  },
  {
    id: 4,
    title: "Sylhet Trail Run",
    date: "2025-10-15",
    location: "Sylhet, Bangladesh",
    distance: "15 KM",
    deadline: "2025-09-30",
    description:
      "Enjoy nature and trails in Sylhet with this invigorating 15 KM trail run.",
    image: event04,
  },
  {
    id: 5,
    title: "Cox's Bazar Beach Marathon",
    date: "2025-11-08",
    location: "Cox's Bazar, Bangladesh",
    distance: "5 KM",
    deadline: "2025-10-25",
    description:
      "Run along the stunning Cox’s Bazar beach in a refreshing 5 KM marathon.",
    image: event05,
  },
  {
    id: 6,
    title: "Barishal Run for Health",
    date: "2025-12-20",
    location: "Barishal, Bangladesh",
    distance: "10 KM",
    deadline: "2025-12-05",
    description:
      "Promote wellness by joining the 10 KM health run in Barishal this December.",
    image: event06,
  },
];

function UpcomingEvents() {
  return (
    <div id="upcoming" className="my-24">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-semibold ">
          Upcoming Events & Programs
        </h1>
        <p className="w-30 h-1 bg-orange-500 mx-auto mt-2"></p>
        <p className="max-w-[800px] mx-auto text-sm lg:text-lg font-extralight text-gray-500 dark:text-gray-400 mt-5">
          Stay updated with the latest upcoming marathons. Find detailed
          information about dates, locations, and registration to prepare
          yourself for the next big race.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 my-16 gap-x-20 gap-y-10 ">
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
