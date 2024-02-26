"use client";
import { useState, Fragment } from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "../types/Project";
import { Zustand } from "../Zustand/Zustand";

type VideoModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedVideo: string;
  projects: Project[];
  modalOpen: boolean;
};

//framer sliding animation
const transition = { duration: 0.6, ease: [0.43, 0.12, 0.23, 0.96] };

let variants = {
  enter: ({ direction, width }: { direction: number; width: number }) => ({
    x: direction * width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }: { direction: number; width: number }) => ({
    x: direction * -width,
  }),
};

export default function VideoModal({
  setModalOpen,
  selectedVideo,
  projects,
  modalOpen,
}: VideoModalProps) {
  //getting states from Zustand
  const { mouseOverEvent, mouseOutEvent } = Zustand();

  //image rotation button functionality
  const [current, setCurrent] = useState(
    projects.findIndex((video) => video.slug === selectedVideo)
  );
  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // keep track of current and previous current image in a safe way and derive direction
  const [tuple, setTuple] = useState([null, current]);
  if (tuple[1] !== current) {
    setTuple([tuple[1], current]);
  }
  const previous = tuple[0];
  let direction =
    current == length - 1 && previous == 0
      ? -1
      : previous == length - 1 && current == 0
      ? 1
      : previous != null && current > previous
      ? 1
      : -1;

  // adapt animations to slide container width
  const [ref, { width }] = useMeasure();

  return (
    <div className="modalOuter">
      <motion.div
        className="modal"
        onClick={() => setModalOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="slideOuter">
          <div className="slideNavMobileCont">
            <div
              className="slideNavMobile"
              onClick={(e) => {
                prevSlide();
                e.stopPropagation();
              }}
            >
              <RiArrowLeftLine className="slideIcon" />
            </div>
            <div
              className="slideNavMobile"
              onClick={(e) => {
                nextSlide();
                e.stopPropagation();
              }}
            >
              <RiArrowRightLine className="slideIcon" />
            </div>
          </div>
          <div className="slide">
            <div
              className="slideNav"
              onClick={(e) => {
                prevSlide();
                e.stopPropagation();
              }}
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
            >
              <RiArrowLeftLine className="slideIcon" />
            </div>
            <div
              className="slideContentOuter"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className={`slideContent c169`}
                ref={ref}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <AnimatePresence custom={{ direction, width }}>
                  <motion.div
                    key={current}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    transition={transition}
                    exit="exit"
                    custom={{ direction, width }}
                    className="imgSlide"
                  >
                    <video
                      className="imgSlide"
                      width="1920"
                      height="1080"
                      preload="auto"
                      controls
                      poster={`${projects[current].thumbnail}`}
                    >
                      <source
                        src={`${projects[current].video}`}
                        type="video/mp4"
                      />
                      <source
                        src={`${projects[current].video}`}
                        type="video/mov"
                      />
                      <source
                        src={`${projects[current].video}`}
                        type="video/ogg"
                      />
                    </video>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
            <div
              className="slideNav"
              onClick={(e) => {
                nextSlide();
                e.stopPropagation();
              }}
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
            >
              <RiArrowRightLine className="slideIcon" />
            </div>
          </div>
          <div className="captionAreaOuter">
            <motion.div className="captionArea">
              <div className="mlxs">
                <span className="smallH stardom prs">
                  {projects[current].client}
                </span>
                {""}
                {projects[current].title}
                {projects[current].agency && ` - ${projects[current].agency}`}
              </div>
              {projects[current].available ? (
                <a
                  className="quoteButton button"
                  href={`mailto:luca@lostboy.tv?subject=Enquiry about ${projects[current].title}`}
                  onMouseOver={mouseOverEvent}
                  onMouseOut={mouseOutEvent}
                >
                  Get a quote
                </a>
              ) : null}
              {/* {projects[current].studyURL ? (
                <Link className="quoteButton" to={projects[current].studyURL}>
                  Read case study
                </Link>
              ) : null} */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
