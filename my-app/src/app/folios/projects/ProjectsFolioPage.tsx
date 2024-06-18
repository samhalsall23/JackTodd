"use client";
import React from "react";
import { useEffect, useState } from "react";
import projects from "@/app/data/projects.json";
import MyCarousel from "@/app/components/MyCarousel/MyCarousel";
import "./projects-styles.scss";

type Project = {
  index: number;
  id: string;
  title: string;
  imageSquare: string;
  imageWide: string;
  description: string;
  color: string;
};

export default function ProjectsFolioPage({ id }: { id: string }) {
  // STATES ---
  const [project, setProject] = useState<Project | null>(null);

  // HOOKS ---
  useEffect(() => {
    const chosenProject: Project | undefined = projects.find(
      (project) => project.id === id
    );
    setProject(chosenProject || null);
  }, [project, id]);

  return (
    <div className="project-body-container">
      <div>
        {project && (
          <>
            <h1 className="project-heading">{project.title}</h1>
            <div>
              {typeof project.description === "string" &&
                project.description.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    <p className="project-text">{line}</p>
                  </React.Fragment>
                ))}
            </div>
          </>
        )}
      </div>
      <div className="hero-image">
        <img
          className="hero-project-image"
          src={project?.imageWide}
          alt="Hero Image"
        />
      </div>
      <div className="project-carousel-container">
        <h1 className="view-other-projects-heading">View My Other Projects</h1>
        <MyCarousel indexId={project ? project.index : 0}></MyCarousel>
      </div>
    </div>
  );
}
