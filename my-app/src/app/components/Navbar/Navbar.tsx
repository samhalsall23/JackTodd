// components/Navbar.tsx
"use client";
import Link from "next/link";
import "./Navbar.scss";
import { ArrowUpRight, List, XLg } from "react-bootstrap-icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar() {
  // HOOKS ---
  const pathname = usePathname();
  const router = useRouter();
  const mediumBreakpoint = useMediaQuery("(min-width: 992px)");

  // STATE ---
  const [showIcon, setShowIcon] = useState(pathname !== "/"); // Set initial state based on pathname
  const [sidebarOpen, setsidebarOpen] = useState(false);

  // USE EFFECTS ---
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

  useEffect(() => {
    setShowIcon(pathname !== "/");
  }, [pathname]);

  // FUNCTIONS ---
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

  return (
    <>
      <nav className="navbar">
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
          )}
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
              className={
                "sidebar-close-btn" +
                (sidebarOpen ? " sidebar-close-btn-open" : "")
              }
            />
            <List
              width={40}
              height={40}
              onClick={() => setsidebarOpen(true)}
              className={
                "sidebar-list-btn" +
                (!sidebarOpen ? " sidebar-list-btn-open" : "")
              }
            />
          </div>
        </div>
      </nav>
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
