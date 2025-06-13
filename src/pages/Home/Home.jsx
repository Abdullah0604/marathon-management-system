import Banner from "./Banner";
import FAQS from "./FAQS/FAQS";
import OurStory from "./OurStory";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";

function Home() {
  return (
    <div>
      <Banner />
      <UpcomingEvents />
      <OurStory />
      <FAQS />
    </div>
  );
}

export default Home;
