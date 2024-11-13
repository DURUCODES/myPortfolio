import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";

const NavBar = () => {
  const [selected, setSelected] = useState("About");

  const handleClick = (item) => {
    setSelected(item);
  };

  const renderSelectedComponent = () => {
    switch (selected) {
      case "About Me":
        return <AboutMe />;
      case "Resume":
        return <Resume />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <div className="flex flex-col w-full bg-black rounded-xl border">
      <div className="flex md:justify-between md:mb-12">
        <div>
          <h1 className="text-3xl font-bold px-4 mt-4 md:mt-0 md:pt-4 md:pb-2 mb-2 text-white">
            {selected}
          </h1>
          <div className="bg-yellow-400 w-16 h-2 mx-4 rounded-xl"></div>
        </div>
        <div className="bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] py-4 md:px-10 md:rounded-bl-2xl rounded-tl-2xl md:rounded-tl-none rounded-tr-2xl md:rounded-tr-xl border fixed bottom-0 left-0 right-0 rounded md:static backdrop-blur-[12px] z-50">
          <ul className="flex justify-center text-white font-semibold md:px-16">
            {["About", "Resume", "Projects", "Contact"].map((item) => (
              <li
                key={item}
                className={`mx-2 cursor-pointer ${
                  selected === item ? "text-yellow-400" : ""
                }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-white px-4 pt-4 pb-14 ">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default NavBar;
