"use client";
import { useState } from "react";
import { getProjects } from "./Client";

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // video modal
  const openModal = (index: number) => {
    setSelectedVideo(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //get data
  const projects = getProjects();

  return (
    <main className="pageContent">
      {projects.map((project) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </main>
  );
}
