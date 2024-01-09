import React from "react";
import "../styles/ProjectTile.scss";

interface ProjectTileProps {
  image: string;
  title: string;
}

export default function ProjectTile({ image, title }: ProjectTileProps) {
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
    >
      <div className="project-tile-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
