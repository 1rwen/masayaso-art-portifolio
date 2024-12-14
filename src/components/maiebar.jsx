import maieLogo from "../assets/maie-name.png";
import { Link } from "react-router-dom";

function maiebar() {
  return (
    <div
      className="flex flex-col w-full md:w-[160px] justify-center items-center md:items-start pl-5"
      alt="navbar"
    >
      <div>
        <img
          src={maieLogo}
          className="w-[120px] md:w-[160px]"
          alt="maie-name"
        />
      </div>

      <div className="hidden md:flex md:flex-col text-sm space-x-4 md:space-x-0 md:space-y-2.5 text-blueGray ">
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
