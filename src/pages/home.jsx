import personalPreview from "../assets/personal-home.jpg";
import personalPreviewHover from "../assets/personal-home-hover.jpg";
import commsPreview from "../assets/comms-home.jpg";
import commsPreviewHover from "../assets/comms-home-hover.jpg";
import MaieBar from "../components/maiebar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="flex justify-center items-start mt-[300px]"
      alt="container-main"
    >
      <div className="flex flex-row h-auto justify-center w-[1600px] space-x-3">
        <div className="relative w-[10%]">
          <Link to="/personal">
            <img
              src={personalPreview}
              alt="home-personal"
              className="cursor-pointer w-full h-auto duration-300"
            />
            {/* Overlay image */}
            <img
              src={personalPreviewHover} // Replace with your second image
              alt="overlay"
              className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 transform-none"
            />
          </Link>
        </div>
        <div className="relative w-[10%]" alt="comm-tb">
          <Link to="/commissions">
            <img
              src={commsPreview}
              alt="home-comm"
              className="cursor-pointer w-full h-auto duration-300"
            />

            <img
              src={commsPreviewHover} // Replace with your second image
              alt="overlay"
              className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 transform-none"
            />
          </Link>
        </div>
        <MaieBar className="ml-[40px]" />
      </div>
    </div>
  );
}

export default Home;
