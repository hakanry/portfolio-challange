import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProjectCard(p) {
  const { project } = p;
  return (
    <div className="flex flex-col gap-6 py-4">
      <img src={project.imgSRC} />
      <h1 className="text-indigo-700 text-3xl">{project.title}</h1>
      <p className="text-gray-500 text-sm">{project.paragraph}</p>
      <div className="flex gap-1.5">
        {project.icerir.map((x, index) => {
          return (
            <p
              className="border-1 border-indigo-700 rounded-sm text-indigo-700 py-1.5 px-4.5 font-bold"
              key={index}
            >
              {x}
            </p>
          );
        })}
      </div>
      <nav className="flex justify-between text-indigo-800 underline font-bold ">
        <a href={project.github}>Github</a>
        <a href={project.projectURL}>View Site</a>
      </nav>
    </div>
  );
}

export default ProjectCard;
