"use client";
import { useState, useEffect } from "react";
import { Project } from "../types/Project";
import { Zustand } from "../Zustand/Zustand";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import VideoModal from "./VideoModal";
import { getImageDimensions } from "@sanity/asset-utils";

// Define a type for the props expected by WorkGrid
type WorkGridProps = {
  projects: Project[];
};

// Use the WorkGridProps type to type the function component's props
export default function WorkGrid({ projects }: WorkGridProps) {
  //getting states from Zustand
  const { atHome, mouseOverEvent, mouseOutEvent, modalOpen, setModalOpen } =
    Zustand();

  const [selectedVideo, setSelectedVideo] = useState("");
  // const [modalOpen, setModalOpen] = useState(false);

  // Reset selectedVideo when component unmounts
  useEffect(() => {
    return () => {
      setModalOpen(false);
    };
  }, []);

  //  video modal
  const openModal = (slug: string) => {
    setSelectedVideo(slug);
    setModalOpen(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`workGrid ${atHome ? "atHome" : null}`}
        // initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => openModal(project.slug)}
            >
              <div
                className="img-wrapper"
                onMouseEnter={mouseOverEvent}
                onMouseLeave={mouseOutEvent}
              >
                <Image
                  src={project.thumbnail}
                  className="poster-img"
                  alt={`Preview image for the project ${project.client} - ${project.title}`}
                  width={1280}
                  height={720}
                />
              </div>
              <div className="workCardCaption">
                {project.brandIcon ? (
                  <Image
                    src={project.brandIcon}
                    className="workCardLogo"
                    alt={`Logo of ${project.client}`}
                    width={getImageDimensions(project.brandIcon).width}
                    height={getImageDimensions(project.brandIcon).height}
                  />
                ) : null}

                <div className="workCardTitle">
                  <div className="smallH stardom">{project.client}</div>
                  <div className="gridTitle">
                    {project.title}
                    {project.agency && ` (${project.agency})`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {modalOpen && (
            <VideoModal
              setModalOpen={setModalOpen}
              selectedVideo={selectedVideo}
              projects={projects}
              modalOpen={modalOpen}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
