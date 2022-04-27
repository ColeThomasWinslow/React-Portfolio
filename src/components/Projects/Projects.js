import React, { useEffect } from "react";
import { projectData } from "./ProjectData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Projects() {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0 },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView, animation]);
  return (
    <div ref={ref} name="projects" className="Projects">
      {projectData.map((project) => {
        return (
          <motion.div
            animate={animation}
            key={project.id}
            exit={{ opacity: 0 }}
            className="ProjectCard"
          >
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
          </motion.div>
        );
      })}
    </div>
  );
}

export default Projects;
