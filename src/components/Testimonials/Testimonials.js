import React from "react";
import classes from "./Testimonials.module.css";
import logo from "../../Images/image.svg";
import SocailMedia from "./SocailMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Testimonials = () => {
  return (
    <div className={classes.Testimonials}>
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
          <div className={classes.container}>
            <div className={classes["container-left"]}>
              <img src={logo} />
              <h2>Impetus</h2>
              <p>Development Head</p>
              <div className={classes["social-media"]}>
                <SocailMedia />
              </div>
            </div>
            <div className={classes["container-right"]}>
              <p>
                <i>
                  "when an unknown printer took a galley of type and scrambled
                  it to"
                </i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.container}>
            <div className={classes["container-left"]}>
              <img src={logo} />
              <h2>Impetus</h2>
              <p>Development Head</p>
              <div className={classes["social-media"]}>
                <SocailMedia />
              </div>
            </div>
            <div className={classes["container-right"]}>
              <p>
                <i>
                  "when an unknown printer took a galley of type and scrambled
                  it to"
                </i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.container}>
            <div className={classes["container-left"]}>
              <img src={logo} />
              <h2>Impetus</h2>
              <p>Development Head</p>
              <div className={classes["social-media"]}>
                <SocailMedia />
              </div>
            </div>
            <div className={classes["container-right"]}>
              <p>
                <i>
                  "when an unknown printer took a galley of type and scrambled
                  it to"
                </i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.container}>
            <div className={classes["container-left"]}>
              <img src={logo} />
              <h2>Impetus</h2>
              <p>Development Head</p>
              <div className={classes["social-media"]}>
                <SocailMedia />
              </div>
            </div>
            <div className={classes["container-right"]}>
              <p>
                <i>
                  "when an unknown printer took a galley of type and scrambled
                  it to"
                </i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.container}>
            <div className={classes["container-left"]}>
              <img src={logo} />
              <h2>Impetus</h2>
              <p>Development Head</p>
              <div className={classes["social-media"]}>
                <SocailMedia />
              </div>
            </div>
            <div className={classes["container-right"]}>
              <p>
                <i>
                  "when an unknown printer took a galley of type and scrambled
                  it to"
                </i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.container}>
            <div className={classes["container-left"]}>
              <img src={logo} />
              <h2>Impetus</h2>
              <p>Development Head</p>
              <div className={classes["social-media"]}>
                <SocailMedia />
              </div>
            </div>
            <div className={classes["container-right"]}>
              <p>
                <i>
                  "when an unknown printer took a galley of type and scrambled
                  it to"
                </i>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
