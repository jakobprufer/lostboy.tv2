"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zustand } from "../Zustand/Zustand";

// interface BurgerModalProps {
//   hamburgerOpen: boolean;
//   setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

export default function BurgerModal() {
  //pathname
  const pathname = usePathname();

  //getting states from Zustand
  const { mouseOverEvent, mouseOutEvent, hamburgerOpen, setHamburgerOpen } =
    Zustand();

  return (
    <div className={`burgerModal ${hamburgerOpen ? null : "hidden"}`}>
      <div className="burgerNav">
        <Link
          className={`navItem stardom ${pathname === "/" ? "active" : null}`}
          onMouseOut={mouseOutEvent}
          onMouseOver={mouseOverEvent}
          href="/"
          onClick={() => setHamburgerOpen(false)}
        >
          work
        </Link>
        <Link
          href="/about"
          className={`navItem stardom ${
            pathname === "/about" ? "active" : null
          }`}
          onMouseOut={mouseOutEvent}
          onMouseOver={mouseOverEvent}
          onClick={() => setHamburgerOpen(false)}
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
          onClick={() => setHamburgerOpen(false)}
        >
          contact
        </Link>
      </div>
    </div>
  );
}
