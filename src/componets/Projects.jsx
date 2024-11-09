import React from "react";
import { projectApi } from "../Projects/ProjectApi";

const Projects = () => {
  return (
    <div className="my-4">
      <div className="md:grid md:grid-cols-2 gap-4 flex flex-col">
        {projectApi.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] p-2 rounded-lg shadow"
          >
            {/* Project Image */}
            <div className="">
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-contain rounded" // Adjust size as needed
              />
            </div>

            {/* Project Details */}
            <div className="">
              <div className="flex justify-between items-center">
                {" "}
                <h3 className="text-white text-[25px] my-2">{project.name}</h3>
                <h3 className="text-yellow-400 text-sm">
                  {" "}
                  date: {project.date}
                </h3>
              </div>
              <div>
                <p className="text-xs">{project.description}</p>
              </div>

              {/* Displaying the tools as buttons */}
              {project.tools && project.tools.length > 0 && (
                <div className="my-2">
                  {project.tools.map((tool, idx) => (
                    <button
                      key={idx}
                      className=" border  text-white py-1 px-3 rounded-md text-xs mr-2 mt-2 hover:bg-gray-600"
                    >
                      {tool}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex  items-center my-3 ">
              <div className="flex  items-center mr-4">
                <p className="flex  items-center mr-2 ">Git:</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline mt-1 block cursor-pointer"
                >
                  {project.git}
                </a>
              </div>
              <div className="flex  items-center">
                <p className="flex  items-center mr-2 ">Live:</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline mt-1 block cursor-pointer"
                >
                  {project.live}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
