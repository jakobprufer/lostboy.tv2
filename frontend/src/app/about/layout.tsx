import { ReactNode } from "react";

export const metadata = {
  title: "About | Lost Boy",
};

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return <div>{children}</div>;
}
