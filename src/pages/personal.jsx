import MaieBar from "../components/maiebar";
import row1a from "../assets/personal/row-1-1.jpg";
import row1b from "../assets/personal/row-1-2.jpg";
import row2a from "../assets/personal/row-2-1.jpg";
import row2b from "../assets/personal/row-2-2.jpg";
import row3a from "../assets/personal/row-3-1.jpg";
import row3b from "../assets/personal/row-3-2.jpg";
import row4 from "../assets/personal/row-4.jpg";

function personal() {
  return (
    <div className="flex justify-center mt-[175px]">
      <div
        className="w-[800px] flex flex-col gap-y-1 mr-[40px]"
        alt="container-personal"
      >
        <div className="flex flex-row gap-1" alt="row1">
          <div>
            <img src={row1a} alt="" />
          </div>
          <div>
            <img src={row1b} alt="" />
          </div>
        </div>
        <div className="flex flex-row gap-1" alt="row2">
          <div>
            <img src={row2a} alt="" />
          </div>
          <div>
            <img src={row2b} alt="" />
          </div>
        </div>
        <div className="flex flex-row gap-1" alt="row3">
          <div>
            <img src={row3a} alt="" />
          </div>
          <div>
            <img src={row3b} alt="" />
          </div>
        </div>
        <div alt="row4">
          <img src={row4} alt="" />
        </div>
        <div className="flex flex-row gap-1" alt="row5">
          <div>left</div>
          <div>right</div>
        </div>
        <div alt="row6">row6</div>
        <div className="flex flex-row" alt="row7">
          <div>left</div>
          <div>right</div>
        </div>
      </div>
      <div>
        <div className="fixed">
          <MaieBar className="items-start" />
        </div>
      </div>
    </div>
  );
}

export default personal;
