import React from "react";
import Elapses from "./Elapses";

export default function TicketReady() {
  return (
    <div className=" bg-transparent overflow-hidden">
      {/* <div className=" relative  w-full  bg-[#02191D] border border-[#24A0B5] rounded-3xl p-6 ticket-ready">
        hello
      </div> */}

      <div className="w-full bg-transparent border border-[#24A0B5] rounded-3xl p-20 relative bg-[#072C31] bg-[radial-gradient(50%_36.17%_at_50%_103.25%,rgba(36,160,181,0.5)_0%,rgba(36,160,181,0)_100%),radial-gradient(50%_13.92%_at_50%_0%,rgba(36,160,181,0.5)_0%,rgba(36,160,181,0)_100%)]">
        <div className=" bg-[#031E21]/30 border border-[#24A0B5] rounded-3xl p-3.5 backdrop-blur-md"></div>
        <Elapses />
      </div>
    </div>
  );
}

/**
 *
 *

position: absolute;
width: 30px;
height: 30px;
left: -10px;
bottom: 97px;

background: #D9D9D9;

 */
