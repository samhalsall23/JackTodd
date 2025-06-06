"use client";
import React, { useMemo } from "react";
import Image from "next/image";

import projects from "@/app/data/projects.json";
import MyCarousel from "@/app/components/MyCarousel/MyCarousel";
import "./projects-styles.scss";

function parseTextWithFormatting(text: string): React.ReactNode {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/);
    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        } else if (part.startsWith("*") && part.endsWith("*")) {
            return <em key={index}>{part.slice(1, -1)}</em>;
        } else {
            return part;
        }
    });
}

export default function ProjectsFolioPage({ id }: { id: string }) {
    // MEMOS ---
    const project = useMemo(
        () => projects.find((project) => project.id === id),
        [projects, id]
    );

    return (
        <div className="project-body-container">
            <div>
                {project && (
                    <>
                        <h1 className="project-heading">{project.title}</h1>
                        <div>
                            {typeof project.description === "string" &&
                                project.description
                                    .split("\n")
                                    .map((line, index) => (
                                        <React.Fragment key={index}>
                                            <p className="project-text">
                                                {parseTextWithFormatting(line)}
                                            </p>
                                        </React.Fragment>
                                    ))}
                        </div>
                    </>
                )}
            </div>
            <div className="hero-image">
                {project && (
                    <>
                        <Image
                            className="hero-project-image hero-desktop"
                            src={project.imageWide}
                            alt="Hero Image"
                            height={2616}
                            width={8000}
                            quality={75}
                            priority
                            sizes="100vw"
                            placeholder="blur"
                            blurDataURL={project.blur}
                        />
                        <Image
                            className="hero-project-image hero-mobile"
                            src={project.imageMobile}
                            alt="Hero Image"
                            height={4879}
                            width={2917}
                            quality={75}
                            priority
                            sizes="100vw"
                        />
                    </>
                )}
            </div>
            <div className="project-carousel-container">
                <h1 className="view-other-projects-heading">
                    View My Other Projects
                </h1>
                <MyCarousel indexId={project ? project.index : 0}></MyCarousel>
            </div>
        </div>
    );
}
