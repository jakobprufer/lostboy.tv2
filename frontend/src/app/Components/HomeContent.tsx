"use client";
import React from "react";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import { Zustand } from "../Zustand/Zustand";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut", // Use the easeOut function from Framer Motion's library or define your custom easing
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.01, // This could be adjusted for a quicker exit animation
      staggerDirection: -1, // Animate out in reverse order
      ease: "easeIn",
    },
  },
};

const childVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 0.2,
      ease: "easeOut", // Specify the easing function directly if not importing from Framer Motion
    },
  },
  exit: {
    width: "0%",
    transition: {
      duration: 0.2,
      ease: "easeIn", // Reverse the easing for the exit animation
    },
  },
};

export default function HomeContent() {
  //getting states from Zustand
  const { scrollY, atHome } = Zustand();

  return (
    <div className="homeContentFixer">
      <div className="missionCont">
        <AnimatePresence>
          {atHome && (
            <motion.div
              className="mission tagline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={childVariants}
                className="missionChild"
                style={{ marginLeft: "2em" }}
              >
                We translate brands into
              </motion.div>
              <motion.div variants={childVariants} className="missionChild">
                bespoke sonic worlds through
              </motion.div>
              <motion.div variants={childVariants} className="missionChild">
                original composition, music search,
              </motion.div>
              <motion.div variants={childVariants} className="missionChild">
                sound design and voice over.
              </motion.div>
              <motion.div
                variants={childVariants}
                className="underline"
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
