import React, { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <section className=" bg-[#02191D] min-h-screen relative z-40">
        <Navbar />
        <main className=" z-30">{children}</main>
        <div className="fixed bottom-0 left-0 w-full h-[30vh] bg-[radial-gradient(ellipse_at_bottom,rgba(36,160,181,0.3)_0%,rgba(36,160,181,0)_70%)] top-[70vh] -z-10"></div>
      </section>
    </>
  );
}
