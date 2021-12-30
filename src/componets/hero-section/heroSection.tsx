import React from "react";
import classes from "./heroSection.module.css";
import ImgLink from "../img-author/imgLink";
import arrowIcon from "./double_arrow_black_24dp.png";

const Hero = () => {
  const imgText = "🇸🇮 Janko Ferlič";
  const byLink =
    "https://unsplash.com/@itfeelslikefilm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTex";
  const onLink =
    "https://unsplash.com/s/photos/coffe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

  return (
    <section
      className={` ${classes.container} w-full h-[100vh] grid `}
      id="hero-section"
    >
      <ImgLink text={imgText} byLink={byLink} onLink={onLink} />
      <div
        className={`${classes.screen} flex flex-col items-center text-white justify-center z-10 px-12 text-center`}
      >
        <h1 className="lg:text-[80px] text-[64px] font-display uppercase">COFFE HOUSE</h1>
        <h3 className=" text-[18px] font-body capitalize font-light my-4 ">
          Serving Only the Best since 2013
        </h3>
        <a
          href="#menu-section"
          className=" font-semibold py-2 px-4 bg-orange-normal m-8 hover:bg-orange-hover hover:scale-110 transition duration-300 "
          onClick={() => null}
        >
          SHOP
        </a>
      </div>
      <a href="#menu-section">
        <img
          className=" absolute bottom-0 left-[50vw] -translate-x-[50%] cursor-pointer transform hover:scale-105 z-20 w-10 h-10 "
          src={arrowIcon}
        />
      </a>
    </section>
  );
};

export default Hero;
