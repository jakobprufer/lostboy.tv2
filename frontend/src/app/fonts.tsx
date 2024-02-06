import { Manrope } from "next/font/google";
import localFont from "next/font/local";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
export const stardom = localFont({
  src: "../../public/fonts/Stardom-Regular.woff2",
  variable: "--font-stardom",
  display: "swap",
});
