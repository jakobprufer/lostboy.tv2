// import { create } from "zustand";

// export const Zustand = create((set) => ({
//   mouseOutEvent: null,
//   setMouseOutEvent: (mouseOutEvent: Function) => set({ mouseOutEvent }),
//   mouseOverEvent: null,
//   setMouseOverEvent: (mouseOverEvent: Function) => set({ mouseOverEvent }),
// }));

import { MouseEventHandler } from "react";
import { create } from "zustand";

interface ZustandInterface {
  mouseOutEvent: MouseEventHandler<HTMLElement>;
  mouseOverEvent: MouseEventHandler<HTMLElement>;
  setMouseOutEvent: (mouseOutEvent: MouseEventHandler<HTMLElement>) => void;
  setMouseOverEvent: (mouseOverEvent: MouseEventHandler<HTMLElement>) => void;
  atHome: boolean;
  setAtHome: (atHome: boolean) => void;
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
}));
