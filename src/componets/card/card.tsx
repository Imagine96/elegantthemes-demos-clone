import React from "react";
import ImgLink from "../img-author/imgLink";

interface props {
  img: string;
  header: string;
  text: string;
  byLink?: string;
  onLink?: string;
  imgLinkText?: string;
  alt?: string;
}

const Card: React.FC<props> = (props) => {
  let imgLink = null;
  if (props.byLink && props.onLink && props.imgLinkText) {
    imgLink = (
      <ImgLink
        onLink={props.onLink}
        byLink={props.byLink}
        text={props.imgLinkText}
      />
    );
  }

  return (
    <div className="flex flex-col text-center items-center justify-around gap-4 relative">
      <img src={props.img} alt={props.alt} />
      <h3 className=" font-semibold "> {props.header} </h3>
      <p className="px-8"> {props.text} </p>
      {imgLink}
    </div>
  );
};

export default Card;
