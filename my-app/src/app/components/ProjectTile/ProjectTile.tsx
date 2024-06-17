"use client";

import React from "react";

import { useRouter } from "next/navigation";
import "./project-tile-styles.scss";

interface ProjectTileProps {
  imageSquare: string;
  title: string;
  id: string;
  isCarousel?: boolean;
}

export default function ProjectTile({
  imageSquare,
  title,
  id,
  isCarousel = false,
}: ProjectTileProps) {
  const router = useRouter();
  const onProjectTileClick = () => {
    router.push(`/projects/${id}`);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className={
          "project-tile" + (isCarousel ? " project-tile-carousel" : "")
        }
        style={{
          backgroundImage: `url(${imageSquare})`,
        }}
        onClick={onProjectTileClick}
      >
        <div className="project-tile-content">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
