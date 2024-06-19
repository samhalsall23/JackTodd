"use client";

import React, { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";
import "./project-tile-styles.scss";

interface ProjectTileProps {
  imageSquare: string;
  title: string;
  id: string;
  isCarousel?: boolean;
}

export default function ProjectTile({
  imageSquare,
  title,
  id,
  isCarousel = false,
}: ProjectTileProps) {
  const router = useRouter();
  const onProjectTileClick = () => {
    router.push(`/projects/${id}`);
  };

  // BELOW TEST
  const [loadImage, setLoadImage] = useState(false);
  const tileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setLoadImage(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px", // Load the image when it comes within 100px of the viewport
      }
    );

    if (tileRef.current) {
      observer.observe(tileRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        ref={tileRef}
        className={
          "project-tile" + (isCarousel ? " project-tile-carousel" : "")
        }
        style={{
          backgroundImage: `url(${imageSquare})`,
        }}
        onClick={onProjectTileClick}
      >
        <div
          className={
            "project-tile-content " +
            (isCarousel ? "project-tile-content-carousel" : "")
          }
        >
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
