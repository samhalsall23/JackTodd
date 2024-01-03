import React from "react";
import "../styles/ProjectTile.scss";

interface ProjectTileProps {
  image: string;
  title: string;
}

export default function ProjectTile() {
  return (
    <div
      className="project-tile"
      style={{
        backgroundImage: `url(https://fastly.picsum.photos/id/828/200/200.jpg?hmac=XDYHUvU1Ha9LQrkNk3svII_91vwnQqo8C0yWMqCt6V8)`,
      }}
    >
      <div className="project-tile-content">
        <h1>Todd's art</h1>
      </div>
    </div>
  );
}
