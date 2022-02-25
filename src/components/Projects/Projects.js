import React from "react";
import { projectData } from "./ProjectData";
function Projects() {
  return (
    <div name="projects">
      {projectData.map((project) => {
        return (
          <div key={project.id} className="ProjectCard">
            <img className="ProjectImg" src={project.img} alt={project.title} />
            <div className="ProjectInfo">
              <h2 className="SubTitle">{project.title}</h2>
              <p className="Description">{project.desc}</p>
              <div className="BtnCont">
                <a className="Btn SmallBtn" href={project.gitLink}>
                  Github
                </a>
                <a className="Btn SmallBtn Live" href={project.LiveLink}>
                  Live Website
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
