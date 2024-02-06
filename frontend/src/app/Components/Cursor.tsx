"use client";
import React, { useRef, useEffect } from "react";
import { Zustand } from "../Zustand/Zustand";

export default function Cursor() {
  const delay = 18;

  const dot = useRef<HTMLDivElement>(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  //   const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    // animateDotOutline();

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      //   cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (dot.current != null) {
      if (cursorVisible.current) {
        dot.current.style.opacity = "1";
        //   dotOutline.current.style.opacity = "1";
      } else {
        dot.current.style.opacity = "0";
        //   dotOutline.current.style.opacity = "0";
      }
    } else {
      null;
    }
  };

  const toggleCursorSize = () => {
    if (dot.current != null) {
      if (cursorEnlarged.current) {
        dot.current.style.transform = "translate(-50%, -50%) scale(2)";
        //   dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.5)";
      } else {
        dot.current.style.transform = "translate(-50%, -50%) scale(1)";
        //   dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    } else {
      null;
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  let scrollY = 0;

  function setScrollY() {
    scrollY = window.scrollY;

    // You can perform additional actions based on the distance here
  }

  // Attach the function to the scroll event
  window.addEventListener("scroll", setScrollY);

  // Initial call to set the initial distance
  setScrollY();

  const mouseMoveEvent = (e: MouseEvent) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY - scrollY;

    if (dot.current != null) {
      dot.current.style.top = endY.current + "px";
      dot.current.style.left = endX.current + "px";
    } else {
      null;
    }
  };

  //pass events to Zustand
  const { setMouseOutEvent, setMouseOverEvent } = Zustand();

  useEffect(() => {
    setMouseOutEvent(mouseOutEvent);
    setMouseOverEvent(mouseOverEvent);
  }, []);

  return <div className="cursorDot" ref={dot}></div>;
}
