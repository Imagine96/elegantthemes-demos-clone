import React from "react";
import ImgLink from "../../img-author/imgLink";
import classes from "./freshBeansBanner.module.css"

const FreshBeansBanner = () => {

    const byLink = 'https://unsplash.com/@kittinskie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    const onLink = "https://unsplash.com/s/photos/coffe-beans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    const linkText = "Tina Guina"

    return(
        <article
            id="banner-fresh-beans"
            className=" grid lg:grid-cols-2"
        >
            <div className="p-4 flex flex-col justify-around items-center text-white" >
                <h1 className="text-[40px] lg:text-[64px] my-4 font-display uppercase " >FRESH BEANS</h1>
                <p className="text-center" >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <button type="button" className="font-semibold text-white py-2 px-4 bg-orange-normal m-8 hover:bg-orange-hover hover:scale-110 transition duration-300" >
                    LEARN MORE
                </button>
            </div>
            <div className={`${classes.container} invisible lg:visible relative `} >
                <ImgLink byLink={byLink} onLink={onLink} text={linkText } />
            </div>
        </article>
    )
}

export default FreshBeansBanner