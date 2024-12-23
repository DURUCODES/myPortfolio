import React, { useState } from "react";
import mypic from "../assets/image/mm.jpeg";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcPhone } from "react-icons/fc";
const ProfileComponet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleInfo = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  return (
    <div
      className="border rounded-xl  flex flex-col p-2 md:items-center shadow"
      style={{ backgroundColor: "#0D1117" }}
    >
      <div className="flex flex-row md:flex-col md:items-start items-center justify-between  ">
        <div className="flex  group-aria-selected:space-x-8 md:flex-col">
          <div className=" h-24 md:h-40  mr-4 rounded-xl ">
            <img
              src={mypic}
              className=" h-24 md:h-40 w-[100px] md:w-full rounded-full object-fill "
            />
          </div>
          <div className="py-2">
            <h1 className="text-2xl font-bold my-2 text-white">
              Kingsley Duru
            </h1>
            <span className="px-4 py-1 text-white shadow-xl rounded  bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)]">
              Frontend specialist
            </span>
          </div>
        </div>

        <div className="flex md:hidden bg-yellow-400" onClick={toggleInfo}>
          <span>
            <IoMdArrowDropdown />
          </span>
        </div>
      </div>
      <div className={` md:flex md:flex-col ${isOpen ? "" : "hidden"}`}>
        {/* <div className=""> */}
        <hr className=" w-full border-gray-500 my-4" />
        <div>
          <div className="flex items-center">
            <span
              className=" p-1  rounded mr-2"
              style={{ backgroundColor: "#202022", color: "#fbbf24" }}
            >
              <CiMail className="text-2xl" />
            </span>
            <div>
              <p className="text-gray-500 font-semibold text-sm">Email</p>
              <a
                className="text-xs cursor-pointer text-white"
                href="mailto: kingsleychiduruchukwu@gmail.com?subject=Inquiry&body=Hello, ..."
              >
                kingsleychiduruchukwu@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center my-4">
            <span
              className=" p-1  rounded mr-2"
              style={{ backgroundColor: "#202022", color: "#fbbf24" }}
            >
              <FcPhone className="text-2xl" />
            </span>
            <div>
              <p className="text-gray-500 font-semibold text-sm">Phone</p>
              <span className="text-xs cursor-pointer text-white">
                +234 (0) 8081655227
              </span>
            </div>
          </div>

          <hr className=" w-full border-gray-500 my-4" />
          <div className="text-center flex my-4 justify-around text-gray-300">
            <span>
              {" "}
              <CiLinkedin />
            </span>
            <span>
              <a
                href="https://github.com/DURUCODES"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </span>
            <span>
              <a
                href="  https://x.com/kaymillarocky"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponet;
