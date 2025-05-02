import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { ADD_PROJECT } from "../actions/projectActions";

export const projectData = [
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

export function projectReducer(state = projectData, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.payload];
    default:
      return state;
  }
}
