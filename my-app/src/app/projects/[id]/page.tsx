"use client";
import { useEffect, useState } from "react";
import ProjectPageContent from "../../components/ProjectPageContent";
import projects from "../../data/projects.json";

interface Project {
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
    console.log(chosenProject);
    setProject(chosenProject || null);
    console.log(project);
  }, [project]);

  return (
    <div>
      <div className="hero-image">
        {project && <>{console.log(project.imageWide)}</>}
        <img
          src={project?.imageWide}
          alt="Hero Image"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ProjectPageContent id={id} />
      </div>
    </div>
  );
}
