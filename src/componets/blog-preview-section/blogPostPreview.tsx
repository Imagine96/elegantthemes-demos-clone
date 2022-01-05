import React from "react";
import ImgLink from "../img-author/imgLink"

interface props {
  children?: React.ReactNode;
  title: string;
  meta: string;
  text: string;
  img: string;
  onLink: string;
  byLink: string;
  imgLinkText: string;
}

const BlogPostPreview: React.FC<props> = (props: props) => {
  return (
    <div className=" bg-white w-[80%] shadow-lg p-2 " >
      <img src={props.img} alt={`image by ${props.imgLinkText}`} />
      <h3> {props.title} </h3>
      <p> {props.meta} </p>
      <p> {props.text} </p>
      <ImgLink byLink={props.byLink} onLink={props.onLink} text={props.imgLinkText} />  
    </div>
  );
};

export default BlogPostPreview;
