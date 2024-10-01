import React from "react";
import { projectApi } from "../Projects/ProjectApi";

const Projects = () => {
  return (
    <div className="my-4">
      <div className="md:grid md:grid-cols-3 gap-4 flex flex-col ">
        {projectApi.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] p-4 rounded-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded" // Adjust size as needed
            />
            <h3 className="text-white text-lg mt-2">{project.name}</h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-1 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
