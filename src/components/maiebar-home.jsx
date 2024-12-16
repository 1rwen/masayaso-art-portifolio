import maieLogo from "../assets/maie-name.png";
import { Link } from "react-router-dom";

function maiebar() {
  return (
    <div
      className="flex flex-col w-[120px] md:w-[160px] items-center justify-center lg:pl-5"
      alt="navbar"
    >
      <div className="w-[100px] md:w-[160px] lg:w-[180px]">
        <img src={maieLogo} alt="maie-name" />
      </div>

      <div
        className="hidden xl:block flex lg:flex-col justify-center items-center text-xs space-x-3.5 lg:space-x-0 lg:space-y-2.5 text-blueGray mt-[10%]"
        alt="options"
      >
        <div>
          <Link to="/" className="hover:underline">
            home
          </Link>
        </div>
        <div>
          <Link
            to="/personal"
            className="transition-all hover:underline ease-in-out"
          >
            personal
          </Link>
        </div>
        <div>
          <Link to="/commissions" className="hover:underline">
            commissions
          </Link>
        </div>
        <div>
          <Link to="/about" className="hover:underline">
            about
          </Link>
        </div>
      </div>
    </div>
  );
}

export default maiebar;
