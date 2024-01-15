import React from "react";
import ProjectTile from "./components/ProjectTile";

import { ChevronDown } from "react-bootstrap-icons";

import projects from "./data/projects.json";

import "./page.scss";

export default function Page() {
  return (
    <main>
      <div className="hero-content">
        <img
          className="hero-logo"
          src="assets\logo\WHITELOGO-jack.png"
          alt="logo"
        />
        <div className="hero-text">
          <p>
            Multi-media graphic designer specialising in publication design,
            branding and advertising
          </p>
        </div>
        <div className="work-together">
          <p>LET'S WORK TOGETHER</p>
        </div>
        <div className="arrow-down">
          <ChevronDown size={50} />
        </div>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-tile-outer" key={project.id}>
            <ProjectTile
              imageSquare={project.imageSquare}
              title={project.title}
              id={project.id}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
