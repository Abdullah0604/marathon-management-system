import { Suspense } from "react";
import Banner from "./Banner";
import FAQS from "./FAQS/FAQS";
import Marathons from "./Marathons/Marathons";
import OurStory from "./OurStory";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import Loading from "../../components/Loader/Loading";

const marathonPromise = fetch("http://localhost:3000/marathons").then((res) =>
  res.json()
);

function Home() {
  return (
    <div>
      <Banner />
      <OurStory />
      <Suspense fallback={<Loading />}>
        <Marathons marathonPromise={marathonPromise} />
      </Suspense>
      <UpcomingEvents />
      <FAQS />
    </div>
  );
}

export default Home;
