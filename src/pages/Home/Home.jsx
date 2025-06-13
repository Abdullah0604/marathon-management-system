import Banner from "./Banner";
import FAQS from "./FAQS/FAQS";
import Marathons from "./Marathons/Marathons";
import OurStory from "./OurStory";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";

function Home() {
  return (
    <div>
      <Banner />
      <Marathons />
      <UpcomingEvents />
      <OurStory />
      <FAQS />
    </div>
  );
}

export default Home;
