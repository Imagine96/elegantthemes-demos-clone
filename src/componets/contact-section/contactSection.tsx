import ImgLink from "../img-author/imgLink";
import classes from "./contactSection.module.css";

const ContactSection = () => {
  return (
    <section
      className={` min-h-[100vh] grid grid-cols-1 lg:min-h-[50vh] lg:grid-rows-1 lg:grid-cols-2 ${classes.container}`}
    >
      <div className="flex flex-col space-y-8 items-center py-8">
        <h1 className="text-white lg:text-[64px] text-[40px] font-display uppercase">
          {" "}
          Come on in!{" "}
        </h1>
        <h3 className="font-display uppercase lg:text-[36px] text-[24px] text-orange-normal">
          WEEKDAYS
        </h3>
        <p className="font-body text-white ">08PM -12AM</p>
        <h3 className="font-display uppercase lg:text-[36px] text-[24px] text-orange-normal">
          WEEKENDS
        </h3>
        <p className="font-body text-white ">12 PM – 02 AM</p>
        <button
          type="button"
          className="font-semibold py-2 px-4 bg-orange-normal m-8 hover:bg-orange-hover hover:scale-110 transition duration-300 z-20 text-white "
        >
          VIEW THE MENU
        </button>
      </div>
      <div className=" bg-[#000] bg-opacity-75 space-y-8 flex flex-col items-center py-8">
        <h1 className="text-white lg:text-[64px] text-[40px] font-display uppercase">
          {" "}
          Contact{" "}
        </h1>
        <h3 className="font-display uppercase lg:text-[36px] text-[24px] text-orange-normal">
          PHONE
        </h3>
        <p className="font-body text-white ">000 000 000 000</p>
        <h3 className="font-display uppercase lg:text-[36px] text-[24px] text-orange-normal">
          Mail
        </h3>
        <p className="font-body text-white ">mail@mail.com</p>
        <h3 className="font-display uppercase lg:text-[36px] text-[24px] text-orange-normal">
          ADDRESS
        </h3>
        <p className="font-body text-white ">
          543 TN, doula street NY, New York
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
