import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { ADD_PROJECT } from "../actions/projectActions";

export const projectData = [
  {
    imgSRC: project1,
    title: "project_1_title",
    paragraph: "project_1_description",
    icerir: ["react", "react-router-dom", "styled-components"],
    github: "https://github.com/hakanry/pizza-challange",
    projectURL: "https://pizza-challange-phi.vercel.app/anasayfa",
  },
  {
    imgSRC: project2,
    title: "project_2_title",
    paragraph: "project_2_description",
    icerir: ["react", "cypress.io", "reactstrap"],
    github: "https://github.com/hakanry/cypress-test-project",
    projectURL: "https://cypress-test-project.vercel.app/",
  },
  {
    imgSRC: project3,
    title: "project_3_title",
    paragraph: "project_3_description",
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
