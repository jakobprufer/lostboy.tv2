// import { create } from "zustand";

// export const Zustand = create((set) => ({
//   mouseOutEvent: null,
//   setMouseOutEvent: (mouseOutEvent: Function) => set({ mouseOutEvent }),
//   mouseOverEvent: null,
//   setMouseOverEvent: (mouseOverEvent: Function) => set({ mouseOverEvent }),
// }));

import { MouseEventHandler } from "react";
import { create } from "zustand";
import { Dispatch, SetStateAction } from "react";

interface ZustandInterface {
  mouseOutEvent: MouseEventHandler<HTMLElement>;
  mouseOverEvent: MouseEventHandler<HTMLElement>;
  setMouseOutEvent: (mouseOutEvent: MouseEventHandler<HTMLElement>) => void;
  setMouseOverEvent: (mouseOverEvent: MouseEventHandler<HTMLElement>) => void;
  atHome: boolean;
  setAtHome: (atHome: boolean) => void;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  hamburgerOpen: boolean;
  setHamburgerOpen: Dispatch<SetStateAction<boolean>>;
  scrollY: number;
  setScrollY: (scrollY: number) => void;
  currentPlaying: string;
  setCurrentPlaying: Dispatch<SetStateAction<string>>;
}

export const Zustand = create<ZustandInterface>()((set) => ({
  mouseOutEvent: () => {},
  setMouseOutEvent: (mouseOutEvent: MouseEventHandler<HTMLElement>) =>
    set({ mouseOutEvent }),
  mouseOverEvent: () => {},
  setMouseOverEvent: (mouseOverEvent: MouseEventHandler<HTMLElement>) =>
    set({ mouseOverEvent }),
  atHome: false,
  setAtHome: (atHome: boolean) => set({ atHome }),
  modalOpen: false,
  setModalOpen: (value: SetStateAction<boolean>) =>
    set((state) => ({
      modalOpen: typeof value === "function" ? value(state.modalOpen) : value,
    })),
  hamburgerOpen: false,
  setHamburgerOpen: (value: SetStateAction<boolean>) =>
    set((state) => ({
      hamburgerOpen:
        typeof value === "function" ? value(state.hamburgerOpen) : value,
    })),
  scrollY: 0,
  setScrollY: (scrollY: number) => set({ scrollY }),
  currentPlaying: "0",
  setCurrentPlaying: (value: SetStateAction<string>) =>
    set((state) => ({
      currentPlaying:
        typeof value === "function" ? value(state.currentPlaying) : value,
    })),
}));
