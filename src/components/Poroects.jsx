import React from "react";
import PoroectCard from "./PoroectCard";
import projectsList from "../data/projectsList";
const Poroects = () => {
  return (
    <>
      <section id="projects" class="py-5 bg-light">
        <div class="container">
          <h2 class="section-title">Featured Projects</h2>
          <div class="row g-4">
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
