"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Zustand } from "../Zustand/Zustand";
import { CaseStudyType } from "../types/CaseStudy";

type CaseCardProps = {
  caseStudy: CaseStudyType;
};

export default function CaseCard({ caseStudy }: CaseCardProps) {
  //getting states from Zustand
  const { mouseOverEvent, mouseOutEvent } = Zustand();

  return (
    <Link
      className="caseCard"
      href={`/${caseStudy.slug}`}
      onMouseOut={mouseOutEvent}
      onMouseOver={mouseOverEvent}
    >
      <div className="cardText">
        <h2 className="smallH stardom">{caseStudy.client}</h2>
        <div>{caseStudy.title}</div>
        <div>{caseStudy.agency}</div>
      </div>
      <div className="cardImgCont">
        <Image
          src={caseStudy.thumbnail}
          className="cardImg"
          width={1280}
          height={720}
          alt={`Preview image for the project ${caseStudy.client} - ${caseStudy.title}`}
        />
      </div>
    </Link>
  );
}
