import React from "react";
import ImgLink from "../img-author/imgLink";
import classes from "./menuSection.module.css";
import Card from "../card/card";

const CARDSIMGSDATA = [
  {
    src: "/paul-einerhand-tk9C9zbDpJI-unsplash.jpg",
    header: "MOCHA LATTE",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    byLink:
      "https://unsplash.com/@pauleinerhand?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    onLink:
      "https://unsplash.com/s/photos/coffe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    imgLinkText: "Paul Einerhand",
    alt: " Mocha Latte ",
  },
  {
    src: "/nathan-dumlao-fiOBVNPokGY-unsplash.jpg",
    header: "POUR OVER",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    byLink:
      "https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    onLink:
      "https://unsplash.com/s/photos/pour-over?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    imgLinkText: "Nathan Dumlao",
    alt: " Pour Over",
  },
  {
    src: "/kimiya-oveisi-rzsBKBb96HA-unsplash.jpg",
    header: "ESPRESSO",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    byLink:
      "https://unsplash.com/@kafgaf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    onLink:
      "https://unsplash.com/s/photos/espresso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    imgLinkText: "Kimiya Oveisi",
    alt: " Espresso  ",
  },
];

const Menu = () => {
  const bgBy =
    "https://unsplash.com/@nordwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  const bgOn =
    "https://unsplash.com/s/photos/coffe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  const bgText = "NordWood Themes";

  return (
    <section
      id="menu-section"
      className={`${classes.container} w-full flex flex-col scroll-smooth items-center -scroll-m-8 py-8`}
    >
      <div className={`${classes.screen} `}></div>
      <div className=" my-16 space-y-8 lg:w-[70%] z-20 text-center ">
        <h1 className="lg:text-[80px] text-[40px] font-display uppercase">
          {" "}
          WE BELIEVE IN COFFEE <br /> THAT TASTES INCREDIBLE
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo. Accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo.
        </p>
      </div>
      <div className=" grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 gap-4 z-20 w-[90%] ">
        {CARDSIMGSDATA.map((cardData) => {
          return (
            <Card
              key={cardData.header}
              img={cardData.src}
              header={cardData.header}
              text={cardData.text}
              byLink={cardData.byLink}
              onLink={cardData.onLink}
              imgLinkText={cardData.imgLinkText}
              alt={cardData.alt}
            />
          );
        })}
      </div>
      <button
        type="button"
        className="font-semibold py-2 px-4 bg-orange-normal m-8 hover:bg-orange-hover hover:scale-110 transition duration-300 z-20 text-white "
      >
        FULL MENU
      </button>
      <ImgLink onLink={bgOn} byLink={bgBy} text={bgText} color="dark-text" />
    </section>
  );
};

export default Menu;

