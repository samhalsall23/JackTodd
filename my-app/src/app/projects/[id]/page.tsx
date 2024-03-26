"use client";
import { useEffect, useState } from "react";
import ProjectPageContent from "../../components/ProjectPageContent";
import projects from "../../data/projects.json";
import MyCarousel from "@/app/components/MyCarousel";
import "../../styles/ProjectPage.scss";

interface Project {
  index: number;
  id: string;
  title: string;
  imageSquare: string;
  imageWide: string;
  description: string;
  color: string;
}

export default function ProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    const chosenProject: Project | undefined = projects.find(
      (project) => project.id === id
    );
    setProject(chosenProject || null);
  }, [project]);

  return (
    <div className="project-container">
      <div className="hero-image">
        <img
          src={project?.imageWide}
          alt="Hero Image"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="project-body-container">
        <ProjectPageContent id={id} />
        <div className="project-carousel-container">
          <h3 className="view-other-projects-heading">
            View My Other Projects
          </h3>
          <MyCarousel indexId={project ? project.index : 0}></MyCarousel>
        </div>
      </div>
    </div>
  );
}
