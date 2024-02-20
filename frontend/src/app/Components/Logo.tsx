"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Zustand } from "../Zustand/Zustand";
import { usePathname } from "next/navigation";

export default function Logo() {
  //getting states from Zustand
  const {
    mouseOverEvent,
    mouseOutEvent,
    atHome,
    setAtHome,
    setScrollY,
    scrollY,
    modalOpen,
    setModalOpen,
  } = Zustand();

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
      setModalOpen(false);
    }, 50);
  };

  // get scrollY
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (modalOpen == false) {
      if (pathname == "/" && scrollY < 100) {
        setAtHome(true);
      } else {
        setAtHome(false);
      }
    } else {
      setAtHome(false);
    }
  }, [scrollY, modalOpen]);

  return (
    <div>
      <Link
        className="logoClickableArea"
        href="/"
        onClick={logoClick}
        onMouseOut={mouseOutEvent}
        onMouseOver={mouseOverEvent}
      ></Link>
      <div
        className={`logo ${atHome ? "atHome" : null}`}
        onMouseOut={mouseOutEvent}
        onMouseOver={mouseOverEvent}
        // style={{ transform: `scale(${Math.max(1, 5 - scrollY / 50)})` }}
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
    </div>
  );
}
