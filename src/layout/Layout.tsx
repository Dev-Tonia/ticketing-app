import React, { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <section className=" bg-[#02191D] min-h-screen">
        <Navbar />
        <main>{children}</main>
      </section>
      <div className="fixed bottom-0 left-0 w-full h-[30vh] bg-[radial-gradient(ellipse_at_bottom,rgba(36,160,181,0.3)_0%,rgba(36,160,181,0)_70%)] top-[70vh]"></div>
    </>
  );
}
