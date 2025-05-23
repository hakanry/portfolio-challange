import React from "react";

function SkillCard(s) {
  const { skill } = s;
  return (
    <div className="flex flex-col py-4">
      <h1 className="text-indigo-700 text-3xl dark:text-indigo-400">
        {skill.title}
      </h1>
      <p className="text-gray-500 text-xs max-w-[75%] py-4 max-sm:max-w-full dark:text-white">
        {skill.paragraph}
      </p>
    </div>
  );
}

export default SkillCard;
