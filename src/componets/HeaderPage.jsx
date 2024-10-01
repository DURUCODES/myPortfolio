import React, { useEffect, useState } from "react";
const HeaderPage = () => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
    day: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setCurrentDateTime({
        date: now.toLocaleDateString(undefined, options),
        time: now.toLocaleTimeString(),
        day: now.toLocaleString("en-US", { weekday: "long" }),
      });
    };

    updateDateTime(); // Initial call
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="border-t-8 border-b-8 border-[#451a03] py-2">
        <div className="flex items-center justify-between py-2 border-t-2 border-b-2 border-[#451a03]">
          <div className="lorem-ipsum hidden md:block w-80">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex-grow text-center">
            <h1 className="md:text-7xl text-6xl">NEWS PAPER</h1>
          </div>
          <div className="lorem-ipsum hidden md:block w-80">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="my-1 py-2 border-b-2 border-[#451a03] flex justify-between">
          <p className="md:text-sm text-xs">{currentDateTime.date}</p>
          <p className="md:text-sm text-xs uppercase cursor-pointer">
            <a
              href="https://github.com/DURUCODES"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              https://github.com
            </a>
          </p>
          <p className="md:text-sm text-xs uppercase cursor-pointer">Project</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
