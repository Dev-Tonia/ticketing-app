import React from "react";
import Barcode from "./Barcode";
import Separator from "./Separator";

export default function TicketReady() {
  return (
    <div className=" bg-transparent overflow-hidden font-Roboto mx-auto max-w-[400px]">
      {/* heading  */}
      <div className=" text-white py-8 text-center">
        <h3 className="pb-4 text-2xl font-Alatsi md:text-3xl">
          Your Ticket is Booked!
        </h3>
        <p className="text-gray-300 text-sm md:text-base">
          Check your email for a copy or you can{" "}
          <span className="font-bold">download</span>
        </p>
      </div>

      <div className="w-full bg-transparent border border-[#24A0B5] rounded-3xl  my-8 bg-[#072C31] bg-[radial-gradient(50%_36.17%_at_50%_103.25%,rgba(36,160,181,0.5)_0%,rgba(36,160,181,0)_100%),radial-gradient(50%_13.92%_at_50%_0%,rgba(36,160,181,0.5)_0%,rgba(36,160,181,0)_100%)]">
        <div className="relative p-5">
          <>
            {/* top left */}
            <div className="absolute mt-[-16px] top-0 -left-[16.8px] rounded-full border-transparent  w-8 h-8 bg-[#041E23] rotate-45 border border-r-[#24A0B5]"></div>
            {/* top right */}
            <div className="absolute  mt-[-16px] top-0 -right-[16.8px] w-8 h-8 bg-[#041E23] border-transparent rounded-full -rotate-45 border border-l-[#24A0B5]"></div>
            {/* bottom left */}
          </>
          <div className=" bg-[#031E21]/30 border border-[#24A0B5] rounded-3xl p-3.5 mb-5 backdrop-blur-md -z-0 text-white">
            {/* title */}

            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-RoadRage mb-3">
                Techember Fest "25
              </h1>
              <div className="space-y-1">
                <div className="flex items-center text-center justify-center gap-2">
                  <span className="text-cyan-400 hidden sm:block">📍</span>
                  <span className="text-sm sm:text-base">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center text-center justify-center gap-2">
                  <span className="text-cyan-400 hidden sm:block">📅</span>
                  <span className="text-sm sm:text-base">
                    March 15, 2025 | 7:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* image section */}
            <div className="relative flex justify-center mb-3">
              <div className="border-4 border-greenone/50 w-[100px] sm:w-[120px] md:w-[140px] h-[100px] sm:h-[120px] md:h-[140px] rounded-xl overflow-hidden"></div>
            </div>

            {/* ticket details */}
            <div className="grid grid-cols-2 bg-[#08343C] border-2 border-[#133D44] rounded-lg p-4 text-left text-sm sm:text-base">
              <div className="space-y-1 pr-4 col-span-1 pb-2 border-r border-[#12464E]">
                <label className="text-white text-opacity-[0.33] text-xs sm:text-sm">
                  Name
                </label>
                <div className="text-white font-bold break-words overflow-hidden">
                  chinasa
                </div>
              </div>
              <div className="space-y-1 pl-4 col-span-1 pb-2">
                <label className="text-white text-opacity-[0.33] text-xs sm:text-sm">
                  Email
                </label>
                <div className="text-white font-bold break-words overflow-hidden">
                  ccc@gmail.com
                </div>
              </div>
              <div className="space-y-1 pr-4 col-span-1 border-r border-t border-[#12464E] py-2">
                <label className="text-white text-opacity-[0.33] text-xs sm:text-sm">
                  Ticket Type:
                </label>
                <div className="text-white break-words overflow-hidden">
                  Regular Access
                </div>
              </div>
              <div className="space-y-1 pl-4 col-span-1 border-t border-[#12464E] py-2">
                <label className="text-white text-opacity-[0.33] text-xs sm:text-sm">
                  Ticket for :
                </label>
                <div className="text-white">5</div>
              </div>
              <div className="space-y-1 col-span-2 border-t border-[#12464E] pt-2">
                <label className="text-white text-opacity-[0.33] text-xs sm:text-sm">
                  Special request?
                </label>
                <p className="text-white line-clamp-5">No request</p>
              </div>
            </div>
          </div>
          <>
            <div className="absolute bottom-0  mb-[-16px] -left-[16.8px] w-8 h-8 bg-[#041E23] rotate-45 rounded-full border border-transparent border-t-[#24A0B5] border-r-[#24A0B5]"></div>
            {/* bottom right */}
            <div className="absolute bottom-0 mb-[-16px] -right-[16.8px] -rotate-45 w-8 h-8 bg-[#041E23] rounded-full border border-transparent border-t-[#24A0B5] border-l-[#24A0B5]"></div>
          </>
        </div>
        {/* separators */}
        <div className="flex gap-1 justify-center">
          {Array(30).fill(<Separator />)}
        </div>
        {/* Barcode */}
        <div className="relative p-5">
          {" "}
          <div className="  py-[22px] px-8">
            <Barcode />
          </div>
          <>
            <div className="absolute bottom-0  mb-[-16px] -left-[16.8px] w-8 h-8 bg-[#041E23] rotate-45 rounded-full border border-transparent border-t-[#24A0B5]"></div>
            {/* bottom right */}
            <div className="absolute bottom-0 mb-[-16px] -right-[16.8px] -rotate-45 w-8 h-8 bg-[#041E23] rounded-full border border-transparent border-t-[#24A0B5]"></div>
          </>
        </div>
      </div>
    </div>
  );
}
