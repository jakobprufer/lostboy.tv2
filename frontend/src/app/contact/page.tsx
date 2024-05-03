"use client";
import React from "react";
import { Zustand } from "../Zustand/Zustand";
import { RiFileCopyLine } from "react-icons/ri";
import Script from "next/script";

export default function Contact() {
  //getting states from Zustand
  const { mouseOverEvent, mouseOutEvent } = Zustand();

  return (
    <div className="pageContent medText">
      <Script
        id="HotJar"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3906358,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
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
            <RiFileCopyLine className="riIconInline" />
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
            <RiFileCopyLine className="riIconInline" />
          </div>
        </div>
      </div>
    </div>
  );
}
