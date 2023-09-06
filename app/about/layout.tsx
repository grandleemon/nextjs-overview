import { ReactNode } from "react";

export default function AboutLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <nav>ABOUT NAV</nav>
      <main>{children}</main>
    </>
  );
}
