import photo1 from "../assets/about/photo-1-about.jpg";
import photo2 from "../assets/about/photo-2-about.jpg";
import { useEffect } from "react";

function about() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="flex justify-center items-start gap-2 space-x-4"
        alt="container-main"
      >
        <div className="w-[50%] space-y-3" alt="photos-about">
          <img src={photo1} alt="about-horse" />
          <img src={photo2} alt="about-300k" />
        </div>
        <div className="w-[50%]">
          <div
            className="fixed w-[55%] pr-[150px] text-xs mt-[300px]  text-blueGray"
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
        </div>
      </div>
    </div>
  );
}

export default about;
