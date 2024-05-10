// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              className="h-[500px] w-full rounded-xl relative opacity-80"
              src="https://i.ibb.co/44bVzp6/first-Slider.png"
              alt=""
            />
            <p className="absolute bg-gradient-to-r from-[#151515] to-[#634a4a] bottom-5 lg:bottom-5 lg:text-4xl text-2xl text-blue-200 p-4 rounded-xl md:left-24 lg:left-64 text-center font-bold md:w-3/4 lg:w-2/3 opacity-90">
              Join Us in Making a Difference! Become a Volunteer Today and Be a
              Part of Something Meaningful
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-[500px] opacity-70 w-full rounded-xl relative"
              src="https://i.ibb.co/WcL66C2/second-Slider.png"
              alt=""
            />
            <p className="absolute text-center bottom-5 lg:bottom-5 lg:text-4xl text-2xl text-blue-200 bg-gradient-to-r from-[#151515] to-[#634a4a] p-4 rounded-xl md:left-24 lg:left-64 font-bold md:w-3/4 lg:w-2/3 opacity-90">
              Discover Your Passion, Make an Impact! Explore a Variety of
              Volunteer Opportunities Tailored to Your Interests and Skills
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-[500px] opacity-70 w-full rounded-xl relative"
              src="https://i.ibb.co/hsTrbPh/third-Slider.png"
              alt=""
            />
            <p className="absolute bottom-5 text-center lg:bottom-5 lg:text-4xl text-2xl text-blue-200 bg-gradient-to-r from-[#151515] to-[#634a4a] p-4 rounded-xl md:left-24 lg:left-64 font-bold md:w-3/4 lg:w-2/3 opacity-90">
              Ready to Make a Difference? Sign Up Today to Volunteer and Start
              Creating Positive Change in Your Community
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
