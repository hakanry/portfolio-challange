export const ADD_PROJECT = "ADD_PROJECT";

export default function addProject(project) {
  return { type: ADD_PROJECT, payload: project };
}
