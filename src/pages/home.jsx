import personalPreview from "../assets/personal-home.jpg";
import personalPreviewSmall from "../assets/home/personal-option.jpg";
import personalPreviewHover from "../assets/personal-home-hover.jpg";
import commsPreview from "../assets/comms-home.jpg";
import commsPreviewHover from "../assets/comms-home-hover.jpg";
import commsPreviewSmall from "../assets/home/comms-option.jpg";
import aboutPreviewSmall from "../assets/home/about-option.jpg";
import MaieBar from "../components/maiebar-home";
import MaieBar1 from "../components/maiebar";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll to top when the component mounts
  }, []);

  return (
    <div>
      <div
        className="min-h-screen flex flex-col xl:flex-row justify-center items-center lg:items-start lg:mt-[300px] lg:hidden"
        alt="container-main"
      >
        <div
          className="lg:order-2 w-[33%] sm:w-[35%] md:w-[99%] mb-[20px] flex justify-center items-center"
          alt="maie-bar"
        >
          <Link to="/">
            <MaieBar className="items-start" />
          </Link>
        </div>

        <div className="flex flex-wrap lg:flex-row h-auto items-center md:gap-y-5 justify-center space-y-[5%] md:space-y-[0%] md:gap-x-[3%] max-w-[1200px] w-[230px] sm:w-[300px] md:w-[700px]">
          <div className="md:w-[47%] lg:w-[30%]">
            <div className="underline text-xxs">personals</div>
            <Link to="/personal">
              <img src={personalPreviewSmall} alt="home-personal" />
            </Link>
          </div>
          <div className="md:w-[47%] lg:w-[30%]">
            <Link to="/about">
              <div className="underline text-xxs">about</div>
              <img src={aboutPreviewSmall} alt="about-personal" />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-row justify-center mt-[65px] xl:mt-[75px] gap-x-4 w-screen h-auto hidden">
        <div className="w-[340px] xl:w-[430px] items-center">
          <img src={personalPreview} alt="home-personal" class />
        </div>

        <div className="w-[30px]" alt="maribar">
          <MaieBar1 className="items-start" />
        </div>
      </div>
    </div>
  );
}

export default Home;
