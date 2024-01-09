import React, { useEffect } from "react";
import ProjectTile from "./components/ProjectTile";

import projects from "./data/projects.json";

export default function Page() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <img
          src="https://i.ibb.co/xDGBhH7/WHITELOGO-jack.png"
          alt="logo"
          style={{ width: "50%", height: "auto" }}
        />
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Multi-media graphic designer specialising in publication design,
          branding and advertising
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          justifyContent: "center",
          width: "90%",
          margin: "0 auto",
        }}
        className="outer"
      >
        {projects.map((project) => (
          <div
            style={{
              backgroundColor: "#F0F0F0",
              paddingBottom: "100%",
              position: "relative",
            }}
            key={project.id}
          >
            <ProjectTile image={project.image} title={project.title} />
          </div>
        ))}
      </div>
    </main>
  );
}
