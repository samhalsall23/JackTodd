// components/Navbar.tsx
"use client";
import Link from "next/link";
import "../styles/Navbar.scss";
import { ArrowUpRight } from "react-bootstrap-icons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isProjectsPage = pathname.includes("/projects");
  return (
    <nav className={`navbar ${isProjectsPage ? "transparent" : ""}`}>
      <div className="navbar-content">
        <img
          className="navbar-logo"
          src="https://i.ibb.co/xDGBhH7/WHITELOGO-jack.png"
          alt="logo"
        />{" "}
        <ul>
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
      </div>
    </nav>
  );
}
