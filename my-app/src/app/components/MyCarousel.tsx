"use client";

import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import projects from "../data/projects.json";
import ProjectTile from "./ProjectTile";

import "../styles/Slider.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// Next Arrow
const NextArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="arrow-button-left" onClick={onClick}>
      <ArrowForwardIosIcon />
    </button>
  );
};

// Previous Arrow
const PrevArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="arrow-button-right" onClick={onClick}>
      <ArrowBackIosIcon />
    </button>
  );
};

export default function MyCarousel({ indexId = 0 }: { indexId?: number }) {
  const slider = useRef<Carousel>(null);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    slider?.current?.goToSlide(indexId, true);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PrevArrow onClick={() => slider?.current?.previous(1)} />
      <Carousel responsive={responsive} arrows={false} ref={slider}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              style={{
                height: "300px",
                width: "auto",
                border: "solid 2px black",
              }}
            >
              <ProjectTile
                imageSquare={project.imageSquare}
                title={project.title}
                id={project.id}
              />
            </div>
          );
        })}
      </Carousel>
      <NextArrow onClick={() => slider?.current?.next(1)} />
    </div>
  );
}
