import Image from "next/image";
import Link from "next/link";
import React from "react";
import CaseCard from "../Components/CaseCard";
// import { getCaseStudies } from "../SanityUtils";
import { caseQuery } from "../Sanity/SanityQuery";
import { CaseStudyType } from "../types/CaseStudy";
import Script from "next/script";
import { sanityFetch } from "@/app/Sanity/SanityClient";

// export const revalidate = 10;

export default async function About() {
  // const caseStudies = await getCaseStudies();

  //get data
  const caseStudies: CaseStudyType[] = await sanityFetch({
    query: caseQuery,
    // You can add multiple tags that matches with your document _id: ['post', 'about', ...]
    tags: ["caseStudy"],
  });

  return (
    <div className="pageContent about">
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
      <div className="aboutColumn">
        <section>
          <h1 className="stardom">about</h1>
          <div className="medText">
            <p>
              <span className="stardom" style={{ fontSize: "1.1em" }}>
                lostboy
              </span>{" "}
              is a brand new full service creative music supervision house which
              places an understanding of brand-identity at the heart of any
              composition process.
            </p>
            <p>
              Founded by You Are Here Executive Producer, Luca Antoniazzi - Our
              composition process is informed by over 10 years experience
              working closely with advertising creatives in creative search
              roles. Over this time we have learned the language with which
              brands communicate and find ourselves uniquely placed to translate
              that language into the creation of arresting sonic worlds.
            </p>
            <p>
              Having our Executive Producer as our Lead Composer gives us the
              unique ability to work directly into our clients, cutting out the
              second hand whispers of the chain of command.
            </p>
            <p>
              Put simply; you speak directly to us, we make what you want. We
              are the creative music supervision house you wish you knew about…
            </p>
          </div>
        </section>
        <section>
          <h1 className="stardom">what we offer</h1>
          <div className="medText">
            <h3>Original Composition</h3>
            <p>
              We operate on a composition-first mindset, if you want to give
              your brand full ownership of the track we will work to a simple
              brief and deliver precisely what you want, down to a needle-point
              of exactitude.
            </p>
            <h3>Music Supervision</h3>
            <p>
              Musicology, creative music search, legals, quotes, licensing and
              step by step guidance throughout the process.
            </p>
            <h3>Sound Design & Mixing</h3>
            <p>
              We have in-house BAFTA nominated music editing capabilities as
              well as flawless mixing and sound design from multi award-winning
              engineers.
            </p>
            <h3>Voice Over</h3>
            <p>
              We believe the key to creating realistic, beautiful demos, is an
              ability to make them seem absolutely convincing. With access to a
              huge pool of voice acting talent we are able to paint a more
              realistic vision at demo stage.
            </p>
          </div>
        </section>
      </div>
      <div className="caseColumn">
        <h1 className="stardom">how we work</h1>
        <div className="caseCardCont">
          {caseStudies
            .filter((caseStudy) => caseStudy.showAbout)
            .map((caseStudy) => (
              <CaseCard key={caseStudy.title} caseStudy={caseStudy} />
            ))}
        </div>
      </div>
    </div>
  );
}
