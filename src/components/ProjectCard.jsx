import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

function ProjectCard(p) {
  const { project } = p;
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-6 py-4">
      <img src={project.imgSRC} />
      <h1 className="text-indigo-700 text-3xl dark:text-indigo-400">
        {project.title}
      </h1>
      <p className="text-gray-500 text-sm">{t("project_description")}</p>
      <div className="flex gap-1.5">
        {project.icerir.map((x, index) => {
          return (
            <p
              className="border-1 border-indigo-700 rounded-sm text-indigo-700 py-1.5 px-4.5 font-bold dark:border-indigo-400 dark:text-indigo-400"
              key={index}
            >
              {x}
            </p>
          );
        })}
      </div>
      <nav className="flex justify-between text-indigo-800 underline font-bold dark:text-indigo-400">
        <a href={project.github}>Github</a>
        <a href={project.projectURL}>View Site</a>
      </nav>
    </div>
  );
}

export default ProjectCard;
