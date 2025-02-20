import photo1 from "../assets/about/photo-1-about.jpg";
import photo2 from "../assets/about/photo-2-about.jpg";
import { IoHomeSharp } from "react-icons/io5";
import { useEffect } from "react";
import maieLogo from "../assets/maie-name.png";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { div } from "framer-motion/client";

function about() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen flex-grow">
        <div className="flex justify-center items-center w-[130px] lg:w-[150px] ">
          <Link to="/">
            <img src={maieLogo} alt="" />
          </Link>
        </div>
        <div className="w-[50%] lg:w-[30%] mt-[30px]">
          <div
            className="w-[100%] text-xs  text-blueGray"
            alt="about-description"
          >
            <span className="underline"> about </span> <br></br>
            hello! thanks for my stopping by &lt;3 my name is maie, a long time
            hobby artist who enjoys creating illustrations and silly doodles. i
            have a fond love for drawing concept art and character dynamics
            through pairings! i take pride in always learning and improving day
            by day to become a better illustrator than i was before.
          </div>
          <div className="mt-[40px]" alt="social-media-icons">
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
          <div
            alt="tag"
            className="text-royalBlue  flex justify-center text-xs mt-[50px] lg:mt-[50px]"
          >
            (#veryFirstLife)
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
