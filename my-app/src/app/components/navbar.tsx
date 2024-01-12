// components/Navbar.tsx
import Link from "next/link";
import "../styles/Navbar.scss";
import { ArrowUpRight } from "react-bootstrap-icons";

export default function Navbar() {
  return (
    <nav className="navbar">
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
