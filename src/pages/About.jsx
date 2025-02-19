import photo1 from "../assets/about/photo-1-about.jpg";
import photo2 from "../assets/about/photo-2-about.jpg";
import { IoHomeSharp } from "react-icons/io5";
import { useEffect } from "react";
import maieLogo from "../assets/maie-name.png";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { BiHomeHeart } from "react-icons/bi";
import { div } from "framer-motion/client";

function about() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex justify-center items-center w-[130px] lg:w-[150px] ">
          <Link to="/">
            <img src={maieLogo} alt="" />
          </Link>
        </div>
        <div className="w-[50%] mt-[30px]">
          <div
            className="w-[100%] text-xs  text-blueGray"
            alt="about-description"
          >
            <span className="underline"> about </span> <br></br>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Id odio ero,
            facilisi habitant varius feugiat velit ac. Dictum odio imperdiet
            pellentesque tincidunt dictumst cras. Viverra risus pretium
            habitasse netus nunc ex. Feugiat euismod elit nam rhoncus vestibulum
            feugiat morbi hac vulputate. Viverra curae non nunc enim finibus
            etiam. Ante primis augue ex vel sapien ultricies habitant senectus.
            Tincidunt nascetur duis non diam himenaeos dignissim luctus.
            Curabitur magnis potenti tortor consectetur sociosqu dictumst sem
            aliquet.
          </div>
          <div className="mt-[30px]" alt="social-media-icons">
            <div className="flex justify-center items-center text-3xl gap-x-5">
            <div className="text-royalBlue">
            <a
                  href="https://x.com/masayaso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royalBlue hover:text-royalBlue_hover"
                >
                  <Link to="/">
                   <IoHomeSharp />
                  </Link>
                </a>
              </div>
              <div className="text-royalBlue">
                <a
                  href="https://x.com/masayaso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royalBlue hover:text-royalBlue_hover"
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="text-royalBlue">
                <a
                  href="https://bsky.app/profile/masayaso.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royalBlue hover:text-royalBlue_hover"
                >
                  <FaBluesky />
                </a>
              </div>
            </div>
          </div>
          <div alt="tag" className="text-royalBlue  flex justify-center text-xs mt-[50px] lg:mt-[100px]">
            (#veryFirstLife)
          </div>
          <div className="text-royalBlue hover:text-royalBlue_hover flex justify-center text-xs mt-[50px] lg:mt-[100px]">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
