import React from "react";

const skills = [
  {
    lang: [
      "HTML",
      "JAVA-SCRIPT",
      "TYPE-SCRIPT",
      "REACT-JS",
      "NEXT-JS",
      "TAILWIND-CSS",
      "VANILLA-CSS",

      "FRAMER-MOTION",
    ],
    styl: [],
  },
];

const Resume = () => {
  return (
    <div className=" space-x-4 space-y-4">
      {/* Map through the skills array */}
      {skills.map((skill, index) => (
        <div key={index} className=" ">
          {/* Map through the 'lang' array inside the current skill */}
          {skill.lang.map((language, idx) => (
            <button
              key={idx}
              className="text-white  mx-1 md:mr-4 mb-4 hover:bg-gray-600 px-3 py-2 rounded-md border"
            >
              {language}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Resume;
