// components/Navbar.tsx
"use client";
import Link from "next/link";
import "../styles/Navbar.scss";
import { ArrowUpRight, List } from "react-bootstrap-icons";
import { usePathname } from "next/navigation";
import projects from "../data/projects.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      const show =
        window.scrollY > 0 ||
        document.documentElement.classList.contains("no-scroll");
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

  // SIDEBAR
  const [sidebarOpen, setsidebarOpen] = React.useState({
    right: false,
  });
  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#2B2B2B",
            color: "white",
          },
        },
      },
    },
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setsidebarOpen({ ...sidebarOpen, [anchor]: open });
    };

  return (
    <>
      <nav className="navbar" style={{ backgroundColor, color }}>
        <div className="navbar-content">
          {showIcon ? (
            <div className="navbar-logo-wrapper" onClick={onLogoClick}>
              <img
                className="navbar-logo"
                src="assets\logo\WHITELOGO-jack.png"
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
            <List
              width={40}
              height={40}
              onClick={toggleDrawer("right", true)}
            />
          </div>
        </div>
        <ThemeProvider theme={theme}>
          <div data-testid="outer-div">
            <React.Fragment key={"right"}>
              {/* <Button onClick={toggleDrawer("right", true)}>Open Right</Button> */}
              <Sidebar
                anchor="right"
                open={sidebarOpen["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
              />
            </React.Fragment>
          </div>
        </ThemeProvider>{" "}
      </nav>
    </>
  );
}
