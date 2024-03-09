import type { Metadata, Viewport } from "next";
import "./fonts.css";
import { manrope, stardom, freehand } from "./fonts";
import "./Sass/Main.sass";
import StarryBackground from "./Components/StarryBackground";
import Cursor from "./Components/Cursor";
import Header from "./Components/Header";
import BurgerModal from "./Components/BurgerModal";
import Logo from "./Components/Logo";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Lost Boy | Music Supervision London | Sonic Branding",
  description:
    "Lost Boy is a full-service creative music supervision house that helps translate brands into bespoke sonic worlds through music search, original composition, sound design and voice over.",
};

export const viewport: Viewport = {
  themeColor: "#10100e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${stardom.variable} ${freehand.variable}`}
    >
      <body className="page">
        <Analytics />
        <StarryBackground />
        <Cursor />
        <Header />
        <BurgerModal />
        <Logo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
