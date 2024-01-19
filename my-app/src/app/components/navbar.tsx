// components/Navbar.tsx
"use client";
import Link from "next/link";
import "../styles/Navbar.scss";
import { ArrowUpRight, List } from "react-bootstrap-icons";
import { usePathname } from "next/navigation";
import projects from "../data/projects.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// Function to determine if a color is light or dark
function isLight(color) {
  const [r, g, b] = color.match(/\w\w/g).map((c) => parseInt(c, 16));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 128;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  // Find the project that matches the current pathname
  const currentProject = projects.find((project) =>
    pathname.includes(project.id)
  );
  // Get the color value of the current project, or default to a fallback color
  const backgroundColor = currentProject ? currentProject.color : "black";
  const color = isLight(backgroundColor) ? "black" : "white";

  //icon show
  const [showIcon, setShowIcon] = useState(false); // State to control the visibility of the icon
  const [showSidebar, setShowSidebar] = useState(false); // State to control the visibility of the sidebar

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      setShowIcon(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else router.push("/");
  };

  return (
    <nav className="navbar" style={{ backgroundColor, color }}>
      <div className="navbar-content">
        {showIcon ? (
          <div className="navbar-logo-wrapper" onClick={onLogoClick}>
            <img
              className="navbar-logo"
              src="https://i.ibb.co/xDGBhH7/WHITELOGO-jack.png"
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
                ABOUT <ArrowUpRight />
              </h1>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h1>
                LET&apos;S WORK TOGETHER <ArrowUpRight />
              </h1>
            </Link>
          </li>
        </ul>
        <div className="sidebar-wrapper">
          <List width={40} height={40} />
        </div>
      </div>
    </nav>
  );
}
