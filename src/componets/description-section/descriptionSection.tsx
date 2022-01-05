import React from "react";
import ImgLink from "../img-author/imgLink";
import classes from "./descriptionSection.module.css";

const Description = () => {
  const byLink =
    "https://unsplash.com/@lazares?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  const onLink =
    "https://unsplash.com/s/photos/coffe-beans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  const text = "Lazarescu Alexandra";

  return (
    <section
      id="description-section"
      className={`${classes.container} relative w-full h-[100vh] flex flex-col scroll-smooth items-center justify-center -scroll-m-8 py-8 `}
    >
      <div className=" lg:w-[75%] space-y-12 flex flex-col items-center ">
        <h1 className="text-white lg:text-[64px] text-[40px] font-display uppercase z-10 ">
          {" "}
          The Best coffee Shop{" "}
        </h1>
        <div className="grid grid-cols-3 z-10">
          <h3 className="font-display uppercase lg:text-[48px] text-[36] text-orange-normal">
            Best beans
          </h3>
          <h3 className="font-display uppercase lg:text-[48px] text-[36] text-orange-normal">
            Quality milk
          </h3>
          <h3 className="font-display uppercase lg:text-[48px] text-[36] text-orange-normal">
            Perfect Blend
          </h3>
        </div>
        <p className="font-body text-white text-center w-[70%] z-10">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <button
          type="button"
          className="font-semibold py-2 px-4 bg-orange-normal m-8 hover:bg-orange-hover hover:scale-110 transition duration-300 z-20 text-white "
        >
          ABOUT US
        </button>
      </div>
      <div className={`${classes.screen}`}></div>
      <ImgLink byLink={byLink} onLink={onLink} text={text} />
    </section>
  );
};

export default Description;
