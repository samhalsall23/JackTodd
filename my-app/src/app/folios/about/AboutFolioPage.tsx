import MyCarousel from "../../components/MyCarousel";
import about from "@/app/data/about.json";

import "./about-styles.scss";

export default function AboutFolioPage() {
  return (
    <div className="about-container">
      <h1 className="about-main-content-header">About Me</h1>
      <p>{about.summary}</p>
      <h1 className="about-view-other-header">View My Projects</h1>
      <MyCarousel />
      <div className="bottom-page-margin" />
    </div>
  );
}
