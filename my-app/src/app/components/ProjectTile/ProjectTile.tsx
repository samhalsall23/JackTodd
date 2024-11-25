"use client";

import React, { useEffect, useRef, useState, MutableRefObject } from "react";
import Image from "next/image";
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

  const [loadImage, setLoadImage] = useState(true);
  const tileRef = useRef(null);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className={"project-tile"}
        style={{
          zIndex: "1",
        }}
        onClick={onProjectTileClick}
      >
        <div
          style={
            isCarousel
              ? { width: "90%", height: "90%", position: "relative" }
              : { width: "100%", height: "100%", position: "relative" }
          }
        >
          {loadImage && (
            <Image
              className={isCarousel ? "project-tile-carousel" : ""}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1",
              }}
              src={imageSquare}
              alt="Hero Image"
              height={4167}
              width={4167}
              loading={"eager"}
              quality={75}
              sizes={
                isCarousel
                  ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1920px) 33vw, 25vw"
                  : "(max-width: 480px) 100vw, (max-width: 992px) 50vw, 33vw"
              }
            />
          )}
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
    </div>
  );
}
