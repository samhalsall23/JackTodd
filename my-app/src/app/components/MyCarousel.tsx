"use client";

import React, { useEffect, useRef, useState } from "react";
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
      breakpoint: { max: 4000, min: 1800 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 670 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 670, min: 0 },
      items: 1,
    },
  };
  const sortedProjects = [...projects].sort((a, b) => {
    const aIndex = projects.indexOf(a);
    const bIndex = projects.indexOf(b);

    if (aIndex < indexId && bIndex >= indexId) {
      return 1;
    }
    if (aIndex >= indexId && bIndex < indexId) {
      return -1;
    }
    return aIndex - bIndex;
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PrevArrow onClick={() => slider?.current?.previous(1)} />
      <Carousel
        responsive={responsive}
        arrows={false}
        ref={slider}
        infinite
        partialVisible={false}
      >
        {sortedProjects.map((project, index) => {
          return (
            <ProjectTile
              key={index}
              imageSquare={project.imageSquare}
              title={project.title}
              id={project.id}
              isCarousel={true}
            />
          );
        })}
      </Carousel>
      <NextArrow onClick={() => slider?.current?.next(1)} />
    </div>
  );
}
