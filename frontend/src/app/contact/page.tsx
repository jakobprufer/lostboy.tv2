"use client";
import React from "react";
import { Zustand } from "../Zustand/Zustand";
import { RiFileCopyLine } from "react-icons/ri";

export default function Contact() {
  //getting states from Zustand
  const { mouseOverEvent, mouseOutEvent } = Zustand();

  return (
    <div className="pageContent medText">
      <h1 className="stardom">contact</h1>
      <div className="contactDetails">
        <div>Luca Antoniazzi</div>
        <div>
          <a
            href="mailto:luca@lostboy.tv"
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseOverEvent}
          >
            luca@lostboy.tv
          </a>
          <div
            onClick={() => navigator.clipboard.writeText("luca@lostboy.tv")}
            className="contactButton"
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseOverEvent}
          >
            <RiFileCopyLine />
          </div>
        </div>
        <div>
          <a
            href="tel:00447847899041"
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseOverEvent}
          >
            +44 7847 899041
          </a>
          <div
            onClick={() => navigator.clipboard.writeText("+447847899041")}
            className="contactButton"
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseOverEvent}
          >
            <RiFileCopyLine /> Copy
          </div>
        </div>
      </div>
    </div>
  );
}
