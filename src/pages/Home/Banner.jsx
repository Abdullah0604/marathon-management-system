import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Slider from "./Slider";
import bannerOne from "../../assets/banner/marathon01.jpg";
import bannerTwo from "../../assets/banner/marathon02.jpg";
import bannerThree from "../../assets/banner/marathon03.jpg";

function Banner() {
  const contents = [
    {
      id: 1,
      title: "RunNexus Marathon ",
      description:
        "Join thousands of runners in an epic journey. Push your limits and run with pride across your city streets!",
      image: bannerOne,
      eventDate: "Aug 10, 2025",
      deadline: "July 25",
      buttonText: "Register Now",
    },
    {
      id: 2,
      title: "Night  Challenge",
      description:
        "Experience the thrill of night running under the stars. A challenge for speed, stamina, and spirit!",
      image: bannerTwo,
      eventDate: "Sep 5, 2025",
      deadline: "Aug 20",
      buttonText: "Join the Sprint",
    },
    {
      id: 3,
      title: "City Half Marathon",
      description:
        "Explore the city in a new way with our scenic half-marathon route. Perfect for beginners and pros alike.",
      image: bannerThree,
      eventDate: "Oct 15, 2025",
      deadline: "Sep 30",
      buttonText: "Get Started",
    },
  ];

  return (
    <div className="max-w-[1480px] w-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full   my-10"
      >
        {contents.map((content) => (
          <SwiperSlide
            key={content.id}
            className="w-full  flex justify-center items-center"
          >
            <Slider content={content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
