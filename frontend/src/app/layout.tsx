import type { Metadata, Viewport } from "next";
import "./fonts.css";
import { manrope, stardom } from "./fonts";
import "./Sass/Main.sass";
import StarryBackground from "./Components/StarryBackground";
import Cursor from "./Components/Cursor";
import Header from "./Components/Header";

export const metadata: Metadata = {
  title: "Lost Boy | Music Supervision London | Sonic Worlds",
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
    <html lang="en" className={`${manrope.variable} ${stardom.variable}`}>
      <body className="page">
        <StarryBackground />
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
