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
          delay: 2500,
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
            <p className="absolute bg-gradient-to-r from-[#151515] to-[#634a4a] bottom-0 lg:bottom-5 lg:text-4xl text-blue-200 p-4 rounded-xl md:left-24 lg:left-64 text-center font-bold md:w-2/3 lg:w-2/3 opacity-90">
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
            <p className="absolute bottom-0 lg:bottom-5 lg:text-2xl text-white bg-gradient-to-r from-[#151515] to-[#634a4a] p-4 rounded-xl md:left-24 lg:left-72 font-bold md:w-2/3 lg:w-1/2 opacity-90">
              Get wrapped up in Knitting & Crocheting. Discover the joy of
              creating warm and stylish pieces with your own hands.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-[500px] w-full rounded-xl relative"
              src="https://i.ibb.co/WcL66C2/second-Slider.png"
              alt=""
            />
            <p className="absolute bottom-0 lg:bottom-20 lg:text-2xl text-white bg-black p-4 rounded-xl md:left-24 lg:left-72 font-bold md:w-2/3 lg:w-1/2">
              Dive into the world of Quilting. From traditional patchwork to
              modern designs, find inspiration for your next quilt project.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
