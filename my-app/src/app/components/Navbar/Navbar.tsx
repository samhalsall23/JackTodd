"use client";

import React from "react";
import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import useMediaQuery from "@mui/material/useMediaQuery";

import { ArrowUpRight, List, XLg } from "react-bootstrap-icons";

import "./navbar-styles.scss";

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
        window.location.pathname !== "/" ||
        window.scrollY > 0 ||
        document.documentElement.classList.contains("no-scroll");
      setShowIcon(show);
    };

    handleScroll();

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("no-scroll-sidebar");
    } else {
      document.body.classList.remove("no-scroll-sidebar");
    }
  }, [sidebarOpen]);

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
                src="/assets/logo/todd.svg"
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
    </>
  );
}
