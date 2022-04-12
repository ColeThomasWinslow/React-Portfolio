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
              <h2 className="SubTitle ProjectTitle">{project.title}</h2>
              <p className="Description">{project.desc}</p>
              <div className="TechUsedCont">
                {project.tech.map((item) => {
                  return <p key={item.name}>{item.name}</p>;
                })}
              </div>
              <div className="BtnCont">
                <a
                  className="Btn SmallBtn"
                  rel="noreferrer"
                  target="_blank"
                  href={project.gitLink}
                >
                  Github
                </a>
                <a
                  className="Btn SmallBtn Live"
                  rel="noreferrer"
                  target="_blank"
                  href={project.LiveLink}
                >
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
