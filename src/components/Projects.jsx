import React from "react";

import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import { useLanguage } from "../contexts/LanguageContext";

function Projects() {
  const projectData = useSelector((store) => store.projectReducer);
  const { t } = useLanguage();
  return (
    <section className="py-8" id="projects">
      <h1 className="font-sans font-bold text-5xl text-gray-800 py-4 dark:text-slate-300">
        {t("projects")}
      </h1>
      <div className="flex flex-col gap-32 py-4  xl:flex-row">
        {projectData.map((p, index) => {
          return <ProjectCard key={index} project={p} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
