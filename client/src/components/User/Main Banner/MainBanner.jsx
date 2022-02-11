import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import styles from "./MainBanner.module.css"

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <div className={styles.main1}>
      <Swiper navigation={true} modules={[Navigation]} className={styles.Swiper}>
      <SwiperSlide>imagen</SwiperSlide> 
        <div>Controles</div>
      </Swiper>
    </div>
  );
}

