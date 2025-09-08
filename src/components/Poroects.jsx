import React from "react";
import PoroectCard from "./PoroectCard";
import projectsList from "../data/projectsList";
import "../assets/css/Projects.css";
const Poroects = () => {
  return (
    <>
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="row g-4">
            {projectsList.map((project) => {
              return (
                <PoroectCard
                  key={project.id}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  url={project.url}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Poroects;
