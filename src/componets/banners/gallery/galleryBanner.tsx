import React from "react";
import ImgLink from "../../img-author/imgLink";

/* Photo by <a href="https://unsplash.com/@miguelbautistadp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Miguel Bautista</a> on <a href="https://unsplash.com/s/photos/coffe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
   */

const IMGSLINKS = [
    {
        byLink: "https://unsplash.com/@amseaman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        onLink: "https://unsplash.com/s/photos/coffe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        text: "Andrew Seaman",
        alt: "coffe cup",
        src: "/andrew-seaman-SOuClWmku1c-unsplash.jpg"
    },{
        byLink: "https://unsplash.com/@pgauti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        onLink: "https://unsplash.com/s/photos/coffee-cup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        text: "Prateek Gautam",
        alt: "coffe cup",
        src: "/prateek-gautam-lc1iVQlKak8-unsplash.jpg"
    },{
        byLink: "https://unsplash.com/@miguelbautistadp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        onLink: "https://unsplash.com/s/photos/coffe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        text: "Miguel Bautista",
        alt: "coffe latte",
        src: "/miguel-bautista-vam2hese45s-unsplash.jpg"
    }

]
const GalleryBanner = () => {


    return(
        <section
            id="banners-gallery"
            className=" grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3"
        >
            {
            IMGSLINKS.map(img => {
                return(
                    <div key={img.alt} className="relative" >
                        <img src={img.src} alt={img.alt} />
                        <ImgLink onLink={img.onLink} byLink={img.byLink} text={img.text} />
                    </div>
                )
            }) 
            }
        </section>
    )
}

export default GalleryBanner