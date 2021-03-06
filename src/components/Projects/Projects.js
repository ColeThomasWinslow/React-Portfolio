import React from "react";
import { projectData } from "./ProjectData";

function Projects() {
  return (
    <div name="projects" className="Projects">
      {projectData.map((project) => {
        return (
          <div key={project.id} className="ProjectCard">
            <div className="ProjectInfo">
              {" "}
              <div className="ImgCont">
                <img
                  className="ProjectImg"
                  src={project.img}
                  alt={project.title}
                />
              </div>
              <div className="InfoBox">
                {" "}
                <h2 className="SubTitle ProjectTitle">{project.title}</h2>
                <p className="Description">{project.desc}</p>
                <div className="TechUsedCont">
                  {project.tech.map((item) => {
                    return <p key={item.name}>{item.name}</p>;
                  })}
                </div>
                <div className="BtnCont">
                  <a
                    className="Btn SmallBtn git"
                    rel="noreferrer"
                    target="_blank"
                    href={project.LiveLink}
                  >
                    Live Website
                  </a>
                  <a
                    className="Btn SmallBtn Live"
                    rel="noreferrer"
                    target="_blank"
                    href={project.gitLink}
                  >
                    Github
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
