import personalPreview from "../assets/personal-home.jpg";
import commsPreview from "../assets/comms-home.jpg";
import MaieBar from "../components/maiebar";

function Home() {
  return (
    <div
      className="flex justify-center items-start mt-[300px]"
      alt="container-main"
    >
      <div className="flex flex-row h-auto justify-center w-[1600px] space-x-3">
        <div className="w-[10%]" alt="personal-tb">
          <img src={personalPreview} alt="home-personal" />
        </div>
        <div className="w-[10%]" alt="comm-tb">
          <img src={commsPreview} alt="home-comm" />
        </div>
        <MaieBar className="ml-[40px]" />
      </div>
    </div>
  );
}

export default Home;
