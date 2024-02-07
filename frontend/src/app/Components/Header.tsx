"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { Zustand } from "../Zustand/Zustand";
import Link from "next/link";
import NavDesktop from "./NavDesktop";
import { usePathname } from "next/navigation";
import Burger from "./Burger";

export default function Header() {
  //getting states from Zustand
  const { atHome } = Zustand();

  return (
    <div className={`header ${atHome ? "atHome" : null}`}>
      <NavDesktop />
      <Burger />
    </div>
  );
}
