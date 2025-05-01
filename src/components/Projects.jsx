import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import ProjectCard from "./ProjectCard";
const projectData = [
  {
    imgSRC: project1,
    title: "Workintech",
    paragraph:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    icerir: ["react", "redux", "axios"],
    github: "https://www.github.com",
    projectURL: "https://www.google.com",
  },
  {
    imgSRC: project2,
    title: "Random Jokes",
    paragraph:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    icerir: ["react", "redux", "axios"],
    github: "https://www.github.com",
    projectURL: "https://www.google.com",
  },
  {
    imgSRC: project3,
    title: "Journey",
    paragraph:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    icerir: ["react", "redux", "axios"],
    github: "https://www.github.com",
    projectURL: "https://www.google.com",
  },
];
function Projects() {
  return (
    <section className="py-8" id="projects">
      <h1 className="font-sans font-bold text-5xl text-gray-800 py-4">
        Projects
      </h1>
      <div className="flex gap-30 py-4">
        {projectData.map((p, index) => {
          return <ProjectCard key={index} project={p} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
