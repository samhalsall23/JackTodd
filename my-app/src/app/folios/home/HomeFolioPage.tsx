"use client";

import { ChevronDown } from "react-bootstrap-icons";

import ProjectTile from "@/app/components/ProjectTile/ProjectTile";
import Image from "next/image";

import projects from "@/app/data/projects.json";
import "./home-styles.scss";

export default function HomeFolioPage() {
  // FUNCTIONS ---
  const handleScrollDownClick = () => {
    window.scrollBy({
      top: window.innerHeight - 90, // This scrolls down by 100vh
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <div className="hero-content">
        <Image
          className="hero-logo"
          src="/assets/logo/todd.svg"
          height={2841}
          width={6195}
          quality={50}
          sizes="70vw"
          priority={true}
          alt="logo"
        />
        <div className="hero-text">
          <p>
            Multi-media graphic designer specialising in publication design,
            branding and advertising
          </p>
        </div>
        <div className="work-together" onClick={handleScrollDownClick}>
          <p>VIEW MY PROJECTS</p>
        </div>
        <div className="arrow-down" onClick={handleScrollDownClick}>
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
