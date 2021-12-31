import React from "react";

const Video = () => {
  return (
    <section
      id="video-section"
      className=" bg-dark-bg text-white flex flex-col items-center pt-8"
    >
      <div className=" text-white flex flex-col items-center space-y-8 mb-8" >
        <h1 className="lg:text-[80px] text-[40px] font-display uppercase " >Our Story</h1>
        <p className=" lg:w-[70%] text-center " >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
      </div>
      <div className=" aspect-video w-full bg-orange-hover ">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/AkXVBRV1vWo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default Video;
