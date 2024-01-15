"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "../styles/ProjectTile.scss";

interface ProjectTileProps {
  image: string;
  title: string;
  id: string;
}

export default function ProjectTile({ image, title, id }: ProjectTileProps) {
  const router = useRouter();
  const onProjectTileClick = () => {
    router.push(`/projects/${id}`);
  };
  return (
    <div
      className="project-tile"
      style={{
        backgroundImage: `url(${image})`,
        position: "absolute",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onProjectTileClick}
    >
      <div className="project-tile-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
