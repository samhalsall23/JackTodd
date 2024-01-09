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
        backgroundImage: `url(https://images.pexels.com/photos/19644201/pexels-photo-19644201/free-photo-of-close-up-of-a-jar-of-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        position: 'absolute', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
      }}
    >
      <div className="project-tile-content">
        <h1>Todd's art</h1>
      </div>
    </div>
  );
}
