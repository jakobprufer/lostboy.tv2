"use client";
import React, { MouseEventHandler, useEffect } from "react";
import { Zustand } from "../Zustand/Zustand";
import Link from "next/link";
import NavDesktop from "./NavDesktop";
import { usePathname } from "next/navigation";

export default function Header() {
  //getting states from Zustand
  const { mouseOverEvent, mouseOutEvent, atHome, setAtHome } = Zustand();

  //manage atHome with Pathname
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      setAtHome(true);
    } else {
      setAtHome(false);
    }
  }, [pathname]);

  //set atHome true on every click of logo - 50ms timeout to give time to scroll back up
  const logoClick = () => {
    setTimeout(() => {
      setAtHome(true);
    }, 50);
  };

  return (
    <div className={`header ${atHome ? "atHome" : null}`}>
      <Link
        className="logoClickableArea"
        href="/"
        onClick={logoClick}
        onMouseOut={mouseOutEvent}
        onMouseOver={mouseOverEvent}
      ></Link>
      <div
        className="logo"
        onMouseOut={mouseOutEvent}
        onMouseOver={mouseOverEvent}
      >
        <img
          src="logos/Logo1.svg"
          draggable="false"
          className={`logo1 ${atHome ? "atHome" : null}`}
        />
        <img
          src="logos/Logo2.svg"
          draggable="false"
          className={`logo2 ${atHome ? "atHome" : null}`}
        />
      </div>
      <NavDesktop />
    </div>
  );
}
