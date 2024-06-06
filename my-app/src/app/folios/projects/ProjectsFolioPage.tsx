"use client";
import { useEffect, useState } from "react";
import ProjectPageContent from "@/app/components/ProjectPageContent";
import projects from "@/app/data/projects.json";
import MyCarousel from "@/app/components/MyCarousel";
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
  }, [project]);

  return (
    <div className="project-body-container">
      <ProjectPageContent id={id} />
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
