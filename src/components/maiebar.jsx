import maieLogo from "../assets/maie-name.png";
import { Link } from "react-router-dom";

function maiebar() {
  return (
    <div className="flex flex-col w-[160px] items-start pl-5" alt="navbar">
      <div>
        <img src={maieLogo} alt="maie-name" />
      </div>

      <div className="text-sm space-y-2.5 text-blueGray">
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/personal">personal</Link>
        </div>
        <div>
          <Link to="/commissions">commissions</Link>
        </div>
        <div>
          <Link to="/about">about</Link>
        </div>
      </div>
    </div>
  );
}

export default maiebar;
