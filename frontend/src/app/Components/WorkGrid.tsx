"use client";
import { useState } from "react";
import { Project } from "../types/Project";
import { Zustand } from "../Zustand/Zustand";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import VideoModal from "./VideoModal";

// Define a type for the props expected by WorkGrid
type WorkGridProps = {
  projects: Project[];
};

// Use the WorkGridProps type to type the function component's props
export default function WorkGrid({ projects }: WorkGridProps) {
  //getting states from Zustand
  const { atHome, mouseOverEvent, mouseOutEvent } = Zustand();

  const [selectedVideo, setSelectedVideo] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  //  video modal
  const openModal = (slug: string) => {
    setSelectedVideo(slug);
    setModalOpen(true);
  };

  console.log(projects);

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
              <div className="smallH mts stardom">{project.client}</div>
              <div className="xsmallText">
                {project.title}
                {project.agency && ` (${project.agency})`}
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <VideoModal
            setModalOpen={setModalOpen}
            selectedVideo={selectedVideo}
            projects={projects}
            modalOpen={modalOpen}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}