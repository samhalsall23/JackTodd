// components/Navbar.tsx
"use client";
import Link from "next/link";
import "../styles/Navbar.scss";
import { ArrowUpRight, List, X, XLg } from "react-bootstrap-icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

// import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// Function to determine if a color is light or dark
// function isLight(color) {
//   const [r, g, b] = color.match(/\w\w/g).map((c) => parseInt(c, 16));
//   return 0.2126 * r + 0.7152 * g + 0.0722 * b > 128;
// }

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const mediumBreakpoint = useMediaQuery("(min-width: 992px)");

  // Find the project that matches the current pathname
  // const currentProject = projects.find((project) =>
  //   pathname.includes(project.id)
  // );
  // Get the color value of the current project, or default to a fallback color
  // const backgroundColor = currentProject ? currentProject.color : "black";
  // const color = isLight(backgroundColor) ? "black" : "white";

  //icon show
  const [showIcon, setShowIcon] = useState(pathname !== "/"); // Set initial state based on pathname

  useEffect(() => {
    const handleScroll = () => {
      const show =
        window.scrollY > 0 ||
        document.documentElement.classList.contains("no-scroll") ||
        pathname !== "/"; // Add this condition
      setShowIcon(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setShowIcon(pathname !== "/");
  }, [pathname]);

  const onLogoClick = () => {
    setsidebarOpen(false);
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else router.push("/");
  };
  // NEW SIDEBAR
  const [sidebarOpen, setsidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar" style={{ zIndex: 10 }}>
        <div className="navbar-content">
          {showIcon ? (
            <div className="navbar-logo-wrapper" onClick={onLogoClick}>
              <img
                className="navbar-logo"
                src="/assets/logo/WHITELOGO-jack.png"
                alt="logo"
              />
            </div>
          ) : (
            <div />
          )}{" "}
          <ul className="navbar-list-wrapper">
            <li>
              <Link href="/about">
                <h1>
                  <span>
                    ABOUT <ArrowUpRight />
                  </span>
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <h1>
                  <span>
                    LET&apos;S WORK TOGETHER <ArrowUpRight />
                  </span>
                </h1>
              </Link>
            </li>
          </ul>
          <div className="sidebar-wrapper">
            <XLg
              width={30}
              height={30}
              onClick={() => setsidebarOpen(false)}
              style={{
                position: "absolute",
                bottom: "-15",
                right: "6",
                visibility: sidebarOpen ? "visible" : "hidden",
                opacity: sidebarOpen ? 1 : 0,
                transition: "opacity 0.5s linear",
              }}
            />
            <List
              width={40}
              height={40}
              onClick={() => setsidebarOpen(true)}
              style={{
                position: "absolute",
                bottom: "-21",
                right: "0",
                visibility: sidebarOpen ? "hidden" : "visible",
                opacity: sidebarOpen ? 0 : 1,
                transition: "opacity 0.5s linear",
              }}
            />
          </div>
        </div>
      </nav>
      {/* {isDesktop && ( */}
      <div
        className={`mobile-sidebar ${
          sidebarOpen && !mediumBreakpoint ? "open" : ""
        }`}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "fixed", // Change from 'absolute' to 'fixed'
          top: 90, // Change from '100%' to 0
          left: 0,
          width: "100%",
          zIndex: sidebarOpen && !mediumBreakpoint ? 2 : -1, // Increase the z-index
          height: "100vh",
        }}
      >
        <div className="sidebar-content-container">
          <Link href={"/"}>
            <h1
              className="sidebar-content-item"
              onClick={() => setsidebarOpen(false)}
            >
              HOME
            </h1>
          </Link>
          <Link href={"/about"}>
            <h1
              className="sidebar-content-item"
              onClick={() => setsidebarOpen(false)}
            >
              ABOUT
            </h1>
          </Link>
          <Link href={"/contact"}>
            <h1
              className="sidebar-content-item"
              onClick={() => setsidebarOpen(false)}
            >
              CONTACT ME
            </h1>
          </Link>
        </div>
      </div>

      {/* )} */}
    </>
  );
}
