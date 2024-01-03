// components/Navbar.tsx
import Link from "next/link";
import "../styles/Navbar.scss";
import { ArrowUpRight } from "react-bootstrap-icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/about">
            <h1>
              ABOUT <ArrowUpRight />
            </h1>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <h1>
              PROJECTS <ArrowUpRight />
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
    </nav>
  );
}
