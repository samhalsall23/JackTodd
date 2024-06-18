import MyCarousel from "../../components/MyCarousel/MyCarousel";
import about from "@/app/data/about.json";

import "./about-styles.scss";

export default function AboutFolioPage() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>
      <p className="about-summary-text">{about.summary}</p>
      <h1 className="about-view-other-header">View My Projects</h1>
      <MyCarousel />
      <div className="bottom-page-margin" />
    </div>
  );
}
