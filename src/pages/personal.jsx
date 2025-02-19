import React, { useState, useEffect } from "react";
import MaieBar from "../components/maiebar";
import MaieBar1 from "../components/maiebar-home";
import Modal from "../components/modal";
import row8a from "../assets/personal/row-a-1.jpg";
import row8b from "../assets/personal/row-a-2.jpg";
import row0a from "../assets/personal/row-0-1.jpg";
import row0b from "../assets/personal/row-0-2.jpg";
import row1a from "../assets/personal/row-1-1.jpg";
import row1b from "../assets/personal/row-1-2.jpg";
import row2a from "../assets/personal/row-2-1.jpg";
import row2b from "../assets/personal/row-2-2.jpg";
import row3a from "../assets/personal/row-3-1.jpg";
import row3b from "../assets/personal/row-3-2.jpg";
import row4 from "../assets/personal/row-4.jpg";
import row5a from "../assets/personal/row-5-1.jpg";
import row5b1 from "../assets/personal/row-5-1-2(1).jpg";
import row5b2 from "../assets/personal/row-5-1-2(2).jpg";
import row6 from "../assets/personal/row-6.jpg";
import row7a from "../assets/personal/row-7-1.jpg";
import row7b from "../assets/personal/row-7-2.jpg";
import { Link } from "react-router-dom";

function personal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mt-[60px] lg:ml-[40px] xl:ml-0 lg:mt-[125px] mb-[175px] w-full lg:gap-x-4">
      <div
        className="lg:order-2 mb-[30px] w-[130px] lg:w-[160px]"
        alt="maie-bar"
      >
        <Link to="/">
          <MaieBar className="items-start" />
        </Link>
      </div>
      <div
        className="w-[320px] md:w-[520px] lg:w-[700px] flex flex-col justify-center items-center gap-y-1"
        alt="container-personal"
      >
        <div className="flex flex-row gap-1" alt="row8">
          <div>
            <img
              src={row8a}
              alt=""
              onClick={() => openModal(row8a)}
              className="cursor-pointer"
            />
          </div>
          <div>
            <img
              src={row8b}
              alt=""
              onClick={() => openModal(row8b)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row gap-1" alt="row0">
          <div>
            <img
              src={row0a}
              alt=""
              onClick={() => openModal(row0a)}
              className="cursor-pointer"
            />
          </div>
          <div>
            <img
              src={row0b}
              alt=""
              onClick={() => openModal(row0b)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row gap-1" alt="row1">
          <div>
            <img
              src={row1a}
              alt=""
              onClick={() => openModal(row1a)}
              className="cursor-pointer"
            />
          </div>
          <div>
            <img
              src={row1b}
              alt=""
              onClick={() => openModal(row1b)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row gap-1" alt="row2">
          <div>
            <img
              src={row2a}
              alt=""
              onClick={() => openModal(row2a)}
              className="cursor-pointer"
            />
          </div>
          <div>
            <img
              src={row2b}
              alt=""
              onClick={() => openModal(row2b)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row gap-1" alt="row3">
          <div>
            <img
              src={row3a}
              alt=""
              onClick={() => openModal(row3a)}
              className="cursor-pointer"
            />
          </div>
          <div>
            <img
              src={row3b}
              alt=""
              onClick={() => openModal(row3b)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div alt="row4">
          <img
            src={row4}
            alt=""
            onClick={() => openModal(row4)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-row gap-1" alt="row5">
          <div className="flex-1">
            <img
              src={row5a}
              alt="left"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(row5a)}
            />
          </div>
          <div className="flex flex-col gap-y-1 flex-1">
            <div>
              <img
                src={row5b1}
                alt="right-top"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(row5b1)}
              />
            </div>
            <div>
              <img
                src={row5b2}
                alt="right-bottom"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(row5b2)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1" alt="row6">
          <img
            src={row6}
            alt=""
            className="cursor-pointer"
            onClick={() => openModal(row6)}
          />
        </div>
        <div className="flex flex-row gap-1" alt="row7">
          <div>
            <img
              src={row7a}
              alt=""
              className="cursor-pointer"
              onClick={() => openModal(row7a)}
            />
          </div>
          <div>
            <img
              src={row7b}
              alt=""
              className="cursor-pointer"
              onClick={() => openModal(row7b)}
            />
          </div>
        </div>
        <div className="text-royalBlue hover:text-royalBlue_hover flex justify-center text-xs mt-[50px] lg:mt-[100px]">
            <Link
              to="/"
              className="transition-all hover:underline ease-in-out text-blueGray"
            >
              home
            </Link>
          </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedPhoto}
      />
    </div>
  );
}

export default personal;
