import React from "react";
import ImgLink from "../../img-author/imgLink";
import classes from "./greatCoffeBanner.module.css";

const GreatCoffeBanner = () => {

    const byLink = "https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    const onLink = "https://unsplash.com/s/photos/coffe-beans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    const text = "Brooke Lark"

  return (
    <section id="banners-great-coffe" className={` ${classes.container} grid lg:grid-cols-2 lg:pt-40 lg:pb-42 py-8 `}>
      <div></div>
      <div className="flex flex-col justify-end items-center ">
        <h1 className="text-[40px] lg:text-[64px] my-4 font-display uppercase ">GREAT COFFEE</h1>
        <p className="lg:w-[70%] " >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <button type="button" className="font-semibold text-white py-2 px-4 bg-orange-normal m-8 hover:bg-orange-hover hover:scale-110 transition duration-300">
          FULL MENU
        </button>
      </div>
      <ImgLink byLink={byLink} onLink={onLink} text={text} />
    </section>
  );
};

export default GreatCoffeBanner;
