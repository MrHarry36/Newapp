import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import  Data from "../Api.jsx/Data"
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

export default function Section5() {
  return (
    <div id="Services">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {Data.sec5.map((ele,i)=>{
            return(

                <SwiperSlide key={i}><img src={ele} alt="" /></SwiperSlide>
            )
        })}
        
      </Swiper>
    </div>
  );
}