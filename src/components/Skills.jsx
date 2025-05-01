import React from "react";
import SkillCard from "./SkillCard";
const skillData = [
  {
    title: "JavaScript",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "React.Js",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Node.Js",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
function Skills() {
  return (
    <section className="py-8" id="skills">
      <h1 className="font-sans font-bold text-5xl text-gray-800 py-4">
        Skills
      </h1>

      <div className="flex  justify-between py-4">
        {skillData.map((s, index) => {
          return <SkillCard key={index} skill={s} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
