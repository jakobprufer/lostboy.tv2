"use client";
import { useState } from "react";
import { Project } from "../types/Project";
import { Zustand } from "../Zustand/Zustand";
import { AnimatePresence, motion } from "framer-motion";

// Define a type for the props expected by WorkGrid
type WorkGridProps = {
  projects: Project[];
};

// Use the WorkGridProps type to type the function component's props
export default function WorkGrid({ projects }: WorkGridProps) {
  //getting states from Zustand
  const { atHome, mouseOverEvent, mouseOutEvent } = Zustand();

  const [selectedVideo, setSelectedVideo] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  //  video modal
  const openModal = (index: number) => {
    setSelectedVideo(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
              onClick={() => openModal(index)}
            >
              <div
                className="img-wrapper"
                onMouseEnter={mouseOverEvent}
                onMouseLeave={mouseOutEvent}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="poster-img"
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
        {/* {selectedVideo && (
            <div className="modalOuter">
              <motion.div
                className="modal"
                onClick={closeModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ImageSlide
                  images={Slide}
                  ratio="c169"
                  mouseOutEvent={mouseOutEvent}
                  mouseOverEvent={mouseOverEvent}
                  selectedVideo={selectedVideo}
                  closeModal={closeModal}
                />
              </motion.div>
            </div>
          )} */}
      </motion.div>
    </AnimatePresence>
  );
}
