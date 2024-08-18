import React from "react";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import about from "@/app/data/about.json";

import "./about-styles.scss";

export default function AboutFolioPage() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>
      {typeof about.summary === "string" &&
        about.summary.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            <p className="about-summary-text">{line}</p>
          </React.Fragment>
        ))}
      <h1 className="about-view-other-header">View My Projects</h1>
      <MyCarousel />
      <div className="bottom-page-margin" />
    </div>
  );
}
