"use client";
import Link from "next/link";
import React from "react";
import { Zustand } from "../Zustand/Zustand";

export default function Footer() {
  //getting states from Zustand
  const { mouseOverEvent, mouseOutEvent } = Zustand();

  //get current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footerLeft">
        <img
          src="/logos/Logo Full.svg"
          alt="Lost Boy Logo"
          className="footerLogo"
        />
        <div className="footerGroup">
          <div className="smallTitle">Contact</div>
          <div className="footerList">
            <div>Luca Antoniazzi</div>
            <a
              href="mailto:luca@lostboy.tv"
              onMouseOut={mouseOutEvent}
              onMouseOver={mouseOverEvent}
            >
              luca@lostboy.tv
            </a>
            <a
              href="tel:00447847899041"
              onMouseOut={mouseOutEvent}
              onMouseOver={mouseOverEvent}
            >
              +44 7847 899041
            </a>
          </div>
        </div>
        <div className="footerGroup sitemap">
          <div className="smallTitle">Sitemap</div>
          <div className="footerList">
            <Link
              href="/"
              onMouseOut={mouseOutEvent}
              onMouseOver={mouseOverEvent}
            >
              Work
            </Link>
            <Link
              href="/about"
              onMouseOut={mouseOutEvent}
              onMouseOver={mouseOverEvent}
            >
              About
            </Link>
            <Link
              href="/contact"
              onMouseOut={mouseOutEvent}
              onMouseOver={mouseOverEvent}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="footerGroup footerAction">
          <div className="footerPrompt">
            Get in touch with a general direction, specific stylistic references
            or a rough cut to compose to.
          </div>
          <a
            href="mailto:luca@lostboy.tv"
            className="button"
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseOverEvent}
          >
            Let&apos;s work
          </a>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerImprint">
          {/* <div className="prufer">
            Website by{" "}
            <a
              href="https://prufer.co"
              onMouseOut={mouseOutEvent}
              onMouseOver={mouseOverEvent}
            >
              prufer.co
            </a>
          </div> */}
          <div>
            © {currentYear} Lost Boy <br className="responsiveBr" />
            Collective Ltd.
          </div>
        </div>
      </div>
    </div>
  );
}
