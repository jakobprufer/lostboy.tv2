"use client";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Zustand } from "../Zustand/Zustand";

export default function Burger() {
  //getting states from Zustand
  const { hamburgerOpen, setHamburgerOpen } = Zustand();

  return (
    <div className="burgerCont">
      <div className="hamburger">
        <Hamburger toggled={hamburgerOpen} toggle={setHamburgerOpen} />
      </div>
    </div>
  );
}
