"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import projects from "../data/projects.json";
import ProjectTile from "../components/ProjectTile";

import "../styles/Slider.scss";

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <h1>Hi</h1>
      <div
        style={{
          width: "50%",
          marginRight: "auto",
          marginLeft: "auto",
          height: "100vh",
        }}
      >
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} style={{ height: "300px" }}>
              {/* <ProjectTile
                imageSquare={project.imageSquare}
                title={project.title}
                id={project.id}
              /> */}
              {/* <h2 style={{ display: "flex" }}>test</h2> */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSNd2Kw-8bYucGejJ_t5CmYGwePCZF9LVw3Gm6OMAdQ&s"
                alt="test"
              ></img>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
