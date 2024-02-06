import React from "react";
import { Zustand } from "../Zustand/Zustand";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavDesktop() {
  //getting states from Zustand
  const { mouseOverEvent, mouseOutEvent } = Zustand();

  //pathname
  const pathname = usePathname();

  return (
    <nav>
      <Link
        className={`navItem stardom ${pathname === "/" ? "active" : null}`}
        onMouseOut={mouseOutEvent}
        onMouseOver={mouseOverEvent}
        href="/"
      >
        work
      </Link>
      <Link
        href="/about"
        className={`navItem stardom ${pathname === "/about" ? "active" : null}`}
        onMouseOut={mouseOutEvent}
        onMouseOver={mouseOverEvent}
      >
        about
      </Link>
      <Link
        href="/contact"
        className={`navItem stardom ${
          pathname === "/contact" ? "active" : null
        }`}
        onMouseOut={mouseOutEvent}
        onMouseOver={mouseOverEvent}
      >
        contact
      </Link>
    </nav>
  );
}
