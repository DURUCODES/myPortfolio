import React from "react";
import ProfileComponet from "./ProfileComponet";
import HeaderPage from "./HeaderPage";
import Contact from "./Contact";
import NavBar from "./NavBar";
const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row md:p-6 p-2 ">
      <div className="md:mr-10 mb-2">
        <ProfileComponet />
      </div>
      <div className="w-full">
        <NavBar />
      </div>
    </div>
  );
};

export default HomePage;
